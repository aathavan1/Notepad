import axios from 'axios'
import React, { useEffect, useState } from 'react';
import '../css/materialize.css'


function Userreg() {

  const [uname, setUser] = useState('')
  const [pass, setPass] = useState('')



  const handlesub = async () => {
    await axios.post('https://notepad-server-one.vercel.app/user/add', {

      "username": uname,
      "password": pass
    })

  }


  return (
    <div className='login-containe'>
      <center>
      <div className='login-box' >

        <h1>New User Registration</h1>

        <form className='login-form'>

          <label htmlFor='username'>Enter your username</label>
          <input type="text"
            id='username' 
            placeholder="Username"
             name='name' 
             onChange={(e) => setUser(e.target.value)} /><br />
          <label htmlFor='password'>Enter your Password</label>
          <input type="password"
            id='password'
             placeholder="password" 
             name='pass' 
             onChange={(e) => setPass(e.target.value)} />
          <button onClick={handlesub} type='submit'>Submit</button>
        </form>
      </div>
      </center>
    </div>
  );
}

export default Userreg;
