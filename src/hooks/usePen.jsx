import { useRef, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

const usePen = () => {
  const { canvasRef } = useAppContext();
  const drawingOn = useRef(false);
  let lastX = useRef(null);
  let lastY = useRef(null);
  const onMouseUpPen = (e) => {
    drawingOn.current = false;
  };
  const onMouseDownPen = (e) => {
    drawingOn.current = true;
    lastX.current = e.clientX;
    lastY.current = e.clientY;
  };

  const onMouseMovePen = (e) => {
    if (!drawingOn.current) return;
    const x = e.clientX;
    const y = e.clientY;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(lastX.current, lastY.current);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastX.current = x;
    lastY.current = y;
  };

  return {
    drawingOn,
    lastX,
    lastY,
    onMouseUpPen,
    onMouseDownPen,
    onMouseMovePen,
  };
};

export default usePen;
