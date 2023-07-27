import { useState, useHistory
 } from 'react';
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .thennp(auth => {
      history.push('/')
    }
      )
      .catch(error => alert(error.message))

  }

  const register = (e) => {
    e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password).then((auth) => {
        // console.log(auth);
        if(auth){
          history.push('/');
        }
      }).catch(error => alert(error.message))
  }
  return (
    <div className='login'>
      <Link to='/ '>
      <img  className='login__logo'src="https://economictimes.indiatimes.com/thumb/msid-59738992,width-640,height-480,resizemode-75,imgsize-25499/amazon.jpg" alt="#" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form >
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button type='submit' className='login__signInButton' onclick={signIn}>Sign-in</button>
          <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice .</p>

          <button className='login__registerButton' onclick={register}> Create your Amazon Account
         </button>
        </form>
      </div>
    
    </div>
  )
}

export default Login
