'use client'

///React Import
import {createContext, useContext, useState} from "react";


const SideBarContext = createContext({
    open: false,
    toggleSideBar: () => {}
})

export function useSideBar() {
    const {open, toggleSideBar} = useContext(SideBarContext);
    return {
        open,
        toggleSideBar
    }
}

export function SideBarContextProvider({ children }) {

    const [open, setOpen] = useState(false);

    const toggleSideBar = () => {
        setOpen(open === false)
    }

    return (
        <SideBarContext.Provider value={{open, toggleSideBar}}>
            {children}
        </SideBarContext.Provider>
    )
}