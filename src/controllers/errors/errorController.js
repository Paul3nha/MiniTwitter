// Hay que poner los 4 parametros en el middleware de error para que express lo reconozca como tal.
export const errorController = (error, req, res, next) => {
  res.status(error.httpStatus || 500).send({
    status: 'error',
    code: error.code || 'INTERNAL_SERVER_ERROR',
    message: error.message,
  });
};
