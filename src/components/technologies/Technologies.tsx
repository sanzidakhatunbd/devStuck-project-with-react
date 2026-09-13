import { use, useState } from 'react';
import type { Itechnology } from '../../types/techType';
import StockedTech from './StockedTech';
import SelectStock from './SelectStock';

interface TechnologiesProps{
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({technologiesPromise}: TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    // const [btnType, setBtnType] = useState('AddStack')
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-3xl'>
                <span className=''>Explore the</span>
                <span className=''> Technologies</span>
            </h2>
           <p className='mb-10'> Pic one Technology per category to build your ideal stack.</p>
           
           <div className='grid grid-cols-[3fr_1fr] gap-3'>
            <StockedTech technologies={technologies}/>
            <SelectStock />
           </div>
            
        </div>
    );
};

export default Technologies;