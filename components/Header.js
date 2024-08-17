import React, { useState, useEffect } from 'react';

const Header = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute('data-theme', storedTheme);
        }
    }, []);

    const setLightMode = () => {
        setTheme('light');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    };

    const setDarkMode = () => {
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    };

    return (
        <header style={{ padding: '20px', textAlign: 'center', backgroundColor: 'var(--background-color)' }}>
            <h1>My Website</h1>
            <div>
                <button 
                    onClick={setLightMode} 
                    style={{
                        padding: '10px 20px',
                        cursor: 'pointer',
                        backgroundColor: 'var(--background-color)',
                        color: 'var(--text-color)',
                        border: '1px solid var(--text-color)',
                        borderRadius: '5px',
                        marginRight: '10px',
                    }}
                >
                    Light Mode
                </button>
                <button 
                    onClick={setDarkMode} 
                    style={{
                        padding: '10px 20px',
                        cursor: 'pointer',
                        backgroundColor: 'var(--background-color)',
                        color: 'var(--text-color)',
                        border: '1px solid var(--text-color)',
                        borderRadius: '5px',
                    }}
                >
                    Dark Mode
                </button>
            </div>
        </header>
    );
};

export default Header;
