import { useState, useEffect } from 'react'
import axios from 'axios'

export default function SpellsList () {

    const [spells, setSpells] = useState([])
  
    useEffect(()=>{
      const getData = async () => {
        const responseSpells = await axios.get(`https://api.potterdb.com/v1/spells`)
        console.log('data', responseSpells)
        
        //assign API results to array
        setSpells(responseSpells.data.data)
      }
      getData()
  
    },[])

    console.log(spells)
    
    if(!spells) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    spells.map((spell, index) => (
                        <div key={index} 
                        className="objectItem"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${spell.attributes.image})`, 
                            backgroundSize:'600px', 
                            backgroundPosition: 'center 30%'}} 
                        >
                            
                            <h2>{spell.attributes.name}</h2>
                            <h3>Incantation: {spell.attributes.incancation}</h3>
                            <h3>Motion: {spell.attributes.hand}</h3>
                            <h3>Effect: {spell.attributes.effect}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }