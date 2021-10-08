import { useState , useEffect } from "react";
import BlogList from "./BlogList";


const HomePage = () => {

    const [name,setName] = useState('mario')

    const [blogs,setBlogs] = useState(

        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
          ]
    )

    const handleDelete=(id)=>{

        const newblogs = blogs.filter(blog=>blog.id !== id)
        setBlogs(newblogs)
    }

    useEffect(()=>{


        console.log("the effect ran")
    },[name])

    return ( <div className="content">

          <BlogList  blogs={blogs} name = {name} handleDelete={handleDelete} />
          <button onClick ={()=>{setName('pipo')}}>{name}</button>

    </div> );
}
 
export default HomePage;