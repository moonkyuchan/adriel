import React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

export default function TextBox({ style, position }) {
  const timeStringFromRedux = useSelector((state) => state.date.time);
  const time = new Date(timeStringFromRedux);

  const timeTooltipStyle = {
    left: position.x + 10,
    top: position.y - 35,
  };

  return (
    <StyledTextBox style={{ ...style, ...timeTooltipStyle }}>
      {`${time.getHours()}시 ${time.getMinutes()}분 ${time.getSeconds()}`}
    </StyledTextBox>
  );
}

const StyledTextBox = styled.div(() => {
  return {
    zIndex: 999,
    fontSize: "14px",
    position: "absolute",
    width: "90px",
    height: "20px",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  };
});
