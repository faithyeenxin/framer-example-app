/** @format */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/component/input";
import { useState } from "react";

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <>
      <div>transition in ball</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundColor: "red",
          width: 200,
          height: 200,
          borderRadius: "100%",
        }}
      />

      <div>shifting ball</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input value={x} set={setX}>
            x
          </Input>
          <Input value={y} set={setY}>
            y
          </Input>
          <Input value={rotate} set={setRotate} min={-180} max={180}>
            rotate
          </Input>
        </div>
        <div
          style={{
            // background: "grey",
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            animate={{ x, y, rotate }}
            transition={{ type: "spring" }}
            style={{
              backgroundColor: "blue",
              width: 200,
              height: 200,
            }}
          />
        </div>
      </div>
    </>
  );
}
