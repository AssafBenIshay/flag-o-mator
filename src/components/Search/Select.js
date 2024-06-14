import React from 'react'
import cData from '../../data/data.json'
import './Select.css'
import SearchEngine from '../SE/SearchEngine'


export default function Select({ darkMode,region,setRegion,flagsArray,setFlagsArray  }) {
    const [entriesArray, setEntriesArray] = React.useState([])
    const [regionsArray, setRegionsArray] = React.useState([])
    function handleNewRegion(e) {
        if (e.target.value) {
            setRegion(e.target.value)
        }
        SearchEngine('',region,flagsArray,setFlagsArray)
    }
    React.useEffect(() => {
        
        // fetch("https://flagcdn.com/en/codes.json")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setEntriesArray(Object.entries(data))
        //     })
        setEntriesArray(Object.entries(cData))
        
    }, [])

    React.useEffect(() => {
        const re = []
        const tempRegionsArray = []
        for (let index = 0; index < entriesArray.length; index++) {
            re.push(entriesArray[index][1].region)
        }
        const reObj = new Set(re)
        reObj.forEach((obj) => {
            tempRegionsArray.push(obj)
        })
        tempRegionsArray.sort()
        setRegionsArray(tempRegionsArray)
    }, [entriesArray])

    return (
        <div>
            <select className={darkMode ? "select" : "select s-light-mode"} onClick={handleNewRegion} onChange={handleNewRegion}>
                <option className='opt' hidden >Filter by Region </option>
                <option className= 'opt'></option>
               
                {regionsArray.map(region => (
                    <option className= 'opt' key={region} value={region}> {region}</option>
                ))}  
            </select>
        </div>
    )

    
};
