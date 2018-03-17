/**
 * Contract.js
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
    name: {
      type: 'string',
      required: true,
      unique: true,
      size: 128
    },
    description: {
      type: 'longtext'
    },
    buyer: {
      model: 'buyer',
      required: true
    },
    seller: {
      model: 'seller',
      required: true
    },
    dateOfCompletion: {
      type: 'datetime'
    },
    status: {
      type: 'string',
      enum: ['created', 'buyerInitiated', 'buyerBankApproved', 'buyerBankRejects', 'sellerBankApproved', 'sellerBankRejects', 'sellerApproved', 'sellerRejects'],
      defaultsTo: 'created'
    }
  }
};
