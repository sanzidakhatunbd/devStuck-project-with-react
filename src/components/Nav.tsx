import navLogo from '../assets/logo-text.png'
import hamIcon from '../assets/hamburger.png'

const Nav = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white border-b border-gray-100'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6'>
                <button className='order-1 md:hidden'>
                    <img src={hamIcon} alt="Menu" className='h-6 w-6 object-contain' />
                </button>

                <img src={navLogo} alt="DevStuck Text-Logo" className='order-2 md:order-1' />

                <ul className='hidden md:flex md:order-2 items-center gap-8'>
                    <li><a href="#" className='text-sm font-medium text-pink-600'>Home</a></li>
                    <li><a href="#" className='text-sm font-medium text-gray-600 hover:text-pink-600'>Technologies</a></li>
                    <li><a href="#" className='text-sm font-medium text-gray-600 hover:text-pink-600'>Projects</a></li>
                    <li><a href="#" className='text-sm font-medium text-gray-600 hover:text-pink-600'>Contacts</a></li>
                </ul>

                <div className='order-3 md:order-3 flex items-center gap-2 sm:gap-5'>
                    <button className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'>Sign In</button>
                    <button className='text-sm font-semibold text-white bg-pink-700 rounded-full px-5 py-2 shadow-md shadow-pink-200 hover:opacity-90 transition-opacity'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;