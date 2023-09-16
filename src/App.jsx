import { useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef();
  console.log(canvasRef.current);
  return (
    <div>
      <canvas
        ref={canvasRef}
        className="w-full h-full border-2 border-black"
        width="800"
        height="600"
      ></canvas>
    </div>
  );
}

export default App;
