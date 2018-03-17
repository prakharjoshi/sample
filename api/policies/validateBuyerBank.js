/**
 * Validation check to confirm buyer bank only validates after the buyer has initiated the contract request.
 */

module.exports = (req, res, next) => {
  let contractId = _.get(req.params, 'contractId');

  Contract.findOne({ id: contractId }).exec((err, contract) => {
    if (err) {
      return next(new Error('Something went wrong'));
    }

    if (contract.status !== 'buyerInitiated') {
      return next({ message: 'Cann\'t update a contract' });
    }

    return next();
  });
};