import React from 'react';
import {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e =>{
      e.preventDefault();

      auth
      .signInWithEmailAndPassword(email,password)
      .then(auth =>{
        history.push('/')
      })
      .catch(error => alert(error.message))
      
    }
    const register = e =>{
        e.preventDefault();
         auth
         .createUserWithEmailAndPassword(email,password)
         .then((auth) => {
             
             if(auth){
                 history.push('/')
             }
            
         })
         .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <Link to ='/'>
        <img 
        className='login_logo'
         src='https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png'/>

        </Link>
          <div className='login_container'>
              <h1>Sign-In</h1>
              <form>
                  <h5>E-mail</h5>
                  <input type='text' value={email} onChange=
                  {e => setEmail(e.target.value)} />

                  <h5>Password</h5>
                  <input type='password' value={password} onChange=
                  {e => setPassword(e.target.value)} />
                   
                  <button type='submit' onClick={signIn}
                  className='login_signinbut'>Sign In</button>
                
              </form>
               <p>
                   By signing in you as a customer
                   agree to all the conditions .Our cookies
                   notify your content surfed on net.
               </p>
               <button onClick={register}
               className='login_registerbut'>Create Your Amazon Account</button>

          </div>


    </div>
  )
}

export default Login

