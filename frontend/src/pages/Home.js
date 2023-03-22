import { useEffect, useState } from "react";
import BlogDetails from "../components/BlogDetails";
import BlogForm from "../components/BlogForm";
import { useBlogsContext } from "../hooks/useBlogsContext";



const Home = () => {
    // const [blogs, setBlogs] = useState(null)

    const {blogs, dispatch}=useBlogsContext()

    useEffect(()=>{
        const fetchBlogs = async()=>{
            const response = await fetch('http://localhost:4000/blogs')
            const json = await response.json()

            if(response.ok){
                // setBlogs(json)
                // getting blogs useng context
                dispatch({type: 'SET_BLOGS', payload:json})
            }
        }
        fetchBlogs()
    },[])

    return ( 
    <div className="home">
        <div className="blogs">
            {blogs && blogs.map((blog)=>(
                <BlogDetails  key={blog._id} blog={blog}/>
            ))}

        </div>
        <BlogForm/>
    </div> 
    );
}
 
export default Home;