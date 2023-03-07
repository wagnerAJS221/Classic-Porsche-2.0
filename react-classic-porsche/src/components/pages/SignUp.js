import React, { useState } from 'react'
import '../../App.css'
import Button from '../Button'
import './Sign-up.css'

export default function SignUp() {
  // const [username, setUseName] = useState('')
  // const [password, setPassword] = useState('')

  // const handleRegister = async (e) => {
  //   e.preventDefault()

  //   const respone = e.target.value

  //   console.log(respone)
  // const data = {
  //   username,
  //   password
  // }

  // if (username === null || password === null) {
  //   console.log(false)
  // }

  // console.log(true)

  //  fetch('http://localhost:4000/user/register', {
  //    method: 'POST',
  //    headers: { 'Content-Type': 'application/json' },
  //    body: JSON.stringify(data)
  //  })
  //    .then((response) => response.json())
  //    .then((data) => {
  //      setNewNotification('')
  //      const keyName = Object.keys(data)[0]

  //      if (keyName === 'error') setNewNotification(data.error)
  //      else
  //        setNewNotification(
  //          `A new User ${data.user.username} has been created.`
  //        )
  //    })
  // }
  return (
    <>
      <h1 className="sign-up">Register</h1>

      <div className="register-form">
        <h1 className="registration-heading">Registration</h1>
        <br />
        <form>
          <input
            type="email"
            name="email"
            className="registration-login-input"
            placeholder="Your Email"
          />

          <br />

          <input
            type="password"
            name="registration-password"
            className="registration-login-input"
            placeholder="Password"
          />
          <br />

          <button className="btn-register">Register</button>
        </form>
        <br />
        <h1 className="registration-heading">Login</h1>
        <br />
        <form>
          <input
            type="email"
            name="login email"
            className="registration-login-input"
            placeholder="Your Email"
          />

          <br />

          <input
            type="password"
            name="login-password"
            className="registration-login-input"
            placeholder="Password"
          />
          <br />

          <button className="btn-register">Login</button>
        </form>
      </div>
    </>
  )
}
