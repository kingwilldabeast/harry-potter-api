import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function FilmList () {

    const [films, setFilms] = useState([])

    let navigate = useNavigate()
    const showFilm = (filmID) => {
      navigate(`${filmID}`)
    }
  
    useEffect(()=>{
      const getData = async () => {
        const responseFilms = await axios.get(`https://api.potterdb.com/v1/movies`)
        console.log('data', responseFilms)
        
        //assign API results to array
        setFilms(responseFilms.data.data)
      }
      getData()
  
    },[])

    console.log(films)
    
    if(!films) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    films.map((film, index) => (
                        <div key={index} 
                        className="objectItem"
                        onClick={() => showFilm(film.id)}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${film.attributes.poster})`, 
                            backgroundSize:'600px', 
                            backgroundPosition: 'center 30%'}} 
                        >
                            
                            <h2>{film.attributes.title}</h2>
                            {/* <h3>Summary: {film.attributes.summary}</h3> */}
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }