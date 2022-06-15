import { createContext, useState } from "react";

export const AppContext = createContext({});


export const AppProvider = ({ children }) => {
    const [drawer, setDrawer] = useState(false);
    
    return (
        <AppContext.Provider value={{drawer, setDrawer}}>
            {children}
        </AppContext.Provider>
    )
}
