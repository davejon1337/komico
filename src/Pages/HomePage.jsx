import React from "react";
import styled from "styled-components";
import { Movies } from "../Utils/Suggestions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { useRef } from "react";

const Hero = styled.div`
  position : relative;
  height: 90vh;
  width: 100%;
  background-image:  linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,
  url('${props => props.img}');
  background-size: cover;


  @media (max-width : 500px) {
    
  }

`;

const Content = styled.div`
  padding-top: 40px;
  padding-left: 7rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 500px) {
    padding-left: 2rem;
  }
`;

const StudioImage = styled.div`
  height: 300px;
  width: 250px;
  background-image : url('${props => props.src}');
  background-size: cover;
  background-position : center center;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  font-family: "Lato", sans-serif;

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const Tag = styled.h6`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Info = styled.p`
  margin-top: 10px;
  font-weight: 300;
  font-size: 1.2rem;
  width: 30%;
  @media (max-width: 500px) {
    width: 100%;
    font-size: 1rem;
  }
`;

const Button = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  background-color: white;
  padding: 10px 20px;
  color: #000;
  width: 150px;
  display: inline-block;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: #000;
    color: #fff;
  }
`;

const Section = styled.section`
  margin-top: 30px;
  padding-left: 20px;
`;

const Heading = styled.h6`
  font-weight: 500;
  font-size: 1.3rem;
  margin: 20px 0;
`;

const Slider = styled.div`
  position: relative;
`;

const MovieCardContainer = styled.div`
  white-space: nowrap;
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const MovieCard = styled.div`
  height : 250px;
  width : 200px;
  background-image : url('${props => props.src}');
  background-size : cover;
  display : inline-block;
  margin-right   : 15px;
`;

const NavigationButtonLeft = styled.i`
  position: absolute;
  top: 45%;
  left: 0;
  cursor: pointer;
  font-size: 3rem;
`;

const NavigationButtonRight = styled.i`
  position: absolute;
  top: 45%;
  left: 98%;
  cursor: pointer;
  font-size: 3rem;
`;

export default function HomePage() {
  // const int = Math.floor(Math.random() * 3);

  const movieCardContainerRef = useRef(0);

  const int = 2;
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await Axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=fed0dc08aa09927ccddbc99c1f16e6c8"
      );
      setState(res.data.results);
    };
    fetch();
  }, []);

  const handleClick = e => {
    // console.log(movieCardContainerRef.current.scrollTop);
    movieCardContainerRef.current.scrollLeft += 250;
    // console.log(movieCardContainerRef.current.scrollTop);
  };

  const handleLeftNavigation = e => {
    movieCardContainerRef.current.scrollLeft -= 250;
  };
  return (
    <div>
      <Hero img={Movies[int].backdrop_path}>
        <Content>
          <Title>{Movies[int].title.toUpperCase()}</Title>
          <Tag>{Movies[int].tagline}</Tag>
          <Info>{Movies[int].overview}</Info>
          <Button>
            <i
              className="fas fa-info-circle"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            More Info
          </Button>
        </Content>
      </Hero>
      <Section>
        <Heading>TOP TRENDING</Heading>
        <Slider>
          <NavigationButtonLeft
            className="fas fa-chevron-left"
            onClick={handleLeftNavigation}
          ></NavigationButtonLeft>
          <MovieCardContainer ref={movieCardContainerRef}>
            {state &&
              state.map(movie => (
                <MovieCard
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                ></MovieCard>
              ))}
          </MovieCardContainer>
          <NavigationButtonRight
            className="fas fa-chevron-right"
            onClick={handleClick}
          ></NavigationButtonRight>
        </Slider>
      </Section>
    </div>
  );
}
