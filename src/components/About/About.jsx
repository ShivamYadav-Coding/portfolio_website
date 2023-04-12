import React from "react";
import profilePic from "../../assets/profilePic.png";
import resume from "../../assets/resume.pdf";
import { BsDownload } from "react-icons/bs";
import MySkills from "./MySkills";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-10"
    >
      <h1 className="font-cursive text-4xl border-gray-800 dark:border-gray-200 w-36 border-b-2">
        About <span className="text-blue-500">Me</span>
      </h1>

      <div className="flex flex-wrap md:text-left text-center justify-center md:justify-between items-center">
        <div className="w-full my-10 text-xl md:w-1/2">
          <p>
            I am an aspiring Software Development Engineer. I love 💗 to code
            and passionate about UI/UX and Web Development 👨‍💻.
            <br />I am an enthusiastic and passionate person 😇 and whenever
            possible, I like to apply my passion in developing products.
            <br /> I am currently in my final year of B.Tech (Major Computer
            Science).
          </p>
          <br />
          <a
            href={resume}
            className="text-gray-100 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-100 bg-blue-500 p-2 rounded border-2 border-blue-600"
            target="_blank"
          >
            Dowload Resume &nbsp;
            <BsDownload className="inline animate-bounce" />
          </a>
        </div>
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-80 border-2 border-gray-600 dark:border-gray-300 rounded-full"
        />
      </div>
      <MySkills />
    </div>
  );
};

export default About;
