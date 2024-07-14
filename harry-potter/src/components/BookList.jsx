import { useState, useEffect } from 'react'
import axios from 'axios'

export default function BookList () {

    const [books, setBooks] = useState([])
  
    useEffect(()=>{
      const getData = async () => {
        const responseBooks = await axios.get(`https://api.potterdb.com/v1/books`)
        console.log('data', responseBooks)
        
        //assign API results to array
        setBooks(responseBooks.data.data)
      }
      getData()
  
    },[])

    console.log(books)
    
    if(!books) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    books.map((book, index) => (
                        <div key={index} 
                        className="objectItem"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${book.attributes.cover})`, 
                            backgroundSize:'600px', 
                            backgroundPosition: 'center 80%'}} 
                        >
                            
                            <h2>{book.attributes.title}</h2>
                            <h3>Author: {book.attributes.author}</h3>
                            <h3>Summary: {book.attributes.summary}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }