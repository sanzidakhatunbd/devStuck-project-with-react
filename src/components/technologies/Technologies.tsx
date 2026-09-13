import React, { use } from 'react';
import type { Itechnology } from '../../types/techType';
import StockedTech from './StockedTech';


interface TechnologiesProps{
    technologiesPromise: Promise<Itechnology[]>
}
const Technologies = ({technologiesPromise}: TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-3xl'>
                <span className=''>Explore the</span>
                <span className=''> Technologies</span>
            </h2>
           <p> Pic one Technology per category to build your ideal stack.</p>
            <StockedTech technologies={technologies}/>
        </div>
    );
};

export default Technologies;