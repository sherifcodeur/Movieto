import {useState} from 'react'

const Home = () => {

    const [name,setName] = useState('mario')

    const handleClick = ()=>{

        setName("fifo")

        console.log("you clicked "+name)
    }

   
    return ( 

        <div className="home">
            <h2>Homepage</h2>
            this is our homepage
            <button onClick={handleClick}>click me {name}</button>
            
        </div>

     );
}
 
export default Home;