import { useState } from 'react';
import type { Itechnology } from '../../types/techType';
import { Bounce, toast } from 'react-toastify';

const TechCards = ({ tech }: { tech: Itechnology }) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div
            className={`rounded-3xl border bg-white p-5 flex flex-col ${isSelected
                    ? "border-pink-400"
                    : "border-gray-200"
                }`}
        >

            <div className="flex items-start justify-between">
                <img className="h-12 w-12 object-contain" src={tech.icon} alt={tech.name} />
                <span className="rounded-full border border-pink-100 bg-pink-100 px-3 py-1 text-lg font-medium text-pink-500">
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

                <button onClick={() => {
                    setIsSelected(true);
                    toast.success(`${tech.name} added to your stack!`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce
                    });
                }} className={`mt-8 w-full rounded-2xl py-4 text-xl font-medium transition ${isSelected
                        ? "bg-pink-100 text-pink-600"
                        : "bg-gray-900 text-white hover:bg-gray-950"
                    }`} disabled={isSelected}>
                    {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechCards;