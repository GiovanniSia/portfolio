const PortfolioCard = (title,description,imgPreview,imgs,tecnologies,show) => {
    return (
        <div className='portfolio-card-container'>
            <div className={`portfolio-card`}>
                <img src={`${imgPreview}`} />
            </div>
            <div className={`portfolio-card-expanded ${show ? '' : 'closed'}`}>
                <div className="portfolio-card-expanded-container">
                    <div className="portfolio-card-expanded-title">
                        {title}
                    </div>
                    <div className="portfolio-card-expanded-description">
                        {description}
                    </div>
                    <div className="portfolio-card-expanded-carrousel"></div>
                    <div className="portfolio-card-expanded-tecnologies-container">
                        {tecnologies.map( txt => (
                            <div className="tecnologies-item"><p>{txt}</p></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}