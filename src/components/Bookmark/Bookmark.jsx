import propTypes from 'prop-types';


const Bookmark =({bookmark})=>{
    const {title} = bookmark;
    return(
        <div className='bg-green-500 p-2 m-2 rounded-xl'>
            <h5 className='text-1xl'>{title}</h5>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: propTypes.object
}
export default Bookmark;