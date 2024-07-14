import { useState, useEffect } from 'react'
import axios from 'axios'

export default function PeopleList () {

    const [people, setPeople] = useState([])
  
    useEffect(()=>{
      const getData = async () => {
        const responsePeople = await axios.get(`https://api.potterdb.com/v1/characters`)
        console.log('data', responsePeople)
        
        //assign API results to array
        setPeople(responsePeople.data.data)
      }
      getData()
  
    },[])

    console.log(people)
    
    if(!people) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    people.map((person, index) => (
                        <div key={index} 
                        className="objectItem"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${person.attributes.image})`, 
                            backgroundSize:'600px', 
                            backgroundPosition: 'center 30%'}} 
                        >
                            
                            <h2>{person.attributes.name}</h2>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }