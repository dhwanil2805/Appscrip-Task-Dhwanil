import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <h1>My Website</h1>
            <button 
                onClick={toggleTheme} 
                className="theme-toggle"
            >
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
            <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <style jsx>{`
                .header {
                    padding: 20px;
                    text-align: center;
                    background-color: var(--background-color);
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid var(--text-color);
                }
                .theme-toggle {
                    padding: 10px 20px;
                    cursor: pointer;
                    background-color: var(--background-color);
                    color: var(--text-color);
                    border: 1px solid var(--text-color);
                    border-radius: 5px;
                    margin-left: 10px;
                }
                .hamburger-menu {
                    display: none;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 25px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .bar {
                    width: 30px;
                    height: 3px;
                    background-color: var(--text-color);
                    border-radius: 5px;
                    transition: all 0.3s ease;
                }
                .bar1 {
                    transform: ${isMenuOpen ? 'rotate(45deg) translateY(10px)' : 'rotate(0)'};
                }
                .bar2 {
                    opacity: ${isMenuOpen ? '0' : '1'};
                }
                .bar3 {
                    transform: ${isMenuOpen ? 'rotate(-45deg) translateY(-10px)' : 'rotate(0)'};
                }
                .nav-menu {
                    display: flex;
                    gap: 20px;
                }
                .nav-menu a {
                    text-decoration: none;
                    color: var(--text-color);
                    font-size: 18px;
                    padding: 10px;
                    transition: background-color 0.3s ease;
                }
                .nav-menu a:hover {
                    background-color: var(--text-color);
                    color: var(--background-color);
                    border-radius: 5px;
                }
                @media (max-width: 768px) {
                    .hamburger-menu {
                        display: flex;
                    }
                    .nav-menu {
                        position: absolute;
                        top: 70px;
                        right: 20px;
                        background-color: var(--background-color);
                        color: var(--text-color);
                        border: 1px solid var(--text-color);
                        border-radius: 5px;
                        padding: 20px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        width: 200px;
                        flex-direction: column;
                        align-items: center;
                        transform: ${isMenuOpen ? 'translateY(0)' : 'translateY(-20px)'};
                        opacity: ${isMenuOpen ? '1' : '0'};
                        transition: transform 0.3s ease, opacity 0.3s ease;
                    }
                    .nav-menu a {
                        padding: 15px 20px;
                        font-size: 18px;
                        width: 100%;
                        text-align: center;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
