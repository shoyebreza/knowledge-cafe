import profile from '../../assets/images/profile.png';

const Header = ()=>{
    return(
        <div className='flex justify-between items-center p-4 border-b-2 bg-green-400 max-w-7xl mx-auto'>
            <h1 className="text-4xl"> Knowledge cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;