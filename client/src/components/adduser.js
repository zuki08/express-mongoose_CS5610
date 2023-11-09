import { useState } from 'react';
import axios from 'axios';

export default function AddUser() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleNewUser() {
    console.log(name);
    const newUser = {id:Math.floor(Math.random() * 100000), username: name};
    axios.post('http://localhost:8000/adduser', newUser)
      .then(res => {
        console.log(res);
        console.log(res.data);
        setMsg(res.data);
    });
  }

  return(
    <>
      <input type="text" onChange={handleNameChange} />
      <button onClick={handleNewUser}> Add New User </button>
      <p> {msg} </p>
    </>
  )
}
