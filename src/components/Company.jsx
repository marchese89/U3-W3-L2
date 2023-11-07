import { Col, Row } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavouritesAction } from "../redux/actions";

export default function Company({ company }) {
  const dispatch = useDispatch();
  return (
    <>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${company}`}>{company}</Link>
        </Col>
        <Col xs={9} className="text-end">
          <Trash3
            className="heart-icon text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(removeFromFavouritesAction(company));
            }}
          />
        </Col>
      </Row>
    </>
  );
}
