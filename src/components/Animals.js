import AnimalCard from "./AnimalCard"

export default function Animals(){

  const data = [
    { id: 1, name: "Lion", pet: false },
    { id: 2, name: "Cat", pet: true },
    { id: 3, name: "Dog", pet: true },
    { id: 4, name: "Giraffe", pet: false },
    { id: 5, name: "Bear", pet: false},
    { id: 6, name: "Bunny", pet: true }
  ]

  return (
    <div>
      <p>This is Animals components</p>
      {/* this one never fails */}
      {data.map(animal => {
        return ( //in the return, always use <div> first
          <div key={animal.id}>
            <h3>{animal.name}</h3>
            {/* if we want to display boolean */}
            {/* we have to use ternary */}
            <p>{animal.pet ? "It's a pet" : "Not a pet"}</p>
          </div>
        )
      })}
      {/* Using a separate component to display the animals */}
      {/* when we only have one element */}
      {data.map(animal => <AnimalCard 
        key={animal.id}
        name={animal.name} 
        pet={animal.pet}/>)}
    </div>
  )
}