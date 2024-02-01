import './ModalCardExpanded.css';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ModalCardExpanded = ({ title, description, imgs, tecnologies, show, handleCloseModalCardExpanded }) => {
  const handleCloseModal = (e) => {
    if (e === undefined) {
      return handleCloseModalCardExpanded();
    }
  }

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={(e) => handleCloseModal(e)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {description}
        </p>

        <Carousel activeIndex={index} onSelect={handleSelect} >
          {imgs.map( (url,i=uuidv4()) => (
            <Carousel.Item interval={10000} key={i}>
              {url.startsWith('http') 
              ?
              <iframe width="560" height="315" src="https://www.youtube.com/embed/YawYgWzxTy0?si=zQACpV0Q8Nt7aq0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              : 
              <img src={url} />}

            </Carousel.Item>
          ))}
        </Carousel>

      </Modal.Body>
      <Modal.Footer>
        {tecnologies.map( (text, i=uuidv4()) => (
          <button key={i} className='modal-button-tecnology'>{text}</button>
        ))}
      </Modal.Footer>
    </Modal>
  );
}
export default ModalCardExpanded;