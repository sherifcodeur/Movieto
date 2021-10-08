

const BlogList = ({blogs,handleDelete}) => {
    return ( 

        
        blogs.map(blog=>(

            <div className="liste" key={blog.id}>

                              <h3>{blog.title}</h3>
                                <p>{blog.author}</p>  
                                

                                <button onClick={()=>{handleDelete(blog.id)}}>delete</button>
                                
            </div>


          ))
     );
}
 
export default BlogList;