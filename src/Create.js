import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [name,setName] = useState('');
    const [summary,setSummary] = useState('');
    const [country,setCountry] = useState('uk');

    const history = useHistory();
    const handleSubmit = (e)=>{


        e.preventDefault()

        const film = {name,summary,country}

        console.log(film)

        fetch(`http://localhost:8000/films`,{
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body:JSON.stringify(film)
        }).then(()=>{

            history.push('/')
        }
        
        )


    }

    return ( 

        <div className="create">


            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Title Of Movie</label>
                    <input
                    type="text"
                    required
                    name=""
                    value={name}
                    id="name"
                    onChange={(e)=>{ setName(e.target.value)}}
                    
                    />
                </div>
              
                <div>
                 <label htmlFor="summary">Movie Summary</label>
                 <textarea 
                 id="summary"
                 required 
                 value = {summary}
                 
                 onChange = {(e)=>{setSummary(e.target.value)}}
                 ></textarea>
                </div>

                <div>
                    <label htmlFor="country">Country</label>
                    <select 
                    name=""
                     id="country"
                     value={country}
                     onChange={(e)=>{setCountry(e.target.value)}}
                     
                     >
                        <option value="france">France</option>
                        <option value="uk">Uk</option>
                        <option value="usa">USA</option>
                    </select>
                </div>

                <button>Submit</button>


            </form>

            


        </div>


     );
}
 
export default Create;