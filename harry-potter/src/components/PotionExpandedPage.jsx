import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'


export default function PotionExpandedPage (props) {

  const [potion, setPotion] = useState('')

  let {potionID} = useParams() 

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.potterdb.com/v1/potions/${potionID}`)
      console.log('data', response)
      
      //assign API results to array
      setPotion(response.data.data)
    }
    getData()

  }, [props.potions, potionID])

  return potion ? (
    <div className="expandedItem">
      <Link to ='/potions' className='navtext'>Back to Potions</Link>
        <br/>
      <div className='expandedBody'>
        <div className='expandedText'>
        <h2>{potion.attributes.name}</h2>
        <h3>Appearance: {potion.attributes.characteristics}</h3>
        <h3>Effect: {potion.attributes.effect}</h3>
        <h3>Ingredients: {potion.attributes.ingredients}</h3>
        </div>

        <img src = {potion.attributes.image} 
        className='expandedImage'
        />
      </div>
    </div>
  ) 
  :     <div> 
            <div className='home'>  
            <h2>Potion not found</h2>
            <Link to ='/potions' className='navtext'>Back to Potions</Link>
            </div> 
        </div>
}

