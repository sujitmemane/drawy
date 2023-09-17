import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [active, setActive] = useState({
    penActive: true,
    circleActive: false,
    rectangleActive: false,
  });

  const canvasRef = useRef(null);

  const clearCanvasHandler = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const values = {
    active: active,
    setActive: setActive,
    canvasRef: canvasRef,
    onClear: clearCanvasHandler,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
