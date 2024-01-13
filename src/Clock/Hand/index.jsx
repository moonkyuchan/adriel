import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { updateDate } from "../../Store/Slice/Date";

import { handType } from "../configs";

export default function Hand() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.date.time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateDate());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handStyles = (type) => {
    switch (type) {
      case "hour":
        return { width: "15px", height: "120px" };
      case "minutes":
        return { width: "10px", height: "180px" };
      case "seconds":
        return { width: "5px", height: "190px" };
      default:
        return null;
    }
  };

  return (
    <>
      {handType.map((hand) => {
        return (
          <StyledHand
            key={hand.key}
            deg={hand.deg(new Date(time))}
            type={hand.type}
            style={handStyles(hand.type)}
          />
        );
      })}
    </>
  );
}

const StyledHand = styled.div(({ deg }) => ({
  background: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transformOrigin: "bottom",
  transform: `translate(-50%, -100%) rotate(${deg}deg)`,
}));
