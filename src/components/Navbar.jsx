import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { BsLightbulb, BsBasket2Fill, BsMoonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Navbar = () => {
    const[color, setColor]= useState(false)
    const dispatch = useDispatch();


    useEffect(()=>{
        const root = document.getElementById("root")
        if(color){
            root.style.background = "black";
            root.style.color = "gray";
        }else{
            root.style.background = "white";
            root.style.color = "black";


        }

    },[color])
  return (
    <div className="flex items-center justify-between px-3 h-28">
      <div>Logo</div>
      <div className="flex items-center space-x-4">
        <input
          className="border p-3 outline-none rounded-lg"
          type="text"
          placeholder="search"
        />
        <div onClick={()=>setColor(!color)}>
            {
                color ? <BsMoonFill size={25} className="cursor-pointer" /> : <BsLightbulb size={25} className="cursor-pointer" />
            }
        </div>
        <div onClick={()=> dispatch({type:'DRAWER', payload:true})} className="relative">
          <BsBasket2Fill size={25} className="cursor-pointer" />
          <span className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
