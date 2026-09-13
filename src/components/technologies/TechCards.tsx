import { useState } from 'react';
import type { Itechnology } from '../../types/techType';
import { Bounce, toast } from 'react-toastify';

const TechCards = ({ tech }: { tech: Itechnology }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            className={`flex flex-col rounded-2xl border bg-white p-4 ${
                isSelected
                    ? "border-pink-400"
                    : "border-gray-200"
            }`}
        >

            <div className="flex items-start justify-between">
                <img
                    className="h-8 w-8 object-contain"
                    src={tech.icon}
                    alt={tech.name}
                />

                <span className="rounded-full border border-pink-100 bg-pink-50 px-2 py-1 text-sm font-medium text-pink-500">
                    {tech.badge}
                </span>
            </div>

            <div className="mt-4 flex flex-1 flex-col">
                <h3 className="text-base font-bold leading-tight text-gray-950">
                    {tech.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {tech.description}
                </p>

                <div className="my-5 h-px w-full bg-gray-100"></div>

                <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">
                        {tech.category}
                    </span>

                    <span className="text-sm text-gray-500">
                        {tech.difficulty}
                    </span>

                    <span className="flex items-center gap-1 text-sm text-gray-700">
                        <span className="text-xs text-yellow-500">★</span>
                        {tech.rating}
                    </span>
                </div>

                <button
                    onClick={() => {
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
                    }}
                    className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium transition ${
                        isSelected
                            ? "bg-pink-100 text-pink-600"
                            : "bg-gray-900 text-white hover:bg-gray-950"
                    }`}
                    disabled={isSelected}
                >
                    {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechCards;