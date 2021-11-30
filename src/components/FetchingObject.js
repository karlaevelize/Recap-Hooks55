import { useState, useEffect } from "react"
import axios from "axios"

const api2 = "https://hp-assessment-api.herokuapp.com/got/houses"

export default function FetchingObject(){

  //1. Write a const in local state
  //2. Write a function to fetch the data
  //3. Make a request with axios
  //4. Console.log the response
  //5. Call the function inside useEffect
  //6. Check the console.log
  //7. Put the relevant data in the state

  //8. Map over it (if it's an array)

  const [ houses, setHouses ] = useState([])

  const fetchData = async () => {
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/got/houses")
    console.log("response", response)
    setHouses(response.data.rows)
  }
  //arguments -> arrow funcion, empty array
  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div>
      {!houses 
        ? "Loading"  
        : houses.map(house => {
          return (
            <div key={house.id}>
              <h3>{house.name}</h3>
              <p><b>Region:</b>{house.region}</p>
              <img src={house.imageUrl} />
            </div>
          )
        })}
    </div>
  )
}