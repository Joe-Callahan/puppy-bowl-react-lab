import { useEffect, useState } from 'react'

const AddAPuppy = () => {
  
  const createPuppy = async(e) => {
    e.preventDefault();
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
      console.log('Something went wrong. Please try again.');
    } else {
      alert('Puppy added to team!');
      
    }
  }


  return (
    <>
      <h1>Add A New Puppy to the Team</h1>
      <form onSubmit={createPuppy}>
      
      </form>
    </>
    )
}


export default AddAPuppy