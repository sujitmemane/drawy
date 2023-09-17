import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Canvas, MenuBar } from "./components";

function App() {
  return (
    <div className="relative ">
      <Canvas />
      <div className="flex flex-col justify-center items-center">
        <div className="absolute top-0  ">
          <MenuBar />
        </div>
      </div>
    </div>
  );
}

export default App;
