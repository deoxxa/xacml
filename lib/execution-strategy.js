var ExecutionStrategy = module.exports = function ExecutionStrategy(options) {};

ExecutionStrategy.prototype.executeRequest = function executeRequest(req, cb) {
  return cb(Error("not implemented"));
};
