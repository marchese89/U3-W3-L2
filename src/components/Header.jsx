import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="mx-auto my-3">
            <Link to={"/"}>
              <h1 className="display-1 text-center">Remote Jobs Search</h1>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="justify-content-center d-flex mb-3">
            <Link to={"/favourites"} className="fav">
              Favourites
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
