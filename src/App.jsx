// import React from 'react'
// import Clock from './Clock'

// const App = () => {
//   return (
//     <div>
//       {/* <Clock/> */}
      
//     </div>
//   )
// }

// export default App

// import { useState, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [stateValue, setStateValue] = useState("");
//   const refValue = useRef("");
  
//   return (
//     <>

//       <h1>Will cause a re-render:</h1>
//       <button onClick={()=>{setStateValue(Math.random())}}>state</button> : {stateValue}
      
//       <h1>Will change but won't cause a re-render:</h1>
//       <button onClick={()=>{refValue.current=Math.random()}}>ref</button> : {refValue.current}

//     </>
//   );
// }
// export default App

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

import { useReducer } from "react";

const initialData = {
  lowercase: '',
  uppercase: '',
  spaces: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOWERCASE':
      return {...state, [action.payload.name]: action.payload.value.toLowerCase()}
    case 'UPPERCASE':
      return {...state, [action.payload.name]: action.payload.value.toUpperCase()}
    case 'SPACES':
      return {...state, [action.payload.name]: action.payload.value.replaceAll(' ', '')}
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, initialData);

  const handleChange = (e) => {
    dispatch({ type: e.target.name.toUpperCase(), payload: {name: e.target.name, value: e.target.value} });
  };

  return (
    <>
      <form>
        <input type="text" placeholder="Only Lowercase" name="lowercase" onChange={handleChange} value={data.lowercase} /><br />
        <input type="text" placeholder="Only Uppercase" name="uppercase" onChange={handleChange} value={data.uppercase} /><br />
        <input type="text" placeholder="No Spaces" name="spaces" onChange={handleChange} value={data.spaces} />
      </form>
    </>
  );
}

export default App;