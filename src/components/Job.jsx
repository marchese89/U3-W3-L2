import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavouriteAction,
  removeFromFavouritesAction,
} from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);
  const { pathname } = useLocation();
  const fav = favourites.includes(data.company_name);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col sx={1}>
        {pathname !== "/favourites" && !fav && (
          <Heart
            className="heart-icon"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(addFavouriteAction(data.company_name));
            }}
          />
        )}
        {fav && (
          <HeartFill
            className="heart-icon"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(removeFromFavouritesAction(data.company_name));
            }}
          />
        )}
      </Col>
    </Row>
  );
};

export default Job;
