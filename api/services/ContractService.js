/**
 * Place where all the contract related model operations are done like writing to DB etc.
 */

module.exports = {
  /**
   * Service function to create contract in DB
   */
  create: (reqObj, cb) => {
    if (!reqObj) {
      return cb(new Error('Invalid Contract information'));
    }

    Contract.create(reqObj).exec((err, res) => {
       if (err) {
         return cb(new Error(err.message));
       }

       if (!res) {
         return cb(new Error('Invalid contract creation'));
       }

       return cb(null, res);
    });
  },

  /**
   * Service function to get list of all the contracts from DB
   */
  getList: (cb) => {
    Contract.find().exec((err, res) => {
      if (err) {
        return cb(new Error(err.message));
      }

      if (!res) {
        return cb(new Error('No contracts found for you!!'));
      }

      return cb(null, res);
    });
  },

  /**
   * Service function to get specific contract from contract ID
   */
  get: (contractId, cb) => {
    if (!contractId) {
      return cb(new Error('Invalid contract details'));
    }

    Contract.findOne({ id: contractId }).exec((err, contract) => {
      if (err) {
        return cb(new Error(err.message));
      }

      if (!contract) {
        return cb(new Error('No Contract found for you!!'));
      }

      return cb(null, contract);
    });
  },

  /**
   * Service function to initiate the contract from buyer
   */
  initiate: (contractId, cb) => {
    if (!contractId) {
      return cb(new Error('Invalid contract details'));
    }

    Contract.update({ id: contractId }, { status: 'buyerInitiated' }).exec((err, result) => {
      if (err) {
        return cb(new Error(err.message));
      }

      return cb(null, result ? true: false);
    });
  },

  /**
   * Service function to validate the contract from buyer bank
   */
  validateBuyerBank: (contractId, cb) => {
    if (!contractId) {
      return cb(new Error('Invalid contarct Id'));
    }

    Contract.update({ id: contractId }, { status: 'buyerBankApproved' }).exec((err, result) => {
      if (err) {
        return cb(new Error(err.message));
      }

      return cb(null, result ? true: false);
    });
  },

  /**
   * Service function to validate the contract from seller bank
   */
  validateSellerBank: (contractId, cb) => {
    if (!contractId) {
      return cb(new Error('Invalid contarct Id'));
    }

    Contract.update({ id: contractId }, { status: 'sellerBankApproved' }).exec((err, result) => {
      if (err) {
        return cb(new Error(err.message));
      }

      return cb(null, result ? true: false);
    });
  },

  /**
   * Service function to validate the contract from seller. Also update the date of completion
   */
  validateSeller: (contractId, cb) => {
    if (!contractId) {
      return cb(new Error('Invalid contarct Id'));
    }

    Contract.update({ id: contractId }, { status: 'sellerApproved', dateOfCompletion: new Date() }).exec((err, result) => {
      if (err) {
        return cb(new Error(err.message));
      }

      return cb(null, result ? true: false);
    });
  }
};