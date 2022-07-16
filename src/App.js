import React, { useContext } from 'react';
import Button from './Component/Button';
import CountReducer from './Component/CountReducer';
import { AppContext } from './Context/AppContext';
import { countReducer } from './Reducer/reducer';

function App() {
  const [state, handleToggle] = useContext(AppContext)
  return (
    <>
    
      <Button>hello</Button>
      <Button onClick={()=>handleToggle()}>Toggle</Button>
|<CountReducer></CountReducer>
      </>
  );
}

export default App;
