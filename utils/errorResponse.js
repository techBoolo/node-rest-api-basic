export default class ErrorResponse extends Error {
  constructor(statusCode, message) {
    super(message)
    this.statusCode = statusCode
    this.name = 'ErrorResponse'
  }
}
