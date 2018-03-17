/**
 * Buyer Controller
 * 
 * Controller to perform action for Buyers like creation, updation of info etc.
 */

module.exports = {
  /**
   * Create controller to create buyer data according to request data.
   */
  create: (req, res) => {
    let reqObj = req.body;

    BuyerService.create(reqObj, (err, buyer) => {
      if (err) {
        return res.json(400, { message: 'Something went wrong' });
      }

      return res.json(200, { buyer: buyer });
    });
  }
};