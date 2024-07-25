import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'


export default function FilmExpandedPage (props) {

  const [film, setFilm] = useState('')

  let {filmID} = useParams() 

  useEffect(() => {
    const getData = async () => {
      const responseFilm = await axios.get(`https://api.potterdb.com/v1/movies/${filmID}`)
      console.log('data', responseFilm)
      
      //assign API results to array
      setFilm(responseFilm.data.data)
    }
    getData()

  }, [props.films, filmID])

  return film ? (
    <div className="expandedItem">
      <Link to ='/films' className='navtext'>Back to Films</Link>
        <br/>
      <div className='expandedBody'>
        {/* <div className='expandedImageContainer'> */}
          <img className= 'expandedImage' src = {film.attributes.poster} />
        {/* </div> */}
        
        <div className='expandedText'>
        <h2>{film.attributes.title}</h2>
        <h3>{film.attributes.summary}</h3>

        </div>


      </div>
    </div>
  ) 
  :     <div> 
            <div className='home'>  
            <h2>Film not found</h2>
            <Link to ='/films' className='navtext'>Back to Films</Link>
            </div> 
        </div>
}

