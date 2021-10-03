

const Home = () => {

    const handleClick = (e)=>{

        console.log("you clicked",e)
    }

    const handleClickos = (name,e)=>{

        console.log('you clicked' + name,e)

    }
    return ( 

        <div className="home">
            <h2>Homepage</h2>
            this is our homepage
            <button onClick={handleClick}>clicke me robert</button>
            <button onClick = {(e)=>{handleClickos("ismael",e)}}>click mario</button>
        </div>

     );
}
 
export default Home;