import React, { useState, useCallback } from "react";
import { debounce } from "lodash";

import TextBox from "./TextBox";

export default function Tootip({ children }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = debounce((e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  }, 50);

  const handleMouseEnter = useCallback(() => {
    setShowTooltip(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowTooltip(false);
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
      {showTooltip && <TextBox position={position} />}
    </div>
  );
}
