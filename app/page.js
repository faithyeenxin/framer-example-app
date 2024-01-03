/** @format */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/component/input";
import { useState } from "react";
import BasicAnimations from "@/component/basic-animations";
import CoinContainerNoGravity from "@/component/coin-container-no-gravity";
import CoinContainer from "@/component/coin-container";

export default function Home() {
  return (
    <>
      {/* <BasicAnimations /> */}
      <CoinContainerNoGravity />
      {/* <CoinContainer /> */}
    </>
  );
}
