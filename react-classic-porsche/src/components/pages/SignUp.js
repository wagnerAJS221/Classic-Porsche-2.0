import '../../App.css'
import { useState } from 'react'
import './Sign-up.css'
import { useNavigate } from 'react-router-dom'

export default function SignUp({ signUp, logIn, logOut }) {
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [logInEmail, setLogInEmail] = useState('')
  const [logInPassword, setLogInPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmitSignUp(event) {
    event.preventDefault()
    try {
      await signUp(signUpEmail, signUpPassword)
      navigate('/')
    } catch (error) {
      console.log(error, ':Incorrect email or password format')
    }
  }
  async function handleSubmitLogin(event) {
    event.preventDefault()
    try {
      await logIn(logInEmail, logInPassword)
      navigate('/')
    } catch (error) {
      console.log(error, ':Incorrect email or password provided')
    }
  }
  return (
    <>
      <h1 className="sign-up">Register</h1>

      <div className="register-form">
        <h1 className="registration-heading">Registration</h1>
        <br />
        <form onSubmit={handleSubmitSignUp}>
          <input
            type="email"
            name="email"
            className="registration-login-input"
            placeholder="Your Email"
            value={signUpEmail}
            onChange={(event) => setSignUpEmail(event.target.value)}
          />

          <br />

          <input
            type="password"
            name="registration-password"
            className="registration-login-input"
            placeholder="Password"
            value={signUpPassword}
            onChange={(event) => setSignUpPassword(event.target.value)}
          />
          <br />

          <button type="submit" className="btn-register">
            Register
          </button>
        </form>
        <br />
        <h1 className="registration-heading">Login</h1>
        <br />
        <form onSubmit={handleSubmitLogin}>
          <input
            type="email"
            name="login email"
            className="registration-login-input"
            placeholder="Your Email"
            value={logInEmail}
            onChange={(event) => setLogInEmail(event.target.value)}
          />

          <br />

          <input
            type="password"
            name="login-password"
            className="registration-login-input"
            placeholder="Password"
            value={logInPassword}
            onChange={(event) => setLogInPassword(event.target.value)}
          />
          <br />

          <button type="submit" className="btn-register">
            Login
          </button>
        </form>
        <button onClick={logOut}>LogOut</button>
      </div>
    </>
  )
}
