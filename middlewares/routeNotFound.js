import ErrorResponse from '../utils/errorResponse.js'
export default (req, res, next) => {
  const error = new ErrorResponse(404, 'Route not found.')
  next(error)
}
