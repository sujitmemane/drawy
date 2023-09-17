import React from "react";
import {
  BiPencil,
  BiCircle,
  BiSolidPencil,
  BiSolidRectangle,
} from "react-icons/bi";
import { TbRectangle } from "react-icons/tb";
import { AiOutlineClear } from "react-icons/ai";
import { useAppContext } from "../context/AppContext";
import { BsCircleFill } from "react-icons/bs";

const MenuBar = () => {
  const { onClear, setActive, active } = useAppContext();

  const clearCanvasHandler = () => {
    onClear();
  };

  const penActiveHandler = () => {
    setActive(() => {
      const newActive = {
        penActive: true,
        circleActive: false,
        rectangleActive: false,
      };
      return newActive;
    });
  };
  const circleActiveHandler = () => {
    setActive(() => {
      const newActive = {
        penActive: false,
        circleActive: true,
        rectangleActive: false,
      };
      return newActive;
    });
  };
  const rectangleActiveHandler = () => {
    setActive(() => {
      const newActive = {
        penActive: false,
        circleActive: false,
        rectangleActive: true,
      };
      return newActive;
    });
  };

  return (
    <div className=" bg-[#f8f7ff] shadow-sm mt-2 flex px-8 py-1 justify-between   items-center">
      <div className="p-2 cursor-pointer">
        {active.penActive ? (
          <BiSolidPencil color="#333333" size={26} />
        ) : (
          <BiPencil color="#333333" size={26} onClick={penActiveHandler} />
        )}
      </div>
      <div className="p-2 cursor-pointer">
        {active.circleActive ? (
          <BsCircleFill color="#333333" size={20} />
        ) : (
          <BiCircle color="#333333" size={25} onClick={circleActiveHandler} />
        )}
      </div>
      <div className="p-2 cursor-pointer">
        {active.rectangleActive ? (
          <BiSolidRectangle color="#333333" size={25} />
        ) : (
          <TbRectangle
            color="#333333"
            size={25}
            onClick={rectangleActiveHandler}
          />
        )}
      </div>
      <div className="p-2 cursor-pointer" onClick={clearCanvasHandler}>
        <AiOutlineClear color="red" size={25} />
      </div>
    </div>
  );
};

export default MenuBar;
