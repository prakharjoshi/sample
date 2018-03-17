/**
 * Validation check to confirm buyer has not initiated the twice. If the status of contract is not `created` then that contract has already been initiated
 */

module.exports = (req, res, next) => {
  let contractId = _.get(req.params, 'contractId');

  Contract.findOne({ id: contractId }).exec((err, contract) => {
    if (err) {
      return next(new Error('Something went wrong'));
    }

    if (contract.status !== 'created') {
      return next({ message: 'Cann\'t initiate a contract, its been initiated already' });
    }

    return next();
  });
};