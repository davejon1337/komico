import React, { useEffect, useState } from "react";
import Axios from "axios";
import Hero from "../Components/Hero";

export default function MoviePage(props) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieId = props.match.params.id;

    const fetcher = async () => {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=fed0dc08aa09927ccddbc99c1f16e6c8`
      );
      setMovie(res.data);
    };

    fetcher();
  }, []);

  return (
    <section>
      {movie && (
        <>
          <Hero
            height={90}
            overview={movie.overview}
            src={movie.backdrop_path}
            tagline={movie.tagline}
            title={movie.title}
          />
        </>
      )}
    </section>
  );
}
