import { useRef } from "react";
import { useAppContext } from "../context/AppContext";

const useRectangle = () => {
  const { canvasRef } = useAppContext();
  const rectangleOn = useRef(false);
  const startingX = useRef();
  const startingY = useRef();
  const onMouseUpRectangle = (e) => {
    rectangleOn.current = false;
  };
  const onMouseDownRectangle = (e) => {
    rectangleOn.current = true;
    startingX.current = e.clientX;
    startingY.current = e.clientY;
  };
  const onMouseMoveRectangle = (e) => {
    if (!rectangleOn.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.strokeRect(startingX.current, startingY.current, 100, 100);
    ctx.closePath();
    console.log("Making Rectangle For You");
  };

  return { onMouseDownRectangle, onMouseMoveRectangle, onMouseUpRectangle };
};

export default useRectangle;
