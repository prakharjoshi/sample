/**
 * checkForRequestContentType
 *
 * This policy will check for the valid request which needs to be passed.
 *
 * For valid request check we will check the request header's content type.
 *
 */

module.exports = function (req, res, next) {
  var methods = ['PUT', 'POST', 'PATCH', 'DELETE'];

  if (_.includes(methods, req.method) && req.is('application/json')) {
    return next();
  }

  else if (!_.includes(methods, req.method)) {
    return next();
  }

  return res.json(400, { message: 'Invalid request' });
};
