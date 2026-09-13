import type { Dispatch, SetStateAction } from 'react';
import type { Itechnology } from '../../types/techType';
import TechCards from './TechCards';

interface StockedTechProps {
    technologies: Itechnology[];
    selectedTeches: Itechnology[];
    setSelectedTeches: Dispatch<SetStateAction<Itechnology[]>>;
}

const StockedTech = ({ technologies, selectedTeches, setSelectedTeches }: StockedTechProps) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech: Itechnology, index: number) => {
                return (
                    <TechCards key={index} tech={tech} selectedTeches={selectedTeches} setSelectedTeches={setSelectedTeches} />
                );
            })}
        </div>
    );
};

export default StockedTech;