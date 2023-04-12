import React from "react";
import { TypeAnimation } from "react-type-animation";
import programmerImage from "../../assets/programmer.svg";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-gray-100 dark:bg-gray-800 text-4xl pt-24 flex flex-wrap items-center justify-center md:justify-between px-10 text-center md:text-left"
    >
      {/* intro */}
      <div className="h-60">
        <h1 className="text-gray-800 font-medium dark:text-gray-100">
          Hi There!{" "}
          <span className="animate-waving-hand absolute ml-1">👋</span>
        </h1>
        <h1 className="text-gray-800 my-4 font-semibold dark:text-gray-100">
          I'M <span className="text-blue-500">SHIVAM YADAV</span>
        </h1>
        <TypeAnimation
          className="mt-8"
          sequence={[
            "MERN Stack Developer", // Types 'One'
            1000, // Waits 1s
            "UI UX Designer", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "Music Lover", // Types 'Three' without deleting 'Two'
            () => {
              console.log("Sequence completed"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            display: "inline-block",
            fontWeight: "bold",
            color: "rgb(59, 130, 246)",
          }}
        />
      </div>
      {/* Image */}
      <img src={programmerImage} alt="Programmer image" className="w-96" />
    </div>
  );
};

export default Home;
