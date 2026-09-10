function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: err.message || 'something went wrong' });
  }
  
  module.exports = errorHandler;