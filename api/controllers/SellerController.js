/**
 * Seller Controller
 * 
 * Controller to perform action for seller like creation, updation of info etc.
 */

module.exports = {
  /**
   * Controller method to create the seller accroding to request data.
   */
  create: (req, res) => {
    let reqObj = req.body;

    SellerService.create(reqObj, (err, seller) => {
      if (err) {
        console.log(err);
        return res.json(400, { message: 'Something went wrong' });
      }

      return res.json(200, { seller: seller });
    });
  }
};