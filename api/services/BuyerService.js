/**
 * Place where all the buyer related model operations are done like writing to DB etc.
 */

 module.exports = {
   create: (reqObj, cb) => {
     if (!reqObj) {
       return cb(new Error('Invalid buyer information'));
     }

     Buyer.create(reqObj).exec((err, res) => {
        if (err) {
          return cb(new Error(err.message));
        }

        if (!res) {
          return cb(new Error('Invalid buyer creation'));
        }

        return cb(null, res);
     });
   }
 };