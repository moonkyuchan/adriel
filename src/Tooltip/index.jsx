import React, { useState } from "react";
import styled from "styled-components";

export default function Tootip({ children }) {
  console.log("Tooltip Rendering");
  const [showTooltip, setShowTooltip] = useState(false);
  console.log(showTooltip);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <StyeldBack onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div style={{ position: "absolute" }}>하하하핳하하하하핳하하하</div>
      )}
    </StyeldBack>
  );
}

const StyeldBack = styled.div(() => {
  return {};
});
