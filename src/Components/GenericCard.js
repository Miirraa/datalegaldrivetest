import {Card, Button, Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import GenericPopup from "./GenericPopup";

function GenericCard(props) {
    return (
        <Card bg={"light"}>
            <Card.Body>
                <Row>
                    <Col>
                        <h3 className="text-capitalize"> {props.component} {props.name}s</h3>
                    </Col>
                    <Col>
                        <h2 className="text-end pe-2">{props.count}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <Card.Text>
                            {props.content}
                        </Card.Text>
                    </Col>
                    <Col md={5}>
                        <Row className="px-3 py-1 text-end">
                            <Button variant="outline-dark">Ajouter un {props.name}</Button>
                        </Row>
                        <GenericPopup
                            name={props.name}
                            count={props.count}
                        />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default GenericCard;
