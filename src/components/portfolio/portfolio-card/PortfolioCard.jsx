import { useEffect, useState } from 'react';
import './PortfolioCard.css';
import ModalCardExpanded from './modal-card-expanded/ModalCardExpanded';

const PortfolioCard = ({ title, description, imgPreview, imgs, tecnologies }) => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModalCardExpanded = (e) => {
        if (e === undefined) {
            //se hizo click en la x del modal (no hay evento creo)
            setShowModal(false);
            return;
        }
        e.preventDefault();
    }

    useEffect(()=>{
        console.log(imgPreview);
    },[])

    return (
        <>
            <div className='portfolio-card-container' onClick={() => { setShowModal(true) }}>
                <div className={`portfolio-card`}>
                    <img src={imgPreview} />
                </div>
                {/*
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
            */}
            </div>
            <ModalCardExpanded
                title={title}
                description={description}
                imgs={imgs}
                tecnologies={tecnologies}
                show={showModal}
                handleCloseModalCardExpanded={handleCloseModalCardExpanded}
            />
        </>
    );
}
export default PortfolioCard;