/** @format */

import React from "react";
import { motion } from "framer-motion";

const CoinContainer = () => {
  const containerRef = React.useRef(null);
  const [coins, setCoins] = React.useState([...Array(5).keys()]); // Number of initial coins

  const onDrop = (event, info, coinId) => {
    const { y } = info.point;
    const containerBounds = containerRef.current.getBoundingClientRect();
    if (y > containerBounds.bottom) {
      setCoins((prevCoins) => prevCoins.filter((id) => id !== coinId)); // Remove the released coin
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
        <Coin key={coinId} coinId={coinId} onDrop={onDrop} />
      ))}
      <div
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

const Coin = ({ coinId, onDrop }) => {
  const handleDragEnd = (event, info) => {
    onDrop(event, info, coinId);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0} // No resistance when dragging
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "gold",
        position: "absolute",
        top: "50%",
        left: `${coinId * 60}px`,
        zIndex: 2,
      }}
      onDragEnd={handleDragEnd}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
    />
  );
};

export default CoinContainer;
