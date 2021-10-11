import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const Filmdetail = () => { 
    
    
    const {id} = useParams()
    const history = useHistory();
    const{data,error,loaded} = useFetch(`http://localhost:8000/films/${id}`)

    const handleClick = ()=>{ fetch(`http://localhost:8000/films/${id}`,{

    method:"DELETE"
    }).then(()=>{

        history.push('/')
    })


    }

    console.log(data)
    return (

        
        <div className="film-detail">

             <Link to="/">Film List</Link>
            {error && <div>{error}</div>}
            {loaded && <div>is loading</div>}
            {data && (

                <article>
                   
                    

                    {data.image ? <img src={data.image.medium} alt="" /> : ''}
                    {/* <img src={data.image.medium} alt="" /> */}
                    <h3>{data.name}</h3>

                    {data.network ?  <p class="country">{data.network.country.name}</p> : ''}
                    {/* <p class="country">{data.network.country.name}</p> */}
                   <div dangerouslySetInnerHTML={{__html:data.summary}}></div> 
                </article>
                
            )}
                <button onClick={handleClick}>Delete</button>
        </div>



      );
}
 
export default Filmdetail;