import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'


export default function BookExpandedPage (props) {

  const [book, setBook] = useState('')

  let {bookID} = useParams() 

  useEffect(() => {
    const getData = async () => {
      const responseBook = await axios.get(`https://api.potterdb.com/v1/books/${bookID}`)
      console.log('data', responseBook)
      
      //assign API results to array
      setBook(responseBook.data.data)
    }
    getData()

  }, [props.books, bookID])

  return book ? (
    <div className="expandedItem">
      <Link to ='/books' className='navtext'>Back to Books</Link>
        <br/>
      <div className='expandedBody'>
        <div className='expandedText'>
        <h2>{book.attributes.title}</h2>
        <h3>Author: {book.attributes.author}</h3>
        <h3>Summary: {book.attributes.summary}</h3>

        </div>

        <img src = {book.attributes.cover} 
        className='expandedImage'
        />
      </div>
    </div>
  ) 
  :     <div> 
            <div className='home'>  
            <h2>book not found</h2>
            <Link to ='/books' className='navtext'>Back to Books</Link>
            </div> 
        </div>
}

