function userId(req, res, next) {
    const headerUserId = req.headers['x-user-id'];
    req.userId = headerUserId ? parseInt(headerUserId) : 1;
    next();
  }
  
  module.exports = userId;