import { Link } from 'react-router-dom'

const PuppyDetails = (props) => {
  
  return(
    <>
      <h1>{props.selectedPuppy.name}</h1>
      <img 
        src={props.selectedPuppy.imageUrl}
        alt={`photo of ${props.selectedPuppy.name}`} 
        className='individualPuppyImage'
      />
      <section>
        Status: {props.selectedPuppy.status}
        Team: {props.selectedPuppy.team}
        Breed: {props.selectedPuppy.breed}
      </section>
      <Link to='/'>Back</Link>
    </>
  )
}

export default PuppyDetails