import axios from 'axios';
import './css/view.css';
import { useEffect, useState } from 'react';

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

 
const handlesub =async()=>{
  const na=name;
  const no=note
 await axios.post('http://localhost:3001/add',{
  "name":na,
  "notes":no
})}


const del =async(idd)=>{
  await axios.delete('http://localhost:3001/add'+idd)
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
