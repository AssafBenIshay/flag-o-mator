import './Search.css'
import React from 'react'
import Select from './Search/Select'
import SearchEngine from '../components/SE/SearchEngine'

export default function Search({ darkMode, region, setRegion,flagsArray,setFlagsArray }) {
    
function handleInput(e) {
        let fa =  SearchEngine(e.target.value, region, flagsArray, setFlagsArray)
        setFlagsArray(fa)
    }
    

    return (

        <div className={darkMode ? 'search-bar': 'search-bar search-light-mode'}>
            <label>
                <input
                    type='text'
                    className={darkMode ? 'search-text-box' : 'search-text-box search-light-mode'}
                    placeholder="Search for a country..."
                    onInput={handleInput}></input>
            </label>
            <Select
                darkMode={darkMode}
                region={region}
                setRegion={setRegion}
                flagsArray={flagsArray}
                setFlagsArray={setFlagsArray}
            />
        </div>
    )
};
