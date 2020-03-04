import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  position : relative;
  height: ${props => props.height}vh;
  width: 100%;
  background-image:  linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) ,
  url('https://image.tmdb.org/t/p/original${props => props.img}');
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

export default function Hero({
  src,
  height,
  title,
  tagline,
  overview,
  landing,
  id
}) {
  return (
    <StyledDiv img={src} height={height}>
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Tag>{tagline}</Tag>
        <Info>{overview}</Info>
        {landing && (
          <Button to={`/movie/${id}`}>
            <i
              className="fas fa-info-circle"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            More Info
          </Button>
        )}
      </Content>
    </StyledDiv>
  );
}

Hero.propTypes = {
  src: propTypes.string.isRequired,
  height: propTypes.number.isRequired,
  title: propTypes.string,
  tagline: propTypes.string,
  overview: propTypes.string
};

Hero.defaultProps = {
  height: 100
};
