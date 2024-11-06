import { FaBookmark  } from "react-icons/fa";
import propTypes from 'prop-types';
const Blog = ({blog,handleBookmark, handleMarkAsRead})=>{

    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    return(
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt="Cover" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="author" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read  </span>
                    <button className="ml-2" onClick={()=>handleBookmark(blog)}> <FaBookmark/> </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) =><span><a href='' key={idx}> #{hash} </a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className='text-purple-800 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: propTypes.object.isRequired,
    handleBookmark: propTypes.func,
    handleMarkAsRead: propTypes.func
}
export default Blog;