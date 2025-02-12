import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import PuppyDetails from './components/PuppyDetails.jsx';

const App = () => {
  const [selectedPuppy, setSelectedPuppy] = useState({});

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage setSelectedPuppy={setSelectedPuppy} />} />
        <Route path={`/details/${selectedPuppy.id}`} element={ <PuppyDetails selectedPuppy={selectedPuppy} />} />
      </Routes>
    </>
  )
}

export default App