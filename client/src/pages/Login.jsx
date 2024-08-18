import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import { IoPersonAdd } from "react-icons/io5";
import '../css/materialize.css'; // Import the CSS file for styling

function Login() {
  const [uname, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [finduser, setFinduser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/user/')
      .then((response) => {
        setFinduser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlesub = () => {
    let userFound = false;
    finduser.forEach(user => {
      if (user.username === uname) {
        userFound = true;
        if (user.password === pass) {
          axios.put('http://localhost:3001/user/findu', {
            "uname": uname,
            "pass": pass
          })
          .then((response) => {
            navigate('/view/' + response.data);
          });
        } else {
          swal.fire("Wrong password", "Try a different password you last knew", "error");
        }
      }
    });
    if (!userFound) {
      swal.fire("Can't find the user", "Please register for our service", "error");
    }
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <h1>User Login</h1>
        <button className='button-add-person' onClick={() => navigate('./forget')}>
          <IoPersonAdd />
        </button>
        <form className='login-form' onSubmit={(e) => { e.preventDefault(); handlesub(); }}>
          <label htmlFor='username'>Enter your username</label>
          <input
            type="text"
            id='username'
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor='password'>Enter your Password</label>
          <input
            type="password"
            id='password'
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
