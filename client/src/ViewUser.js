import axios from 'axios';
import './css/view.css';
import { useEffect, useState } from 'react';

function ViewUser() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [note, setNote] = useState([]);




  useEffect(() => {
    axios.get('https://notepad-server-one.vercel.app/view')
    .then((user) => {
      setUser(user.data)
    }).catch(err => console.log(err))

  }, [])

 
const handlesub =async()=>{
  const na=name;
  const no=note
 await axios.post('https://notepad-server-one.vercel.app/add',{
  "name":na,
  "notes":no
})}


const del =async(idd)=>{
  await axios.delete('https://notepad-server-one.vercel.app/add'+idd)
}
  


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
                  <button className='delete' onClick={()=>del(user._id)}>Delete</button>
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
          <button type='sumit' onClick={handlesub}>submit</button>
        </form>
      </div>
    </>
  );
}

export default ViewUser;
