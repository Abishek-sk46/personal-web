import { Sun , Moon} from 'lucide-react';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export const ThemeToggle = () => {
  
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };
  
    return (
<button onClick={toggleTheme} className={cn('fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300', 
    "focus:outline"
)}>
    {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
    ) : (
        <Moon className="h-6 w-6 text-blue-300" />
    )}
</button>
)
}
