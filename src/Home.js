import {useEffect, useState} from 'react'

import FilmList from './FilmList'

const Home = () => {

    const [data,setData] = useState(null);

    const [loaded,setLoaded] = useState(true);

    const [error,setError] = useState(null);
    
    useEffect(()=>{

        fetch('http://localhost:8000/films').then(response=>{

            console.log(response)

            if(!response.ok ){
                throw Error('there is an error fetching data')
            }
            return response.json()
        }).then(resp=>{

            //console.log(resp)
            setError(null)
            setData(resp)
            setLoaded(false)

        }).catch(err=>{
            
            setError(err.message)
            setLoaded(false)
        })

    },[])
   
    return ( 

        <div className="home">
            <h2>Homepage</h2>
            this is our homepage
            {error && <div>{error}</div>}
            {loaded && <div> Loading...</div>}
           { data && <FilmList data = {data} />}
            
        </div>

     );
}
 
export default Home;