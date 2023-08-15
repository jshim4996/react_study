import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, img, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={img} alt={title} />
      <h2 className={styles.movie__title}>
        {/* href 로 페이지 이동할경우 새로 고침이 발생 
          Link 태그를 사용 하면 새로고침이 발생하지 않는다.
        */}
        <Link to={`/movie/${id}`}>{title} </Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
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
