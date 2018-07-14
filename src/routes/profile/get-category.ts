import { RequestHandler } from 'express';
import { SkillCategory } from '../../models/SkillCategory';
import { SkillSubCategory } from '../../models/SkillSubCategory';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

export const getCategory: RequestHandler = async (req, res, next) => {
  try {
    const cats = await SkillCategory.find({
      cluster: req.query.cluster,
    }).exec();
    return res.status(200).send({
      success: true,
      categories: cats,
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.INTERNAL_SERVER_ERROR, err));
  }
};

export const getSubCategory: RequestHandler = async (req, res, next) => {
  try {
    const subCats = await SkillSubCategory.find({
      category: req.query.category,
    }).exec();
    return res.status(200).send({
      success: true,
      subCategories: subCats,
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.INTERNAL_SERVER_ERROR, err));
  }
};