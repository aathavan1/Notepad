import axios from 'axios'
import React, { useEffect, useState } from 'react';
import '../css/materialize.css'


function Userreg() {

  const [uname, setUser] = useState('')
  const [pass, setPass] = useState('')


 
  const handlesub = async() => {
    await axios.post('http://localhost:3001/user/add',{
      
      "username":uname,
      "password":pass
    })
   
  }
  

  return (
    <div className='box-center'>
      <br />
      <center>
      <h1>New User Registration</h1></center>
      <br />
      <br />
      <form className='form'>

        <label>Enter your username</label>
        <input type="text" placeholder="Username" name='name' onChange={(e) => setUser(e.target.value)} /><br />
        <label>Enter your Password</label>
        <input type="password" placeholder="password" name='pass' onChange={(e) => setPass(e.target.value)} />
        <button onClick={handlesub} type='button'>Submit</button>
      </form>

    </div>
  );
}

export default Userreg;
