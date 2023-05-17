"use client";

import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";

export default function Home() {
    //I think I am using this correctly.
    const { isDark, setIsDark } = useTheme();

    useEffect(() => {
        //Here as a test I set the isDark value to true, but it doesn't change the value in the context.
        setIsDark(false);
    }, []);

    return (
        //After setIsDark(false) the value of isDark is false.
        <main className="bg-white text-black dark:bg-black dark:text-white">
            {isDark ? "true" : "false"}
        </main>
    );
}
