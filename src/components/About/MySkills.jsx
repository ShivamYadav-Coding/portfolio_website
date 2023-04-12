import React from "react";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { BsGit, BsGithub } from "react-icons/bs";

const MySkills = () => {
  return (
    <div className="w-full">
      <h2 className="font-cursive text-3xl my-10">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="flex flex-wrap w-full justify-between">
        <div className="text text-center m-5">
          <div className="w-20 h-20 rounded-full border-gray-800 dark:border-gray-100 border-2 flex text-5xl mb-2 items-center justify-center">
            <SiMongodb />
          </div>
          Mongodb
        </div>
        <div className="text text-center m-5">
          <div className="w-20 h-20 rounded-full border-gray-800 dark:border-gray-100 border-2 flex text-5xl mb-2 items-center justify-center">
            <IoLogoReact />
          </div>
          ReactJS
        </div>
        <div className="text text-center m-5">
          <div className="w-20 h-20 rounded-full border-gray-800 dark:border-gray-100 border-2 flex text-5xl mb-2 items-center justify-center">
            <IoLogoNodejs />
          </div>
          Node.js
        </div>
        <div className="text text-center m-5">
          <div className="w-20 h-20 rounded-full border-gray-800 dark:border-gray-100 border-2 flex text-5xl mb-2 items-center justify-center">
            <SiJavascript />
          </div>
          JavaScript
        </div>
        <div className="text text-center m-5">
          <div className="w-20 h-20 rounded-full border-gray-800 dark:border-gray-100 border-2 flex text-5xl mb-2 items-center justify-center">
            <TbBrandCpp />
          </div>
          C++
        </div>
        <div className="text text-center m-5">
          <div className="w-20 h-20 rounded-full border-gray-800 dark:border-gray-100 border-2 flex text-5xl mb-2 items-center justify-center">
            <FaJava />
          </div>
          Java
        </div>
        <div className="text text-center m-5">
          <div className="w-20 h-20 rounded-full border-gray-800 dark:border-gray-100 border-2 flex text-5xl mb-2 items-center justify-center">
            <BsGit />
          </div>
          Git
        </div>
        <div className="text text-center m-5">
          <div className="w-20 h-20 rounded-full border-gray-800 dark:border-gray-100 border-2 flex text-5xl mb-2 items-center justify-center">
            <BsGithub />
          </div>
          Github
        </div>
      </div>
    </div>
  );
};

export default MySkills;
