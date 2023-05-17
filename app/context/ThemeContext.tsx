"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextProps {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

// THE CONTEXT IS HERE
const ThemeContext = createContext<ThemeContextProps>({
    //BOOLEAN VALUE TO BE USED - ALSO THE ONLY VALUE IT USES
    isDark: true,
    //FUNCTION TO SET THE BOOLEAN VALUE
    setIsDark: () => {},
});

// THE PROVIDER IS HERE
function ThemeProvider({ children }: { children: React.ReactNode }) {
    //I Thought this would have set the isDark value to false, but it doesn't. It's always true.
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {}, []);

    return (
        //The value I am passing here I want to be the useState values but I don't think that is the case.
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    );
}

// THE HOOK IS HERE
function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export { ThemeProvider, useTheme };
