import React from "react";
import "../index.css";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";

// TestCompOne Component
export default function TestCompOne() {
  //change
  return (
    <div className="bg-blue-800 p-6 text-white w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center m-4">
        <h1 className="text-5xl font-bold m-2">Test Component One</h1>
        <p className="text-2xl m-2">
          This is a test component styled for TV app environments.
        </p>
        <div className="flex w-full justify-around items-center m-8 ">
          <img
            src={Image3}
            alt="Placeholder One"
            className="w-1/2 rounded-lg m-4"
          />
          <img
            src={Image4}
            alt="Placeholder Two"
            className="w-1/2 rounded-lg m-4"
          />
        </div>
      </div>
    </div>
  );
}
