import { use, useState } from 'react';
import type { Itechnology } from '../../types/techType';
import StockedTech from './StockedTech';
import SelectStock from './SelectStock';

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    const [selectedTeches, setSelectedTeches] = useState<Itechnology[]>([]);

    return (
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-2">
                <span>Explore the </span>
                <span className="bg-linear-to-r from-pink-500 via-pink-600 to-pink-800 bg-clip-text text-transparent">
                    Technologies
                </span>
            </h2>

            <p className="mb-10 text-sm text-gray-400">
                Pick one technology per category to build your ideal stack.
            </p>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_1fr]">
                <StockedTech technologies={technologies} selectedTeches={selectedTeches} setSelectedTeches={setSelectedTeches} />
                <SelectStock selectedTeches={selectedTeches} setSelectedTeches={setSelectedTeches} />
            </div>
        </div>
    );
};

export default Technologies;