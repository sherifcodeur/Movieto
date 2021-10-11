import { useState } from "react";

const Create = () => {

    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [country,setCountry] = useState('uk');

    return ( 

        <div className="create">


            <form action="">

                <div>
                    <label htmlFor="name">Title Of Movie</label>
                    <input
                    type="text"
                    required
                    name=""
                    value={title}
                    id="name"
                    onChange={(e)=>{ setTitle(e.target.value)}}
                    
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

            {title}
            {summary}
            {country}


        </div>


     );
}
 
export default Create;