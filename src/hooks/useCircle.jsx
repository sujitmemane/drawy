import { useRef } from "react";
import { useAppContext } from "../context/AppContext";

const useCircle = () => {
  const { canvasRef } = useAppContext();
  const circleOn = useRef(false);
  const startingX = useRef();
  const startingY = useRef();

  const onMouseUpCircle = (e) => {
    circleOn.current = false;
  };
  const onMouseDownCircle = (e) => {
    circleOn.current = true;
    startingX.current = e.clientX;
    startingY.current = e.clientY;
  };
  const onMouseMoveCircle = (e) => {
    if (!circleOn.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(startingX.current, startingY.current, 50, 0, 2 * Math.PI);
    ctx.stroke();
    console.log("Making Circle");
  };

  return { onMouseDownCircle, onMouseMoveCircle, onMouseUpCircle };
};

export default useCircle;
