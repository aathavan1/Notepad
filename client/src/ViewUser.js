import axios from 'axios';
import './css/view.css';
import { useEffect, useState } from 'react';
import express from 'express';

function ViewUser() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [note, setNote] = useState([]);




  useEffect(() => {
    axios.get('http://localhost:3001/view')
    .then((user) => {
      setUser(user.data)
    }).catch(err => console.log(err))

  }, [])

 
  
  


  return (
    <>
      <div className='box'>
        <table>
          <tr>
            <th>Name</th>
            <th>Note</th>
          </tr>
          {
            user.map(user => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.note}</td>
                  <button className='delete'>Delete</button>
                </tr>
              )
            })
          }
        </table>
        <form >
          <lable>Name</lable>
          <input type='text' onChange={(e) => setName(e.target.value)}></input><br></br>
          <lable>Notes</lable>
          <input type='text' onChange={(e) => setNote(e.target.value)}></input><br>
          </br>
          <button type='sumit'>submit</button>
        </form>
      </div>
    </>
  );
}

export default ViewUser;
