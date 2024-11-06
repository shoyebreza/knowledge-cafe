import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types';


const Blogs = ({handleBookmark, handleMarkAsRead})=>{

    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])
    return(
        <div className="md:w-3/4 mt-5">
            {
             blogs.map(blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleBookmark={handleBookmark}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)   
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: propTypes.func,
    handleMarkAsRead: propTypes.func
}

export default Blogs;