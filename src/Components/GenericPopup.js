import {Button, Modal, Row} from "react-bootstrap";
import {FiArrowRight} from "react-icons/fi";
import {useState} from "react";

function GenericPopup(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row className="px-3 py-1 text-end">
            <Button variant="danger" onClick={handleShow}>Mes {props.name}s <FiArrowRight size={24}/></Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Détails</Modal.Title>
                </Modal.Header>
                <Modal.Body>Vous avez {props.count} {props.name}s</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Row>
    );
}

export default GenericPopup;
