import React, { useEffect } from 'react'
import './FlagCard.css'
import { Link } from 'react-router-dom'





export default function FlagCard(params) {
    const [imgPath, setImgPath] = React.useState('')
    const [population,setPopulation] = React.useState(0)

    useEffect(() => {
        setImgPath(`https://flagcdn.com/${params['flag'].alpha2Code.toLowerCase()}.svg`)
        let population = params['flag'].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setPopulation(population)
    },[imgPath, params])
    
    return (
        <Link to={`/flag/:${params['flag'].alpha2Code.toLowerCase()}`} style={{ textDecoration: 'none' }} >
            <div className={params.darkMode ? 'card' : 'card fc-light-mode'}>
                <img src={imgPath} alt={params['flag'].demonym} />
                <h1 className='h1'>{params['flag'].name}</h1>
                <ul>
                <li><b>Population:</b> {population}</li>
                <li><b>Region: </b>{params['flag'].region}</li>
                <li><b>Capital:</b> {params['flag'].capital}</li></ul>
            </div>

        </Link>
    )
};

// function Card({imgPath,params}){
//     return (
//         <div className='card'>
//                 <img src={imgPath} alt={params['flag'].demonym} />
//                 <h1 className='h1'>{params['flag'].name}</h1>
//                 <ul>
//                 <li><b>Population:</b> {params['flag'].population}</li>
//                 <li><b>Region: </b>{params['flag'].region}</li>
//                 <li><b>Capital:</b> {params['flag'].capital}</li></ul>
//             </div>
//     )
// }
