import './Portfolio.css';
import PortfolioCard from './portfolio-card/PortfolioCard';

import { proyectsElements } from '../../service/proyectsLoader.js';
import { useEffect, useState } from 'react';

const Portfolio = () => {
    const [proyectsList, setProyectsList] = useState(proyectsElements);
    const [isFilterLandingPage, setIsFilterLandingPage] = useState(undefined);

    const defineElementsToShow = (elem) => {
        if(isFilterLandingPage===undefined) {
            return elem;
        }
        if(isFilterLandingPage && elem.isLandingPage){
            return elem
        }
        if(!isFilterLandingPage && !elem.isLandingPage){
            return elem
        }
    }

    useEffect(() => {
        setProyectsList(proyectsElements);
    }, [])
    return (
        <section id='section-portfolio' className='section-portfolio'>
            <div className='portfolio-title'>
                <h1>Nuestro Portfolio</h1>
            </div>
            <div className='nav-portfolio'>
                <div className='nav-portfolio-elem' onClick={()=>setIsFilterLandingPage(undefined)}>Todo</div>
                <div className='nav-portfolio-elem' onClick={()=>setIsFilterLandingPage(true)}>Landing Pages</div>
                <div className='nav-portfolio-elem' onClick={()=>setIsFilterLandingPage(false)}>Software Personalizado</div>
            </div>
            <div className='portfolio-cards-container'>
                {proyectsList.map((elem, i) => (
                    defineElementsToShow(elem) &&
                        <PortfolioCard
                        title={elem.title}
                        description={elem.description}
                        imgPreview={elem.imgPreview}
                        imgs={elem.imgs}
                        tecnologies={elem.tecnologies}
                    />
                ))}
            </div>
        </section>
    );
}
export default Portfolio;