import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'


export default function SpellExpandedPage (props) {

  const [spell, setSpell] = useState('')

  let {spellID} = useParams() 

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.potterdb.com/v1/spells/${spellID}`)
      console.log('data', response)
      
      //assign API results to array
      setSpell(response.data.data)
    }
    getData()

  }, [props.spells, spellID])

  return spell ? (
    <div className="expandedItem">
      <Link to ='/spells' className='navtext'>Back to Spells</Link>
        <br/>
      <div className='expandedBody'>

        <img src = {spell.attributes.image} 
        className='expandedImage'
        />        
        <div className='expandedText'>
        <h2>{spell.attributes.name}</h2>
        <h3>Incantation: {spell.attributes.incancation}</h3>
        <h3>Motion: {spell.attributes.hand}</h3>
        <h3>Effect: {spell.attributes.effect}</h3>
        </div>

      </div>
    </div>
  ) 
  :     <div> 
            <div className='home'>  
            <h2>spell not found</h2>
            <Link to ='/spells' className='navtext'>Back to Spells</Link>
            </div> 
        </div>
}

