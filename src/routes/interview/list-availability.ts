import { RequestHandler } from 'express';
import * as moment from 'moment-timezone';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { InterviewAvailabilityCalender } from '../../models/InterviewAvailabilityCalender';

export const listBPMAvailability: RequestHandler = async (req, res, next) => {
  try {
    const timezone = req.query.timezone || 'Europe/Berlin';
    const today = moment(new Date()).tz(timezone);
    const todayInWeek = today.format('dddd');

    let offset = 2;
    if (todayInWeek === 'Friday') {
      offset = 4;
    }
    const dateInit = new Date(
      new Date().setUTCDate(new Date().getUTCDate() + offset),
    );
    const gettingDate = req.query.date ? new Date(req.query.date) : dateInit;
    const forward = req.query.forward ? req.query.forward : 'true';
    const givenStartTime = new Date(gettingDate.setUTCHours(23, 59, 59, 999));
    const givenEndTime = new Date(gettingDate.setUTCHours(0, 0, 0, 0));

    let timeQuery = {};
    let sortVariable = 1;
    if (forward === 'true') {
      timeQuery = { startTime: { $gt: givenStartTime } };
    } else {
      sortVariable = -1;
      timeQuery = { startTime: { $lt: givenEndTime } };
    }
    const dates = await InterviewAvailabilityCalender.aggregate([
      {
        $match: {
          $and: [timeQuery, { booked: false }],
        },
      },
      {
        $group: {
          _id: '$slotDayStartingTime',
          slots: {
            $addToSet: {
              startTime: '$startTime',
              endTime: '$endTime',
            },
          },
        },
      },
      { $unwind: '$slots' },
      { $sort: { 'slots.startTime': 1 } },
      { $group: { _id: '$_id', slotData: { $push: '$slots' } } },
      { $sort: { _id: sortVariable } },
      { $limit: 3 },
      { $sort: { _id: 1 } },
    ]).exec();
    return res.status(200).send({ success: true, data: dates });
  } catch (err) {
    return next(new RequestError(RequestErrorType.INTERNAL_SERVER_ERROR, err));
  }
};
