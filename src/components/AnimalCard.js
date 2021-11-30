export default function AnimalCard(props){
//we will import this components inside Animals.js component

  return(
    <div>
      <h3 style={{color: "red"}}>{props.name}</h3>
      <p>{props.pet ? "Pet" : "Not a pet"}</p>
    </div>
  )
}