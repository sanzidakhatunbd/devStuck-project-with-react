import footerLogo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 bg-white mt-15">
            <div className="container mx-auto px-6 py-12 sm:py-14">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

                    <div className="text-center sm:text-left">
                        <img src={footerLogo} alt="Dev Stack" className="mx-auto h-7 w-auto sm:mx-0" />

                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        <ul className="mt-5 flex items-center justify-center gap-4 sm:justify-start">
                            <li>
                                <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-600">
                                    GitHub
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-600">
                                    Twitter
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-600">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden sm:flex sm:gap-16 md:gap-24">

                        <div>
                            <p className="text-xs font-semibold uppercase text-gray-900">
                                Product
                            </p>

                            <ul className="mt-4 space-y-3">
                                <li>
                                    <a href="#" className="text-sm text-gray-500 transition-colors hover:text-pink-600">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-sm text-gray-500 transition-colors hover:text-pink-600">
                                        Technologies
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-sm text-gray-500 transition-colors hover:text-pink-600">
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase text-gray-900">
                                Company
                            </p>

                            <ul className="mt-4 space-y-3">
                                <li>
                                    <a href="#" className="text-sm text-gray-500 transition-colors hover:text-pink-600">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-sm text-gray-500 transition-colors hover:text-pink-600">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-sm text-gray-500 transition-colors hover:text-pink-600">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase text-gray-900">
                                Legal
                            </p>

                            <ul className="mt-4 space-y-3">
                                <li>
                                    <a href="#" className="text-sm text-gray-500 transition-colors hover:text-pink-600">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-sm text-gray-500 transition-colors hover:text-pink-600">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100">
                <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">

                    <p className="text-xs text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <ul className="flex items-center gap-6">
                        <li>
                            <a href="#" className="text-xs text-gray-400 transition-colors hover:text-pink-600">
                                Privacy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-xs text-gray-400 transition-colors hover:text-pink-600">
                                Terms
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

        </footer>
    );
};

export default Footer;