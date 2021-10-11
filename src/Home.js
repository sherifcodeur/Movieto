
import FilmList from './FilmList'
import useFetch from './useFetch'
const Home = () => {

    const{data,error,loaded} = useFetch('http://localhost:8000/films')
   
    return ( 

        <div className="home">
            <h2>All Movies And Series</h2>
            
            {error && <div>{error}</div>}
            {loaded && <div> Loading...</div>}
           { data && <FilmList data = {data} />}
            
        </div>

     );
}
 
export default Home;