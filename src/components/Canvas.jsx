import { useRef, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import usePen from "../hooks/usePen";
import useRectangle from "../hooks/useRectangle";
import useCircle from "../hooks/useCircle";

const Canvas = (props) => {
  const { canvasRef, active } = useAppContext();
  const { onMouseDownPen, onMouseUpPen, onMouseMovePen } = usePen();
  const { onMouseDownRectangle, onMouseUpRectangle, onMouseMoveRectangle } =
    useRectangle();
  const { onMouseDownCircle, onMouseUpCircle, onMouseMoveCircle } = useCircle();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
  }, []);

  const mouseDownHandler = (e) => {
    if (active.penActive) {
      onMouseDownPen(e);
    }
    if (active.rectangleActive) {
      onMouseDownRectangle(e);
    }
    if (active.circleActive) {
      onMouseDownCircle(e);
    }
  };
  const mouseUpHandler = (e) => {
    if (active.penActive) {
      onMouseUpPen(e);
    }
    if (active.rectangleActive) {
      onMouseUpRectangle(e);
    }
    if (active.circleActive) {
      onMouseUpCircle(e);
    }
  };
  const mouseMoveHandler = (e) => {
    if (active.penActive) {
      onMouseMovePen(e);
    }
    if (active.rectangleActive) {
      onMouseMoveRectangle(e);
    }
    if (active.circleActive) {
      onMouseMoveCircle(e);
    }
  };

  return (
    <canvas
      width="1670px"
      height="950px"
      ref={canvasRef}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
      {...props}
    ></canvas>
  );
};

export default Canvas;
