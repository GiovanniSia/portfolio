import './ModalCardExpanded.css';
import Modal from 'react-bootstrap/Modal';

const ModalCardExpanded = ({title,description,imgs,tecnologies,show}) => {
    return (
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
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
        </Modal.Body>
        <Modal.Footer>
            {tecnologies}
        </Modal.Footer>
      </Modal>
    );
}
export default ModalCardExpanded;