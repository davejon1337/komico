import React from "react";
import styled from "styled-components";
import { Movies } from "../Utils/Suggestions";

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
  padding-left: 50px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const StudioImage = styled.div`
  height: 300px;
  width: 250px;
  background-image : url('${props => props.src}');
  background-size: cover;
  background-position : center center;
`;

export default function HomePage() {
  const int = Math.floor(Math.random() * 2);

  return (
    <div>
      <Hero img={Movies[int].backdrop_path}>
        <Content>
          <StudioImage src={Movies[int].poster_path} />
        </Content>
      </Hero>
    </div>
  );
}
