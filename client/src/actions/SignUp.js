import axios from 'axios'

export function SigningUp() {
  return {
    type: 'SIGNING_UP'
  }
}

export function SignUpFailure(error) {
  return {
    type: 'SIGN_UP_FAILURE',
    error
  }
}

export function SignUpSuccess(data) {
  return {
    type: 'SIGN_UP_SUCCESS',
    data
  }
}

export function SignUp(username, email, password) {
  console.log(username, email, password)
  return (dispatch) => {
    dispatch(SigningUp())
    axios.post('/api/signup', {username, email, password})
    .then(data => { 
      dispatch(SignUpSuccess(data))
      window.location = '/#/login'
    })
    .catch(error => dispatch(SignUpFailure(error)))
  }
}

