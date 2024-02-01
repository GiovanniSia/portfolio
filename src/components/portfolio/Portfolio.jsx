import './Portfolio.css';
import PortfolioCard from './portfolio-card/PortfolioCard';

import { proyectsElements } from '../../service/proyectsLoader.js';
import { useEffect, useState } from 'react';

const Portfolio = () => {

    const [proyectsList, setProyectsList] = useState(proyectsElements);
    // const [itemActiveIndex, setItemActiveIndex] = useState();

    useEffect(() => {
        setProyectsList(proyectsElements);
    }, [])

    return (
        <section id='section-portfolio' className='section-portfolio'>
            <div className='portfolio-title'>
                <h1>Nuestro Portfolio</h1>
                <div className='portfolio-title-undernline'></div>
            </div>
            <div className='nav-portfolio'>
                <div className='nav-portfolio-elem'>Todo</div>
                <div className='nav-portfolio-elem'>Landing Pages</div>
                <div className='nav-portfolio-elem'>Software Personalizado</div>
            </div>
            <div className='portfolio-cards-container'>
                {proyectsList.map((elem, i) => (
                    <PortfolioCard
                        title={elem.title}
                        description={elem.description}
                        imgPreview={elem.imgPreview}
                        imgs={elem.imgs}
                        tecnologies={elem.tecnologies}
                        // show={itemActiveIndex === i}
                        // i={i}
                    />
                ))}
            </div>
        </section>
    );
}
export default Portfolio;

/*
<ul>
{proyectsList.map((elem, i) => (
    <li 
    key={i}
    onClick={() => { setItemActiveIndex(i)}}>
        <PortfolioCard
            title={elem.title}
            description={elem.description}
            imgPreview={elem.imgPreview}
            imgs={elem.imgs}
            tecnologies={elem.tecnologies}
            show={itemActiveIndex===i}
            i={i}
        />
    </li>
))}
</ul>
*/