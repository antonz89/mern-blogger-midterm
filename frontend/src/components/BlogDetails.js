import { useBlogsContext } from "../hooks/useBlogsContext"

const BlogDetails = ({blog}) => {

    const {dispatch} = useBlogsContext()

    const handleClick = async()=>{
        const response = await fetch("http://localhost:4000/blogs/"+blog._id, {
            method: "DELETE"
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_BLOG', payload: json})
        }

    }

    return ( 
        <div className="blog-details">        
            <h4>{blog.title}</h4>
            <p>{blog.text}</p>
            <br />        
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Created at:</strong> {blog.createdAt}</p>
            <span onClick={handleClick}>delete</span>
            

        </div> 
    );
}
 
export default BlogDetails;