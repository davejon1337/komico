import React from "react";
import styled from "styled-components";
import { Movies } from "../Utils/Suggestions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { useRef } from "react";
import Hero from "../Components/Hero";
import Slider from "../Components/Slider";
import MovieCard from "../Components/MovieCard";

const Section = styled.section`
  margin-top: 30px;
  padding-left: 20px;
`;

const Heading = styled.h6`
  font-weight: 500;
  font-size: 1.3rem;
  margin: 20px 0;
  padding-left: 20px;
`;

export default function HomePage() {
  // const int = Math.floor(Math.random() * 3);

  const movieCardContainerRef = useRef(0);

  const [state, setState] = useState(null);
  const [soon, setSoon] = useState(null);
  const int = Math.floor(Math.random() * 20);

  useEffect(() => {
    const fetch = async () => {
      const res = await Axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=fed0dc08aa09927ccddbc99c1f16e6c8"
      );
      setState(res.data.results);
    };
    fetch();
    const fetchIt = async () => {
      const res = await Axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=fed0dc08aa09927ccddbc99c1f16e6c8"
      );
      setSoon(res.data.results);
    };
    fetchIt();
  }, []);

  return (
    <div>
      {state && (
        <Hero
          src={`https://image.tmdb.org/t/p/original${state[int].backdrop_path}`}
          title={state[int].title}
          overview={state[int].overview}
          tagline={state[int].tagline}
          height={90}
        />
      )}
      <Section>
        <Heading>TOP TRENDING</Heading>
        <Slider>
          {state &&
            state.map(movie => (
              <MovieCard
                image={movie.poster_path}
                rating={movie.vote_average}
                title={movie.title}
              />
            ))}
        </Slider>
      </Section>
      <Section>
        <Heading>UPCOMING</Heading>
        <Slider>
          {soon &&
            soon.map(movie => (
              <MovieCard
                image={movie.poster_path}
                rating={movie.vote_average}
                title={movie.title}
              ></MovieCard>
            ))}
        </Slider>
      </Section>
    </div>
  );
}
