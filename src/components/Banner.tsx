import bannerImage from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <section className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        <span className="block text-slate-900">
                            Build Your Ideal
                        </span>

                        <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 text-gray-500 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                        Explore frontend, backend, database, and tooling
                        options, compare them side by side, and put together
                        the stack that fits your next project.
                    </p>

                    <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                        <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-white bg-linear-to-r from-orange-500 to-pink-600 hover:opacity-90">
                            Explore Technologies
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2 sm:px-10 sm:py-3 rounded-lg font-semibold text-gray-700 border border-gray-200 hover:border-gray-300">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex lg:justify-end">
                    <img
                        src={bannerImage}
                        alt="Development stack illustration"
                        className="w-full max-w-md lg:max-w-lg"
                    />
                </div>

            </div>
        </section>
    )
}

export default Banner