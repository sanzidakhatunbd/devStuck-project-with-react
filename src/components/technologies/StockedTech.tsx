import type { Itechnology } from '../../types/techType';
import TechCards from './TechCards';


const StockedTech = ({ technologies }: { technologies: Itechnology[] }) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            {technologies.map((tech:Itechnology, index:number) =>{
                return(
                     <TechCards key={index} tech={tech} />
                );
            })} 
        </div>
    );
};

export default StockedTech;