/**
 * @overview The meetings handlers.
 */
'use strict';

import { Meeting } from './models/meeting';

export class MeetingsHandlers {
  /**
   * @name list
   * @method
   *
   * @description
   */
  static async list (ctx) {
    // TODO
    ctx.body = await Meeting.find();
  }
}