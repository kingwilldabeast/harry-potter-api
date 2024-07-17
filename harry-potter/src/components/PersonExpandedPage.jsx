import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'


export default function PersonExpandedPage (props) {

  const [person, setPerson] = useState('')

  let {personID} = useParams() 

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.potterdb.com/v1/characters/${personID}`)
      console.log('data', response)
      
      //assign API results to array
      setPerson(response.data.data)
    }
    getData()

  }, [props.people, personID])

  return person ? (
    <div className="expandedItem">
      <Link to ='/people' className='navtext'>Back to people</Link>
        <br/>
      <div className='expandedBody'>
        <div className='expandedText'>
        <h2>{person.attributes.name}</h2>
        <h3>{person.attributes.name}</h3>
        <h3>Summary: {person.attributes.name}</h3>

        </div>

        <img src = {person.attributes.image} 
        className='expandedImage'
        />
      </div>
    </div>
  ) 
  :     <div> 
            <div className='home'>  
            <h2>person not found</h2>
            <Link to ='/people' className='navtext'>Back to people</Link>
            </div> 
        </div>
}

