import axios from 'axios';
import { useState } from 'react';

export default function AddBook() {
    const [authorFamilyName, setAuthorFamilyName] = useState('');
    const [authorFirstName, setAuthorFirstName] = useState('');
    const [genreName, setGenreName] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [msg, setMsg] = useState('');

    function handleFamilyNameChange(e) {
        setAuthorFamilyName(e.target.value);
    }
    function handleFirstNameChange(e) {
        setAuthorFirstName(e.target.value);
    }
    function handleGenreChange(e) {
        setGenreName(e.target.value);
    }
    function handleBookTitleChange(e) {
        setBookTitle(e.target.value);
    }
    function handleClick() {
        const apiUrl = 'http://localhost:8000/newbook';
        const postData = {
          familyName: authorFamilyName,
          firstName: authorFirstName,
          genreName: genreName,
          bookTitle: bookTitle
        };

        // Send a POST request
        axios.post(apiUrl, postData)
          .then(response => {
            // Handle the success response
            setMsg('Response:' + response.data);
          })
          .catch(error => {
            // Handle errors
            setMsg('Error:' + error.message);
          });
    }
    return(
        <div>
          <input type="text" placeholder= "Family Name" onChange={handleFamilyNameChange}/>
          <input type="text" placeholder="First Name" onChange={handleFirstNameChange}/>
          <input type="text" placeholder="Genre" onChange={handleGenreChange}/>
          <input type="text" placeholder="Book Title" onChange={handleBookTitleChange}/>
          <button onClick={handleClick}> Add New Book </button>
          <p> {msg} </p>
        </div>
      )
}