/**
 * Place where all the seller related model operations are done like writing to DB etc.
 */

module.exports = {
  create: (reqObj, cb) => {
    if (!reqObj) {
      return cb(new Error('Invalid seller information'));
    }

    Seller.create(reqObj).exec((err, res) => {
       if (err) {
         return cb(new Error(err.message));
       }

       if (!res) {
         return cb(new Error('Invalid seller creation'));
       }

       return cb(null, res);
    });
  }
};