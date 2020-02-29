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

// const MovieCard = styled.div`
//   height : 250px;
//   width : 200px;
//   background-image : url('${props => props.src}');
//   background-size : cover;
//   display : inline-block;
//   margin-right   : 50px;
//   transition : all 0.5s ease-in-out;

//   &:hover {
//    transform : scale(1.3);
//     }

// `;

// const CardWrapper = styled.div`
//   position: relative;
//   height: 200px;
//   width: 150px;
//   display: inline-block;
// `;

// const Card = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.5s;

//   &:hover {
//     transform: scale(1.1);
//     cursor: pointer;
//   }
// `;

// const Img = styled.img`
//   height: 150px;
//   width: 100px;
//   border-radius: 5px;
// `;

// const NormatText = styled.h3`
//   margin-top: 10px;
//   font-weight: 800;
//   font-size: 0.9rem;
// `;

// const RatingContainer = styled.div`
//   z-index: 4;
//   position: absolute;
//   top: 10%;
//   left: 20%;
//   display: flex;
//   background-color: rgba(0, 0, 0, 0.7);
//   padding: 2px;
//   font-size: 0.7rem;
//   font-family: "Lato", sans-serif;
// `;

// const Icon = styled.i`
//   margin: auto 5px auto 0;
// `;

// const Rating = ({ rate }) => {
//   return (
//     <RatingContainer>
//       <Icon className="fas fa-star"></Icon>
//       <h3> {rate} </h3>
//     </RatingContainer>
//   );
// };

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
          {/* {soon &&
            soon.map(movie => (
              // <MovieCard
              //   src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              // ></MovieCard>
            ))} */}
        </Slider>
      </Section>
    </div>
  );
}
