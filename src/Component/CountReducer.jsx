import React, { useReducer } from 'react'
import reducer from "../Reducer/reducer.js"
import {Incre, Decre} from "../Reducer/reducer.js"
const CountReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count:0})

  return (
    <div>
        <h3>count: {state.count}</h3>
        <button onClick={()=> dispatch(Incre)}>add</button>
        <button onClick={()=> dispatch(Decre)}>minus</button>

    </div>
  )
}

export default CountReducer