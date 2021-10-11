import { useState ,useEffect } from "react";

const useFetch = (url)=>{


    const [data,setData] = useState(null);

    const [loaded,setLoaded] = useState(true);

    const [error,setError] = useState(null);
    
    useEffect(()=>{

        const abortCont = new AbortController();

        fetch(url,{signal:abortCont.signal})
        .then(response=>{

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

            if(err === "AbortError"){

                console.log("fetch aborted")
            }else{

                setError(err.message)
            setLoaded(false) 
            }
            
           
        })

        // abort the fetch
    return () => abortCont.abort();

    },[url])



    return {data,error,loaded}


}

export default useFetch