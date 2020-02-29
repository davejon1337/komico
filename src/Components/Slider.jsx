import React, { useRef } from "react";
import styled from "styled-components";
// import propTypes from "prop-types";

const SliderWrapper = styled.div`
  position: relative;
  padding: 10px 20px;
`;

const SliderContainer = styled.div`
  white-space: nowrap;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;
  /* padding: 0 10px; */
`;

const NavigationButtonLeft = styled.i`
  z-index: 1;
  position: absolute;
  height: 10%;
  top: 30%;
  left: 0;
  cursor: pointer;
  font-size: 2.5rem;
`;

const NavigationButtonRight = styled.i`
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 98%;
  cursor: pointer;
  height: 10%;
  font-size: 2.5rem;
`;

export default function Slider({ children }) {
  const sliderRef = useRef(0);

  const handleClick = (e, loc) => {
    if (loc === "right") {
      sliderRef.current.scrollLeft += 250;
    } else {
      sliderRef.current.scrollLeft -= 250;
    }
  };

  return (
    <SliderWrapper>
      <NavigationButtonLeft
        className="fas fa-chevron-left"
        onClick={e => handleClick(e, "left")}
      ></NavigationButtonLeft>
      <SliderContainer ref={sliderRef}>{children}</SliderContainer>
      <NavigationButtonRight
        className="fas fa-chevron-right"
        onClick={e => handleClick(e, "right")}
      ></NavigationButtonRight>
    </SliderWrapper>
  );
}
