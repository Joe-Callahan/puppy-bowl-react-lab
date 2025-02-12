import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AddAPuppy = (props) => {
  const [allPuppies, setAllPuppies] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [breedInput, setBreedInput] = useState('');
  const [statusInput, setStatusInput] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [teamIdInput, setTeamIdInput] = useState('');

  useEffect(() => {
    const fetchPuppies = async() => {
      const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players');
      const jsonObj = await response.json();
      setAllPuppies(jsonObj.data.players);
    }
    fetchPuppies();
  }, []);

  
  const createPuppy = async(e) => {
    e.preventDefault();
    try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: nameInput,
        breed: breedInput,
        status: statusInput,
        imageUrl: imageUrlInput,
        teamId: teamIdInput
      })
    })

    const puppy = await response.json();

    if(puppy.error) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Puppy added to team!', puppy);
      setAllPuppies([...allPuppies, puppy]);
      setNameInput('');
      setBreedInput('');
      setStatusInput('');
      setImageUrlInput('');
      setTeamIdInput('');
    }
  } catch(err) {
    alert('Error', err);
  }
}
  


  return (
    <>
      <h1>Add A New Puppy to the Team</h1>
      <form onSubmit={createPuppy}>
        {/* breed,status,imageurl,teamid */}
        <input placeholder='name'
          onChange={(e) => {setNameInput(e.target.value)}}
          value={nameInput} />
        <input placeholder='breed'
          onChange={(e) => {setBreedInput(e.target.value)}}
          value={breedInput} />
        <select onChange={(e) => {setStatusInput(e.target.value)}} value={statusInput}>
          <option>Choose Status</option>
          <option>field</option>
          <option>bench</option>
        </select>
        <input placeholder='image URL'
          onChange={(e) => {setImageUrlInput(e.target.value)}}
          value={imageUrlInput} />
        <input placeholder='team ID'
          onChange={(e) => {setTeamIdInput(e.target.value)}}
          value={teamIdInput} />
        <button>Create Puppy!</button>
      </form>
      <Link to='/'>Back</Link>
    </>
    )

  }
export default AddAPuppy