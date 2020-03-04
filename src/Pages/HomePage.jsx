import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Hero from "../Components/Hero";
import Slider from "../Components/Slider";
import MovieCard from "../Components/MovieCard";
import {
  fetchNowPlaying,
  fetchUpcoming,
  fetchTopRated
} from "../Redux/actions/movieActions";

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
  const { now_playing, upcoming, top_rated } = useSelector(
    state => state.movies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!now_playing) {
      dispatch(fetchNowPlaying());
    }
    if (!upcoming) {
      dispatch(fetchUpcoming());
    }
    if (!top_rated) {
      dispatch(fetchTopRated());
    }
  }, []);

  return (
    <div>
      {now_playing && (
        <Hero
          src={now_playing[1].backdrop_path}
          title={now_playing[1].title}
          overview={now_playing[1].overview}
          tagline={now_playing[1].tagline}
          height={90}
          landing
          id={now_playing[1].id}
        />
      )}
      <Section>
        <Heading>NOW PLAYING</Heading>
        <Slider>
          {now_playing &&
            now_playing.map(movie => (
              <MovieCard
                image={movie.poster_path}
                rating={movie.vote_average}
                title={movie.title}
                id={movie.id}
              />
            ))}
        </Slider>
      </Section>
      <Section>
        <Heading>UPCOMING</Heading>
        <Slider>
          {upcoming &&
            upcoming.map(movie => (
              <MovieCard
                image={movie.poster_path}
                rating={movie.vote_average}
                title={movie.title}
                id={movie.id}
              />
            ))}
        </Slider>
      </Section>
      <Section>
        <Heading>TOP RATED</Heading>
        <Slider>
          {top_rated &&
            top_rated.map(movie => (
              <MovieCard
                image={movie.poster_path}
                rating={movie.vote_average}
                title={movie.title}
                id={movie.id}
              />
            ))}
        </Slider>
      </Section>
    </div>
  );
}
