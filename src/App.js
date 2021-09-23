import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import GenericCard from "./Components/GenericCard";
import { FiArrowLeft } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { ImLibrary, ImHammer, ImPower} from "react-icons/im";
import { GiHalberdShuriken } from "react-icons/gi";

function App() {
    return (
        <div className="App">
            <main>
                <Container fluid>
                    <Row className="mt-5 mx-5">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Accueil</Breadcrumb.Item>
                            <Breadcrumb.Item active>Panel</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="mx-5">
                        <h3><FiArrowLeft />Panel</h3>
                    </Row>
                    <Row  className="m-5">
                        <Col md={6}>
                            <GenericCard
                                name={"personnage"}
                                component={<BsPeople className="m-2"/>}
                                count={48}
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget bibendum orci. Sed sed consequat dolor, at hendrerit arcu. Pellentesque vel eros dui."}
                            />
                        </Col>
                        <Col md={6}>
                            <GenericCard
                                name={"combat"}
                                component={<GiHalberdShuriken className="m-2"/>}
                                count={52}
                                content={"Nam quis eros ligula. Vestibulum vitae porttitor metus. Fusce commodo sem velit, vel rutrum enim placerat id."}
                            />
                        </Col>
                    </Row>
                    <Row  className="mx-5 my-auto">
                        <Col md={6}>
                            <GenericCard
                                name={"batiment"}
                                component={<ImLibrary className="m-2"/>}
                                count={8}
                                content={"Maecenas ullamcorper, nisi et sagittis pretium, tellus massa vestibulum enim, sed aliquam diam nunc eget ipsum. Proin suscipit hendrerit lectus, posuere consectetur lorem varius nec. Fusce quis scelerisque arcu. Phasellus consequat lectus cursus ."}
                            />
                        </Col>
                        <Col md={6}>
                            <GenericCard
                                name={"item"}
                                component={<ImHammer className="m-2"/>}
                                count={128}
                                content={"Maecenas ullamcorper, nisi et sagittis pretium, tellus massa vestibulum enim, sed aliquam diam nunc eget ipsum. Proin suscipit hendrerit lectus, posuere consectetur lorem varius nec. Fusce quis scelerisque arcu. Phasellus consequat lectus cursus ."}
                            />
                        </Col>
                    </Row>
                    <Row  className="m-5">
                        <Col md={6}>
                            <GenericCard
                                name={"sortilège"}
                                component={<ImPower className="m-2"/>}
                                count={16}
                                content={"Maecenas ullamcorper, nisi et sagittis pretium, tellus massa vestibulum enim, sed aliquam diam nunc eget ipsum. Proin suscipit hendrerit lectus, posuere consectetur lorem varius nec. Fusce quis scelerisque arcu. Phasellus consequat lectus cursus ."}
                            />
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}

export default App;
