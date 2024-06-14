import DBJson from '../../data/data.json'


//!params =  [searchTerm = searchTerm, region = region ,flagsArray = flagsArray,setFlagsArray = setFlagsArray]
export default function SearchEngine(searchTerm,region,flagsArray,setFlagsArray) {
    const parsedDB = Object.entries(DBJson)
    const countryNamesDB = []
    setFlagsArray(countryNamesDB)

    const purge = () => {
        countryNamesDB.forEach(item => { countryNamesDB.pop() })
    }



    if (region) {

        if (searchTerm) {
            parsedDB.forEach((country) => {

                    let countryBlob = JSON.stringify(Object.values(country[1]).join(',').toLowerCase())
                    if (countryBlob.match(region.toLowerCase()) && countryBlob.match(searchTerm.toLowerCase())){
                        
                        countryNamesDB.push(country)
                    }
            })
        } else {
            parsedDB.forEach((country) => {

                let countryBlob = JSON.stringify(Object.values(country[1]).join(',').toLowerCase())

                if (countryBlob.match(region.toLowerCase())){
                    
                    countryNamesDB.push(country)
                }
        })
        }
    } else if (searchTerm) {
        parsedDB.forEach((country) => {

            let countryBlob = JSON.stringify(Object.values(country[1]).join(',').toLowerCase())

            if (countryBlob.match(searchTerm.toLowerCase())){
                
                countryNamesDB.push(country)
                
            }
    })
    } else {
        purge()

    }
    

    
    let cNDB = countryNamesDB
    return cNDB
};
