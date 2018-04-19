/*
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch and errors they throw, and pass it along to our express 
  middleware with next()
*/
const catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

/*
  If we hit a route that is not found, we mark it as 
  404 and pass it along to the next error handler to display
*/
const notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

const getErrors = (err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send({ message: err.message });
}

module.exports = {
  catchErrors,
  notFound,
  getErrors
};
