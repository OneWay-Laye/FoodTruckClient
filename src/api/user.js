import axios from 'axios'
import apiURL from './../apiConfig'

export const signInCall = (email, password) => {
  return axios({
    "method": 'POST',
    url: apiURL + '/sign-in/',
    data: {
      credentials: {
        email: email,
        password: password
      }
    }
  })
}
