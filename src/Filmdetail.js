import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const Filmdetail = () => { 
    
    
    const {id} = useParams()
    const{data,error,loaded} = useFetch(`http://localhost:8000/films/${id}`)

    console.log(data)
    return (

        
        <div className="film-detail">

            {id}
            {error && <div>{error}</div>}
            {loaded && <div>is loading</div>}
            {data && (

                <article>
                    <img src={data.image.medium} alt="" />
                    <h3>{data.name}</h3>
                    <p class="country">{data.network.country.name}</p>
                   <div dangerouslySetInnerHTML={{__html:data.summary}}></div> 
                </article>
            )}

        </div>



      );
}
 
export default Filmdetail;