class Response {

  error(data, message) {
    return {
        success: false,
        data: data,
        message: message
    }
  }

  success(data, message) {
    return {
        success: true,
        data: data,
        message: message
    }
  }

}

module.exports = new Response;
