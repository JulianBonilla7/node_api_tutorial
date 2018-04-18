/*
  Not Found Error Handler

  If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
*/
const notFound = (req, res) => {
  res.status(404).json({
    errors: [`${req.originalUrl} not found`]
  });
}

const serverError = (err, req, res) => {
  res.status(500).send(err);
}

module.exports = { notFound, serverError };
