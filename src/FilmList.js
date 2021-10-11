import { Link } from "react-router-dom";


const FilmList = ({data}) => {
    return (



               

        data.map(film=>(

            <div className="content" key={film.id}>

                
               
               {film.image ? <Link to={`/films/${film.id}`}><img src={film.image.medium} alt="" /></Link> : ''}
                {/* <img src={film.image.medium} alt="" /> */}
                <div className="info-film"><h5> <Link to={`/films/${film.id}`}>{film.name}</Link></h5> 
               <p>{film.language}</p></div>
               
            </div>
        ))
        






      );
}
 
export default FilmList;