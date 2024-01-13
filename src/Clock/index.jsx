import React from "react";
import styled from "styled-components";

import Hand from "./Hand";
import Time from "./Time";
import Tootip from "../Tooltip";

function Clock() {
  console.log("Rendering");
  return (
    <Tootip>
      <StyledClock>
        <StyledDot />
        <Time />
        <Hand />
      </StyledClock>
    </Tootip>
  );
}

const StyledClock = styled.div(() => {
  return {
    width: "500px",
    height: "500px",
    border: "2px solid #565656",
    borderRadius: "50%",
    background: "#f5f5f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };
});

const StyledDot = styled.div(() => {
  return {
    zIndex: 1,
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    background: "grey",
    position: "relative",
  };
});

export default Clock;
