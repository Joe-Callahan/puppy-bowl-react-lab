import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  const [allPuppies, setAllPuppies] = useState([]);

  useEffect(() => {
    const fetchPuppies = async() => {
      const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players');
      const jsonObj = await response.json();
      setAllPuppies(jsonObj.data.players);
    }
    fetchPuppies();
  }, []);

  return (
    <>
      <h1>Puppy Bowl</h1>
      <Link to='/add'>Add A New Puppy</Link>
      <div id='homeContainerDisplay'>
        {
          allPuppies.map((singlePuppy) => {
            return (
              <Link
                to={`/details/${singlePuppy.id}`}
                key={singlePuppy.id} 
                className='homePuppyContainers' 
                onClick={() => {props.setSelectedPuppy(singlePuppy)} }>
                  <img 
                    src={singlePuppy.imageUrl} 
                    alt={`photo of ${singlePuppy.name}`} 
                    className='homePuppyImages' 
                  />
                  <h3>{singlePuppy.name}</h3>
              </Link>
            )
          })
        }
      </div>
    </>
  )

}





export default Homepage