/**
 * Buyer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  autoPK: true,
  autosubscribe: false,
  autoTK: true,
  attributes: {
    firstName: {
      type: 'string',
      required: true,
      size: 128
    },
    lastName: {
      type: 'string',
      required: true,
      size: 128
    },
    email: {
      type: 'email',
      size: 128
    },
    phone: {
      type: 'string',
      size: 128
    },
    address: {
      type: 'text'
    },
    buyersBank: {
      type: 'string',
      required: true,
      index: true
    }
  }
};
