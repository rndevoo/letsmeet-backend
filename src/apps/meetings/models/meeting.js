/**
 * @overview The Meeting model.
 * The place field is an id from the Google Places API.
 */
'use strict';

import mongoose from 'mongoose';

import db from './../../../config/db';

const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  place: { type: String, required: true },
  description: { type: String, maxlength: 512 },
  userAccepted: { type: Schema.Types.ObjectId, ref: 'User' },
  usersInterested: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Meeting = db.model('Meeting', MeetingSchema);

export { Meeting, MeetingSchema };