import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { IoMdArrowRoundBack } from "react-icons/io";
import '../css/view.css'; // Import the CSS file

function View() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState('');
  const [count, setCount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://notepad-server-one.vercel.app/view/${id}`)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((err) => {
        console.error("Error fetching notes", err);
      });
  }, [count]);

  const submit = async () => {
    try {
      reload()
      await axios.post('https://notepad-server-one.vercel.app/view/add', {
        uid: id,
        unote: content,
      });
      setContent('');
      setCount(count + 1); // Refresh notes by updating count
    } catch (err) {
      console.error("Error adding note", err);
    }
  };

  const reload=()=>{
    window.location.reload(false)
  }
  
  const delfun = async (keys) => {
    try {
      setCount(count + 1); // Refresh notes by updating count
      await axios.delete(`https://notepad-server-one.vercel.app/view/delete/${keys}`);
    } catch (err) {
      console.error("Error deleting note", err);
    }
  };

  return (
    <div className="view-container">
      <button  className="add-button"><IoMdArrowRoundBack /></button>
      <h1>Notes</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your note here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="note-input"
        />
        <button onClick={submit} className="add-button">Add</button>
      </div>
      <div className="notes-list">
        {notes.map(note => (
          <div key={note._id} className="note-item">
            <p className="note-content">{note.unote}</p>
            <button onClick={() => delfun(note._id)} className="delete-button">
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>

  );
}

export default View;
