/** @format */

import React from "react";
import { motion, useAnimation } from "framer-motion";

const CoinContainerWithGravity = () => {
  const containerRef = React.useRef(null);
  const [coins, setCoins] = React.useState([...Array(5).keys()]);

  const onDrop = (event, info, coinId) => {
    const { y } = info.point;
    const containerBounds = containerRef.current.getBoundingClientRect();
    if (y > containerBounds.bottom) {
      setCoins((prevCoins) => prevCoins.filter((id) => id !== coinId));
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "300px",
        height: "500px",
        border: "1px solid #ccc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {coins.map((coinId) => (
        <Coin
          key={coinId}
          coinId={coinId}
          containerRef={containerRef}
          onDrop={onDrop}
        />
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

const Coin = ({ coinId, containerRef, onDrop }) => {
  const controls = useAnimation();

  const handleDragEnd = async (event, info) => {
    onDrop(event, info, coinId);
    const containerBounds = containerRef.current.getBoundingClientRect();
    const distanceToBottom = containerBounds.bottom - info.point.y;

    await controls.start({
      y: distanceToBottom,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  };

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
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
      animate={controls}
    />
  );
};

export default CoinContainerWithGravity;
