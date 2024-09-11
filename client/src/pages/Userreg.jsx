import axios from 'axios'
import React, { useEffect, useState } from 'react';
import '../css/materialize.css'
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function Userreg() {

  const [uname, setUser] = useState('')
  const [pass, setPass] = useState('')
  const navigate=useNavigate()



  const handlesub = async () => {

    try{
      if(uname.length>0 && pass.length>7){
        await axios.post('http://localhost:3001/user/add', {
          "username": uname,
          "password": pass
        })
        swal.fire("Done", "You have created a new account", "success");
        navigate('../')
      }
      else if(pass.length<8){
        swal.fire("Warning", "Your password should contains atleast 8 characters", "error");

      }

    }
    catch{
      console.log("Error")
    }
    

  }


  return (
    <div className='login-container'>
      <div className='login-box'>
        <center>
          <h1>New User Registration</h1></center>
        <br />
        <br />
        <form className='login-form' >
          <label>Enter your username</label>
          <input type="text" htmlFor='username' placeholder="Username" name='name' onChange={(e) => setUser(e.target.value)} /><br />
          <label>Enter your Password</label>
          <input type="password" placeholder="password" name='pass' onChange={(e) => setPass(e.target.value)} />
          <button onClick={handlesub} type='button'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Userreg;
