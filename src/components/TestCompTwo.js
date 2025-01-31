// TestCompTwo Component
import React from "react";
import "../index.css";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";

export default function TestCompTwo() {
  return (
    <div className="bg-blue-800 p-6 text-white w-screen h-screen flex justify-center items-center">
      <div className=" flex flex-1 flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">Test Component Two</h1>
        <p className="text-2xl">
          Another test component with bold styling for a TV app.
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center m-8 ">
        <img
          src={Image1}
          alt="Placeholder One"
          className="w-full rounded-lg px-12 m-4"
        />
        <img
          src={Image2}
          alt="Placeholder Two"
          className="w-full rounded-lg px-12 m-4"
        />
      </div>
    </div>
  );
}
