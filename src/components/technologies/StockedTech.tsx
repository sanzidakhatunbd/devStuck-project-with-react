import type { Itechnology } from '../../types/techType';
import TechCard from './techCard';


const StockedTech = ({ technologies }: { technologies: Itechnology[] }) => {
    return (
        <div className="container mx-auto mt-10 grid grid-cols-3 gap-3">
            {technologies.map((tech:Itechnology, index:number) =>{
                return(
                     <TechCard key={index} tech={tech} />
                );
            })} 
        </div>
    );
};

export default StockedTech;