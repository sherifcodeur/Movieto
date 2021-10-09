

const FilmList = ({data}) => {
    return (



               

        data.map(film=>(

            <div className="content" key={film.id}>
                <img src={film.image.medium} alt="" />
                <div className="info-film"><h5>{film.name}</h5> 
               <p>{film.language}</p></div>
               
            </div>
        ))
        






      );
}
 
export default FilmList;