import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function PotionList () {

    const [potions, setPotions] = useState([])

    let navigate = useNavigate()
    const showPotion = (potionID) => {
      navigate(`${potionID}`)
    }
  
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
                        onClick={() => showPotion(potion.id)}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${potion.attributes.image})`, 
                            backgroundSize:'600px', 
                            backgroundPosition: 'center 30%'}} 
                        >
                            
                            <h2>{potion.attributes.name}</h2>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }