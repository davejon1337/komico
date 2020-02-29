import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative;
  height: 200px;
  width: 150px;
  display: inline-block;
`;

const Card = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Img = styled.img`
  height: 150px;
  width: 100px;
  border-radius: 5px;
`;

const NormatText = styled.h3`
  margin-top: 10px;
  font-weight: 800;
  font-size: 0.9rem;
`;

const RatingContainer = styled.div`
  z-index: 4;
  position: absolute;
  top: 10%;
  left: 20%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2px;
  font-size: 0.7rem;
  font-family: "Lato", sans-serif;
`;

const Icon = styled.i`
  margin: auto 5px auto 0;
`;

const Rating = ({ rate }) => {
  return (
    <RatingContainer>
      <Icon className="fas fa-star"></Icon>
      <h3> {rate} </h3>
    </RatingContainer>
  );
};

export default function MovieCard({ image, title, rating }) {
  return (
    <CardWrapper>
      <Card>
        <Img src={`https://image.tmdb.org/t/p/original${image}`} />
        <NormatText title={title}>
          {title.length > 10 ? `${title.slice(0, 10) + "..."}` : title}
        </NormatText>
        <Rating rate={rating} />
      </Card>
    </CardWrapper>
  );
}
