import React from 'react'
import { useParams,Link } from 'react-router-dom'
import "./FlagCardInfo.css"


export default function FlagCardInfo({ flagsArray, darkMode }) {

    const { id } = useParams()
    const [flagId, setFlagId] = React.useState({})
    const [borders, setBorders] = React.useState([])
    
    const [hasCurrency,setHasCurrency] = React.useState(false)
    const [hasLanguage, setHasLanguage] = React.useState(false)
    const [hasBorders, setHasBorders] = React.useState(false)
    const [population,setPopulation] = React.useState(0)
    let newId = id.toUpperCase()

    React.useEffect(()=>
    
    function searchFlag() {
        flagsArray.forEach(flag => {
            let a = Array.from(String(flag[1].alpha2Code))
            let b = Array.from(String(newId))
            let c = [b[1],b[2]]

            if (a.join() === c.join()) {
                flag[1].alpha2Code = flag[1].alpha2Code.toLowerCase()
                setFlagId((flag[1]))
                if(flag[1].currencies !== undefined){setHasCurrency(true)}
                if (flag[1].languages !== undefined) { setHasLanguage(true) }
                if (flag[1].borders !== undefined) {
                    flag[1].borders.map(border => setBorders(prev => { return [...prev, searchIsBorder(border)] }))
                    setHasBorders(true)
                }
                let population = Number(flag[1].population)
                population = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                setPopulation(population)
               
            }
        });
        })
    function searchIsBorder(border) {
        for (let i = 0; i < flagsArray.length; i++){
            // console.log('border', flagsArray[i][1].alpha3Code)

            if (flagsArray[i][1].alpha3Code === border) {
                return (
                    flagsArray[i][1].name 
                ) 
            }
        }
            
        }
    
    return (
        <div className='info-container'>
            <div className={darkMode ? 'back-button' : 'light-back-button'}>
                <Link
                    to='/'
                    className={darkMode ? 'back-button' : 'light-back-button'}
                    style={{ textDecoration: 'none', color: 'white' }}><button  >⇽ Back</button>
                </Link>
            </div>
            <div className='info'>
                <div className='flag-image'>
                    <img
                        src={`https://flagcdn.com/${flagId.alpha2Code}.svg`}
                        alt={flagId.name}
                    />
                </div> 
                <div className={darkMode?'flag-info': 'flag-info f-l-mode'}>
                    <div className='flag-info-rows'>
                        <div className='flag-info-h1-row'>
                                <h1>{flagId.name}</h1>
                        </div>
                        <div className='flag-info-data-row'>
                            <div className='flag-info-data-row-left'>
                                <p><b>Native Name: </b>{flagId.nativeName}</p>
                                <p><b>Population: </b>{population}</p>
                                <p><b>Region: </b>{flagId.region}</p>
                                <p><b>Sub-Region: </b>{flagId.subregion}</p>
                                <p><b>Capital: </b>{flagId.capital}</p>
                            </div>
                            <div className='flag-info-data-row-right'>
                                <p><b>Top Level Domain: </b>{flagId.topLevelDomain}</p>
                                <p><b>Currencies: </b>{hasCurrency && flagId.currencies.map(currency=>(currency.name + ', '))} </p>
                                <p><b>Languages: </b>{hasLanguage && flagId.languages.map(lingo=>(lingo.name + ', '))}</p>
                            </div>
                        </div></div>
                        <div className='flag-info-borders-row'>
                        <p className='border-p'><b>Border Countries:</b></p>
                        {hasBorders?  borders.map((border) => (
                            <button key={Math.random()} className={darkMode ? 'country-btn' :'country-btn f-l-mode'}>{border}</button>
                        )) : <button key={0} className={darkMode ? 'country-btn' :'country-btn f-l-mode'}>No neighboring countries</button>}
                        
                        </div>
                    
                </div>

            </div>
        </div>
    )
}

//! try 1 - using loop
// const [cFlag,setCFlag] = React.useState(null)

// React.useEffect(() => {
//     console.log('useEffect', )
//     for (let i = 0; i < flagsArray.length; i++){
//         console.log('i', i)
//         let alpha2Code = String(flagsArray[i][1].alpha2Code.toLowerCase().toString())
//         let idCode = String(id)

//         if (String(alpha3Code).localeCompare(idCode)) {
//             console.log('match found!!!!!!!!!!!!!!!!!!!');
//             setCFlag(i)
//         }
//     }
// },[flagsArray, id])
