/**
 * Contract Controller
 * 
 * Controller to perform action for contract like creation, updation of info etc.
 */

module.exports = {
  /**
   * Controller responsible for creating new contracts.
   */
  create: (req, res) => {
    let reqObj = req.body;

    ContractService.create(reqObj, (err, contract) => {
      if (err) {
        console.log(err);
        return res.json(400, { message: 'Something went wrong' });
      }

      return res.json(200, { contract: contract });
    });
  },

  /**
   * Controller to fetch list of contracts
   */
  getList: (req, res) => {
    ContractService.getList((err, contracts) => {
      if (err) {
        console.log(err);
        return res.json(400, { message: 'Something went wrong' });
      }

      return res.json(200, { contracts: contracts });
    });
  },

  /**
   * Controller to fetch specific contract
   */
  get: (req, res) => {
    let contractId = _.get(req.params, 'contractId');

    ContractService.get(contractId, (err, contract) => {
      if (err) {
        return res.json(400, { message: 'Something went wrong' });
      }

      return res.json(200, { contract: contract });
    });
  },

  /**
   * Controller to intiate the contracts by the buyer
   */
  initiate: (req, res) => {
    let contractId = _.get(req.params, 'contractId');

    ContractService.initiate(contractId, (err, result) => {
      if (err) {
        console.log(err);
        return res.json(400, { message: 'Something went wrong' });
      }

      return res.json(200, { result: result });
    });
  },

  /**
   * Controller to validate contract by buyer bank.
   */
  validateBuyerBank: (req, res) => {
    let contractId = _.get(req.params, 'contractId');

    ContractService.validateBuyerBank(contractId, (err, result) => {
      if (err) {
        console.log(err);
        return res.json(400, { message: 'Something went wrong' });
      }

      return res.json(200, { result: result });
    });
  },

  /**
   * Controller to validate contract by seller bank.
   */
  validateSellerBank: (req, res) => {
    let contractId = _.get(req.params, 'contractId');

    ContractService.validateSellerBank(contractId, (err, result) => {
      if (err) {
        console.log(err);
        return res.json(400, { message: 'Something went wrong' });
      }

      return res.json(200, { result: result });
    });
  },

  /**
   * Controller to validate contract by seller bank.
   */
  validateSeller: (req, res) => {
    let contractId = _.get(req.params, 'contractId');

    ContractService.validateSeller(contractId, (err, result) => {
      if (err) {
        console.log(err);
        return res.json(400, { message: 'Something went wrong' });
      }

      return res.json(200, { result: result });
    });
  }
}