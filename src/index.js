import "./index.css";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas>
    <Scene />
  </Canvas>
);
