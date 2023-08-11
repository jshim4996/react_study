import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, img, title, summary, genres }) {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>
        {/* href 로 페이지 이동할경우 새로 고침이 발생 
          Link 태그를 사용 하면 새로고침이 발생하지 않는다.
        */}
        <Link to={`/movie/${id}`}>{title} </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
