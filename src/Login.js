import React, { useState } from 'react'
import "./Login.css";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

const Login = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const submitHandler=(e)=> {
        e.preventDefault();

        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggenIn: true,
        })
        );
    };
  return (
    <div className="login">
      <form className="login__form" onSubmit={(e)=> submitHandler(e)}>
        <h1>Login Here!</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='submit__btn' >LOGIN</button>
      </form>
    </div>
  );
}

export default Login
