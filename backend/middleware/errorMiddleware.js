const notFound = (req, res, next) => {
  const error = new Error(`not found ${req.originalURl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.statusCode = statusCode;
  res.json({
    message: error.message,
  });
};

export { notFound, errorHandler };
