import bannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="container mx-auto px-6">
            <div className="flex min-h-105 flex-col items-center justify-center gap-10 py-12 sm:py-16 lg:min-h-120 lg:flex-row lg:gap-8 lg:py-16">
                <div className="flex-1 text-center lg:text-left">

                    <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[48px]">
                        <span className="block text-slate-900">
                            Build Your Ideal
                        </span>

                        <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-gray-500 sm:text-base lg:mx-0">
                        Explore frontend, backend, database, and tooling
                        options, compare them side by side, and put together
                        the stack that fits your next project.
                    </p>
                    <div className="mt-7 flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">

                        <button
                            type="button"
                            className="rounded-lg bg-linear-to-r from-orange-500 to-pink-600 px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:px-5 sm:py-3 sm:text-sm"
                        >
                            Explore Technologies
                        </button>

                        <button
                            type="button"
                            className="rounded-lg border border-gray-200 px-6 py-2.5 text-xs font-semibold text-gray-700 transition-colors hover:border-gray-300 sm:px-9 sm:py-3 sm:text-sm"
                        >
                            Learn More
                        </button>

                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center lg:justify-end">
                    <img
                        src={bannerImage}
                        alt="Development stack illustration"
                        className="w-full max-w-82.5 object-contain sm:max-w-95 lg:max-w-110"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;