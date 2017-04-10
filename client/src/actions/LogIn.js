export function LogInRequest(username, password) {
  return {
  	type: 'LOG_IN_REQUEST',
  	username
  	password
  }
}

export function LogInFailure() {
  return {
  	type: 'LOG_IN_FAILURE',
  }
}

export function LogInSuccess() {
  return {
    type: 'LOG_IN_SUCCESS'
  }
}
