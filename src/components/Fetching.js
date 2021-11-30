import { useEffect, useState } from "react"
import axios from "axios"

const api1 = "https://jsonplaceholder.typicode.com/posts?_limit=5"
const api2 = "https://hp-assessment-api.herokuapp.com/got/houses"

export default function Fetching(){

  const [ count, setCount ] = useState(0)
  const [ articles, setArticles ] = useState(null)

  const fetchData = async () => {
    //1. fetch data with axios
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    //2. console.log what you got
    console.log("response", response)
    //3. Put relevant data in the state
    setArticles(response.data)
  }

  //firs we pass an arrow function, then empty array
  //useEffect only runs once
  useEffect(() => {
    console.log("In the use effect!")
    fetchData()
  }, []) //if we put something here, useEffect watches 

  console.log("articles", articles)

  return(
    <div>
      Fetch Data
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      {!articles ? "Loading" : articles.map(art => {
        return (
          <div>
            <h2>{art.title}</h2>
            <p>{art.body}</p>
          </div>
        )
      })}
    </div>
  )
}