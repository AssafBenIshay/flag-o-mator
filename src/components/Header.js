import './Header.css'
import React from 'react'

export default function Header({ darkMode, setDarkMode }) {
    

    return(
        <div className={darkMode ?'top-menu':'top-menu tm-light-mode'  }>
            <h1 className={darkMode ? 'top-menu-h1' : 'top-menu-h1 tm-light-mode'}>Where in the world?</h1>
            <button className={darkMode ? 'top-menu-button':'top-menu-button tm-light-mode'} onClick={()=>setDarkMode(!darkMode)}>
                <div className={darkMode ? 'top-menu-button-img-light' : 'top-menu-button-img-dark'} ></div>
                <p>Dark Mode</p>
            </button>
    </div>)
};
