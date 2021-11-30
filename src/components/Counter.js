import { useState } from "react"

export default function Counter(){

  const [ count, setCount ] = useState(0)
  // const [ text, setText ] = useState(0)
  // we use count everytime we want to access the value -> getter
  // we use setCout everttime we want to change the value -> setter
  console.log(count)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+ 1</button>
      <button onClick={() => setCount(count - 1)}>- 1</button>
    </div>
  )
}