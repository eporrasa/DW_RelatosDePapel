import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <GlobalContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </GlobalContext.Provider>
    );
};
