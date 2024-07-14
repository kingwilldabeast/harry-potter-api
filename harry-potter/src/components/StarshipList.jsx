import { useNavigate } from "react-router-dom"

export default function StarshipList (props) {

    let navigate = useNavigate()
    const showStarship = (starshipID) => {
      navigate(`${starshipID}`)
    }
    
    if(!props.starShips) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    props.starShips.map((starShip, index) => (
                        <div key={index} className="objectItem" 
                        onClick={() => showStarship(index)}>
                            
                            <h2>Name: {starShip.name}</h2>
                            <h3>Capacity: {starShip.cargo_capacity}</h3>
                            <h3>Cost: {starShip.cost_in_credits} <span className="symbol">$</span></h3>
                            <h3>Length: {starShip.length}</h3>
                            <h3>Passengers: {starShip.passengers}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }