import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

export default function App() {

  const [starShips, setStarShip] = useState([])
  const [films, setFilm] = useState([])
  const [people, setPeople] = useState([])
  const [planets, setPlanet] = useState([])
  const [species, setSpecies] = useState([])
  const [vehicles, setVehicle] = useState([])

  useEffect(()=>{
    const getData = async () => {
      const responseStarShips = await axios.get(`https://swapi.dev/api/starships`)
      const responseFilms = await axios.get(`https://swapi.dev/api/films`)
      const responsePeople = await axios.get(`https://swapi.dev/api/people`)
      const responsePlanets = await axios.get(`https://swapi.dev/api/planets`)
      const responseSpecies = await axios.get(`https://swapi.dev/api/species`)
      const responseVehicles = await axios.get(`https://swapi.dev/api/vehicles`)
      // console.log('data', response)
      
      //assign API results to array
      setStarShip(responseStarShips.data.results)
      setFilm(responseFilms.data.results)      
      setPeople(responsePeople.data.results)
      setPlanet(responsePlanets.data.results)
      setSpecies(responseSpecies.data.results)
      setVehicle(responseVehicles.data.results)
    }
    getData()

  },[])

  return (
    <div className='app'>
      <Header/>
      <Main 
        starShips = {starShips} 
        films = {films} 
        people={people} 
        planets = {planets} 
        species = {species}
        />
    </div>
  )
}
