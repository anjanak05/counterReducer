import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextComponent({children}){
    const [state, setState] = useState("dark")
    const handleToggle=()=>{
        setState(state==="dark"?"light":"dark")
    }
return (
    <AppContext.Provider value={[state, handleToggle]}>
        {children}
    </AppContext.Provider>
)
}