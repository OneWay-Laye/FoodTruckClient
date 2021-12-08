import React, {Fragment, useState} from 'react'

import { signInCall } from './../../api/user'
import style from './SignIn.scss'

const SignIn = (props) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleEmailChange = event => {
    setEmail(event.target.value)
    console.log(email)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
    console.log(password)
  }

  const onSignIn = event => {
    event.preventDefault()


    signInCall(email, password)
      .then(res => props.setUser(res))
      .catch(console.log('Error Signing in'))
  }

    return (
      <Fragment>
        <div >
          <form className="form signIn">
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
              value={password}
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
             />
             </div>
             <button onClick={onSignIn}>Sign In!</button>
          </form>
        </div>
      </Fragment>
    )
}

export default SignIn
