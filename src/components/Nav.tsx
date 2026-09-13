import navLogo from '../assets/logo-text.png';
import hamIcon from '../assets/hamburger.png';

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
            <div className="container relative mx-auto flex h-14 items-center px-6">
                <button type="button" aria-label="Open menu" className="md:hidden">
                    <img src={hamIcon} alt="Menu" className="h-5 w-5 object-contain" />
                </button>
                <a href="#" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    <img src={navLogo} alt="Dev Stack" className="h-7 w-auto object-contain"/>
                </a>
                <ul className=" absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
                    <li>
                        <a href="#" className="text-[13px] font-medium text-pink-600 transition-colors">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#" className="text-[13px] font-medium text-gray-600 transition-colors hover:text-pink-600">
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a href="#" className="text-[13px] font-medium text-gray-600 transition-colors hover:text-pink-600">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#" className="text-[13px] font-medium text-gray-600 transition-colors hover:text-pink-600">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#" className="text-[13px] font-medium text-gray-600 transition-colors hover:text-pink-600">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="ml-auto flex items-center gap-3 sm:gap-4">
                    <button type="button" className="text-[13px] font-medium text-gray-600 transition-colors hover:text-gray-900">
                        Sign In
                    </button>

                    <button type="button" className="rounded-full bg-pink-600 px-4 py-1.5 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-pink-700">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Nav;