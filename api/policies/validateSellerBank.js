/**
 * Validation check to confirm seller bank only validates after the buyer bank has updated the contract has initiated the contract request.
 */

module.exports = (req, res, next) => {
  let contractId = _.get(req.params, 'contractId');

  Contract.findOne({ id: contractId }).exec((err, contract) => {
    if (err) {
      return next(new Error('Something went wrong'));
    }

    if (contract.status !== 'buyerBankApproved') {
      return next({ message: 'Cann\'t update a contract' });
    }

    return next();
  });
};