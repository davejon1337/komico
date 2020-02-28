import React from "react";
import styled from "styled-components";
import { Movies } from "../Utils/Suggestions";
import { Link } from "react-router-dom";

const Hero = styled.div`
  position : relative;
  height: 90vh;
  width: 100%;
  background-image:  linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,
  url('${props => props.img}');
  background-size: cover;

`;

const Content = styled.div`
  padding-top: 40px;
  padding-left: 7rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
    transform: scale(1.3);
    background-color: #000;
    color: #fff;
  }
`;

export default function HomePage() {
  const int = Math.floor(Math.random() * 2);

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
    </div>
  );
}
