/** @format */

"use client";
/** @format */

import React from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";

const CoinContainerNoGravity = () => {
  const containerRef = React.useRef(null);
  const [coins, setCoins] = React.useState([...Array(5).keys()]); // Number of initial coins

  const onDrop = (event, info) => {
    const { y } = info.point;
    const containerBounds = containerRef.current.getBoundingClientRect();
    if (y > containerBounds.bottom) {
      setCoins([...coins, coins.length]); // Add a new coin
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "300px", // Set your container width
        height: "500px", // Set your container height
        border: "1px solid #ccc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {coins.map((coinId) => (
        <motion.div
          key={coinId}
          drag
          dragConstraints={containerRef} // Constrain dragging within the container
          dragElastic={0.2} // Elasticity of dragging
          style={{
            width: "50px", // Set your coin width
            height: "50px", // Set your coin height
            borderRadius: "50%", // Make it round for a coin effect
            backgroundColor: "gold", // Coin color
            position: "absolute",
            top: "50%", // Initial position top
            left: `${coinId * 60}px`, // Arrange coins horizontally
            zIndex: 2,
          }}
          onDragEnd={onDrop}
        />
      ))}
      <motion.div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#ccc",
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default CoinContainerNoGravity;
