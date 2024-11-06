import propTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime})=>{
    return (
        <div className="md:w-1/4 bg-green-200 mx-5 my-5 rounded-md">
            <div>
                <h3 className="text-2xl">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="p-6 bg-emerald-300 rounded-md tex-center">Bookmarked Bloogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} 
                    bookmark={bookmark}>
                    </Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: propTypes.array,
    readingTime: propTypes.number
}
export default Bookmarks;