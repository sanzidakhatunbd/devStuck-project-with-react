import type { Itechnology } from '../../types/techType';

const TechCard = ({ tech }: { tech: Itechnology }) => {
    return (
        <div className="rounded-3xl border border-gray-200 bg-white p-5 flex flex-col">

            <div className="flex items-start justify-between">
                <img className="h-12 w-12 object-contain" src={tech.icon} alt={tech.name} />
                <span className="rounded-full border border-blue-100 bg-[#F2FAFF] px-3 py-1 text-lg font-medium text-blue-500">
                    {tech.badge}
                </span>
            </div>

            <div className="mt-6 flex flex-1 flex-col">
                <h3 className="text-2xl font-bold leading-tight text-gray-950">
                    {tech.name}
                </h3>

                <p className="mt-5 text-xl text-gray-500">
                    {tech.description}
                </p>

                <div className="my-7 h-px w-full bg-gray-100"></div>

                <div className="flex items-center justify-between gap-4">
                    <span className="rounded-lg bg-gray-100 px-2 py-1 text-lg text-gray-700">
                        {tech.category}
                    </span>
                    <span className="text-lg text-gray-500">
                        {tech.difficulty}
                    </span>
                    <span className="flex items-center gap-2 text-lg text-gray-700">
                        <span className="text-yellow-500 text-xl">★</span>
                        {tech.rating}
                    </span>
                </div>

                <button className="mt-8 w-full rounded-2xl bg-gray-900 py-4 text-xl font-medium text-white transition hover:bg-gray-950">
                    Add to Stack
                </button>
            </div>
        </div>
    );
};

export default TechCard;