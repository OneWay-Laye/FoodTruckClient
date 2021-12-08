import axios from 'axios'
import apiURL from './../apiConfig'

export const signInCall = (email, password) => {
  return axios({
    method: 'POST',
    url: apiURL + '/sign-in/',
    data: {
      credentials: {
        email: email,
        password: password
      }
    }
  })
}

export const signUpCall = (email, password, passwordConfirmation) => {
  return axios({
    method: "Post",
    url: apiURL + '/sign-up/',
    data: {
      credentials: {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    }
  })
}
