import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../types/techType";
import { Bounce, toast } from "react-toastify";

interface ISelectedTechProps {
    selectedTeches: Itechnology[];
    setSelectedTeches: Dispatch<SetStateAction<Itechnology[]>>;
}

const SelectStock = ({ selectedTeches, setSelectedTeches }: ISelectedTechProps) => {
    const handleRemove = (id: string) => {
        setSelectedTeches((prev) => prev.filter((tech) => tech.id !== id));
        toast.warning(`Removed from your stack!`, {
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
    };

    const handleRemoveAll = () => {
        setSelectedTeches([]);
        toast.info(`Your Stack is Cleared.`, {
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
    };

    const count = selectedTeches.length;

    return (
        <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-bold text-gray-950">Your Stack</h3>

                <p className="mt-1 text-sm text-gray-400">
                    {count === 0 ? "No technologies selected yet." : `${count} ${count === 1 ? "Technology" : "Technologies"} Selected`}
                </p>

                {count === 0 ? (
                    <div className="mt-4 flex items-center justify-center rounded-xl border border-dashed border-gray-200 py-10">
                        <p className="text-sm text-gray-400">Your stack is empty.</p>
                    </div>
                ) : (
                    <>
                        <div className="mt-4 flex flex-col gap-3">
                            {selectedTeches.map((tech) => (
                                <div key={tech.id} className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-3">
                                    <div className="flex items-center gap-3">
                                        <img className="h-8 w-8 object-contain" src={tech.icon} alt={tech.name} />
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-950">{tech.name}</h4>
                                            <p className="text-xs text-gray-400">{tech.category}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleRemove(tech.id)} aria-label={`Remove ${tech.name}`} className="text-gray-400 hover:text-pink-600">
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button onClick={handleRemoveAll} className="mt-5 w-full rounded-lg border border-pink-200 py-2.5 text-sm font-semibold text-pink-500 transition hover:bg-pink-50">
                            Remove All
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default SelectStock;