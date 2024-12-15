import React from 'react';

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Jack Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type='email' placeholder=' email' />
                <input type='password' placeholder='password'/>
               
                <button>Sign Up</button>

            </form>
            <p>you do not have account? Register</p>

        </div>
      
    </div>
  )
}

export default Login;

