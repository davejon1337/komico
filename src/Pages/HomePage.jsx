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
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function HomePage() {
  return (
    <div>
      <Hero img={Movies[Math.floor(Math.random() * 2)].backdrop_path}>
        <Content>dadasdasd</Content>
      </Hero>
    </div>
  );
}
