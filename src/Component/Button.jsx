import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const styles={
    dark:{
        color:"white",
        background:"black"
    },
    light:{
        color:"black",
        background:"white"
    }
}
const Button = ({children, onClick}) => {
    const [theme] = useContext(AppContext)
  return (
    <div>
        <buton onClick={onClick} style= {styles[theme]}>{children}</buton>
    </div>
  )
}

export default Button