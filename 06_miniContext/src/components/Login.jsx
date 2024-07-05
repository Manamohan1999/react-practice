import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <div>
      <h2>Login Form</h2>
      <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Enter Username'/>
      <input value={password}  onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter Password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
