import './Portfolio.css';
import PortfolioCard from './portfolio-card/PortfolioCard';

const Portfolio = () => {

    return (
        <section id='section-portfolio'>
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
                <PortfolioCard />
            </div>
        </section>
    );
}