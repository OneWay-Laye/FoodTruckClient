import React, {useState, Fragment} from 'react'

import { signUpCall } from './../../api/user'

const SignUp = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handlePasswordConfirmChange = event => {
    setPasswordConfirmation(event.target.value)
  }

  const onSignUp = event => {
    event.preventDefault()

    signUpCall(email, password, passwordConfirmation)
      .then(res => console.log('Successfully signed Up!' + res ))
      .catch(console.log('Error Signing Up'))
  }

    return (
      <Fragment>
        <div >
          <form className="form signUp">
            <div className="group">
              <label className="label">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleEmailChange}
              />
            </div>

            <div className="group">
              <label>Password</label>
              <input
                required
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
               />
             </div>

             <div className="group">
             <label>Confirm Password</label>
             <input
                required
                name="password"
                value={passwordConfirmation}
                type="password"
                placeholder="Password"
                onChange={handlePasswordConfirmChange}
              />
              </div>
             <button onClick={onSignUp}>Sign Up!</button>
          </form>
        </div>
      </Fragment>
    )
}

export default SignUp
