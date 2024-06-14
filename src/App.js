import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import FlagCard from './components/FlagCard';
import {Routes,Route} from "react-router-dom"
import FlagCardInfo from './components/FlagCardInfo';


                                
export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  const [region, setRegion] = React.useState(null)
  const [flagsArray, setFlagsArray] = React.useState([])

  


  return (

    <div className={darkMode ? "App" : "App app-light-mode"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path='/' element={
        <>
          <Search
            darkMode={darkMode}
            region={region}
            setRegion={setRegion}
            flagsArray={flagsArray}
            setFlagsArray={setFlagsArray}
          />
      
            <div className={darkMode? 'flagsContainer':'flagsContainer light-mode'}>
            {
              flagsArray.map((flag) => (
                <FlagCard
                  flag={flag[1]}
                  key={flag[0]}
                  darkMode={darkMode}
                />
              ))
            }
            </div>
        </>
        } />
        <Route path="/flag/:id" element={<FlagCardInfo flagsArray={flagsArray} darkMode={darkMode} /> } />
      </Routes>
    </div>
  );
}

