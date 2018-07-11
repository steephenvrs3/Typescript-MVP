/* tslint:disable:variable-name */
import { model as mongooseModel, Schema } from 'mongoose';

const educationDetailsSchema = new Schema({
  userId: {
    type: String,
    ref: 'User',
    unique: true,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
  },
  durationFrom: {
    type: Date,
  },
  durationTo: {
    type: Date,
  },
  typeOfInstitution: {
    type: String,
  },
  nameOfInstitution: {
    type: String,
  },
  locationCountry: {
    type: String,
  },
  locationCity: {
    type: String,
  },
  major: {
    type: String,
  },
  degree: {
    type: String,
  },
  grade: {
    type: String,
  },
  mainSubjects: {
    type: String,
  },
  activities: {
    type: String,
  },
});

export const Education = mongooseModel('Education', educationDetailsSchema);