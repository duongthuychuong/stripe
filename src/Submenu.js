import React, { useState, useRef, useEffect } from "react";
import { useGlobalState } from "./context";

const Submenu = () => {
  const data = useGlobalState();
  console.log(data);
  return <h2>submenu component</h2>;
};

export default Submenu;
