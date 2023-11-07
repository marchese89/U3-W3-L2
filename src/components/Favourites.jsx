import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Company from "./Company";

export default function Favourites() {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <Container>
      <Row>
        <Col xs={8} className="mx-auto mb-5">
          {favourites.map((company, i) => (
            <Company key={i} company={company} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
