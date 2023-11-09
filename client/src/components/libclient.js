import { useState } from 'react';
import axios from 'axios';
import ViewAuthor from './authors.js';
import ViewBooks from './books.js';
import ShowStatus from './available.js';
import BookDetail from './bookdtls.js'
import AddBook from './addbook.js'
import makeUrl from '../utils/makeurl.js';

export default function LibClient() {
  const [content, setContent] = useState({data: [], dtls: false});

  function handleContent(contentType, bookId='NA') {
      axios.get(makeUrl(contentType, bookId))
        .then(res => {
            let showDtls = false;
            if(contentType === 'books')
                showDtls = true;
            if(contentType === 'book_dtls') {
                let copies = res.data.copies;
                res.data = copies.map(function(copy) {
                    return copy.imprint + ' | ' + copy.status;
                });
            }
            setContent({data: res.data, dtls: showDtls});
        })
  }

  return(
    <div>
        <ol>
              {content.data.map(function(val, index) {
                if(content.dtls)
                    return (<li key={index}> {val} <BookDetail book={val} handleContent={handleContent}/></li>)
                else
                    return (<li key={index}> {val} </li>)
              })}
        </ol>
        <ViewAuthor handleContent={handleContent}/>
        <ViewBooks handleContent={handleContent}/>
        <ShowStatus handleContent={handleContent}/>
        <AddBook />
    </div>
  )
}

//const [authors, setAuthors] = useState([]);
//
//  // Empty list as 2nd argument ensures that the effect
//  // is called only once and not after every render
//  useEffect(() => {
//    axios.get('http://localhost:8000/authors')
//      .then(res => {
//        setAuthors(res.data);
//      })
//  }, []);
