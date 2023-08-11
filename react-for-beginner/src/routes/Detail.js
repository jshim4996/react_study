import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setloading] = useState(true);

  const getMovie = async () => {
    const result = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(result.data.movie);
    setloading(false);
    console.log(result.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <ul>
            {movie.genres.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
