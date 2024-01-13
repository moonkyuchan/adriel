import React from "react";
import styled from "styled-components";

export default function Time() {
  const numbers = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <StyledNumberWrap>
      {numbers.map((number, index) => {
        return (
          <StyledTime index={number} key={index} deg={number}>
            <p>{number}</p>
          </StyledTime>
        );
      })}
    </StyledNumberWrap>
  );
}

const StyledNumberWrap = styled.div(() => {
  return {
    position: "absolute",
    width: "95%",
    height: "95%",
    borderRadius: "50%",
  };
});
const StyledTime = styled.span(({ deg }) => {
  return {
    zIndex: 2,
    position: "absolute",
    fontSize: "20px",
    fontWeight: "bold",
    inset: "6px",
    transform: `rotate(calc(${deg * 30}deg))`,
    textAlign: "center",
    "& > p": {
      display: "inline-block",
      transform: `rotate(calc(${deg * -30}deg))`,
    },
  };
});
