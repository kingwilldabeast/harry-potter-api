import { useState, useEffect } from 'react'
import axios from 'axios'

export default function PotionList () {

    const [potions, setPotions] = useState([])
  
    useEffect(()=>{
      const getData = async () => {
        const responsePotions = await axios.get(`https://api.potterdb.com/v1/potions`)
        console.log('data', responsePotions)
        
        //assign API results to array
        setPotions(responsePotions.data.data)
      }
      getData()
  
    },[])

    console.log(potions)
    
    if(!potions) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    potions.map((potion, index) => (
                        <div key={index} 
                        className="objectItem"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${potion.attributes.image})`, 
                            backgroundSize:'600px', 
                            backgroundPosition: 'center 30%'}} 
                        >
                            
                            <h2>{potion.attributes.name}</h2>
                            <h3>Appearance: {potion.attributes.characteristics}</h3>
                            <h3>Effect: {potion.attributes.effect}</h3>
                            <h3>Ingredients: {potion.attributes.ingredients}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }