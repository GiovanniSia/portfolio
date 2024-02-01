import './ModalCardExpanded.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';

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

  useEffect(()=>{
    console.log(imgs[0]);
  },[])

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

        {imgs.forEach( i => {
          <img src={i} />
        })}                   




      </Modal.Body>
      <Modal.Footer>
        {tecnologies.map(t => (
          <Button variant="success">{t}</Button>
        ))}
      </Modal.Footer>
    </Modal>
  );
}
export default ModalCardExpanded;

/*
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {imgs.forEach(i => {
            <Carousel.Item>
              <img src={i} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          })}
        </Carousel>
*/