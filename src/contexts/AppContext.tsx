'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type User = {
    name: string;
    email: string;
}

type AppContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false)
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(!darkMode)

    const login = (userData: User) => setUser(userData)

    const logout = () => setUser(null)

    return (
        <AppContext.Provider value={{ darkMode, toggleDarkMode, user, login, logout }}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider')
    }
    return context
}