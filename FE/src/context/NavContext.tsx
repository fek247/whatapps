'use client'

import { ReactNode, useState, createContext, useContext } from "react";

type NavContextType = {
    activeNav: string,
    setActiveNav: (nav: string) => void
}

const NavContext = createContext<NavContextType | undefined>(undefined)

export function NavProvider({ children }: { children: ReactNode}) {
    const [activeNav, setActiveNav] = useState('chat')

    return (
        <NavContext.Provider value={{ activeNav, setActiveNav }}>
            {children}
        </NavContext.Provider>
    )
}

export function useNav() {
    const context = useContext(NavContext)
    if (!context) {
        throw new Error('useNav must be used within a NavProvider')
    }

    return context
}