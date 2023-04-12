import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-10">
      <h1 className="font-cursive text-4xl border-gray-800 dark:border-gray-200 w-48 border-b-2">
        Connect <span className="text-blue-500">to me</span>
      </h1>

      <div className="flex justify-center flex-wrap">
        <a
          href="https://www.linkedin.com/in/shivam-yadav-89ab6519a/"
          target="_blank"
          className="hover:shadow-lg dark:hover:shadow-gray-200 ease-in duration-200 hover:-top-2 relative flex flex-col items-center justify-center rounded-full h-28 w-28 m-4"
        >
          <div className="h-10 w-10 flex justify-center items-center border border-3 border-gray-600 rounded-full">
            <BsLinkedin />
          </div>
          Linkedin
        </a>

        <a
          href="https://www.instagram.com/shivam._.y/"
          target="_blank"
          className="hover:shadow-lg dark:hover:shadow-gray-200 ease-in duration-200 hover:-top-2 relative flex flex-col items-center justify-center rounded-full h-28 w-28 m-4"
        >
          <div className="h-10 w-10 flex justify-center items-center border border-3 border-gray-600 rounded-full">
            <BsInstagram />
          </div>
          Instagram
        </a>

        <a
          href="mailto:shivam.coding@gmail.com"
          className="hover:shadow-lg dark:hover:shadow-gray-200 ease-in duration-200 hover:-top-2 relative flex flex-col items-center justify-center rounded-full h-28 w-28 m-4"
        >
          <div className="h-10 w-10 flex justify-center items-center border border-3 border-gray-600 rounded-full">
            <AiOutlineMail />
          </div>
          Mail
        </a>
      </div>

      <div className="flex justify-center flex-wrap h-28">
        <TypeAnimation
          className="mt-8 font-cursive"
          sequence={[
            "Thanks for visiting ❤️", // Types 'One'
            1000, // Waits 1s
            "Feel free to drop a Message 😇", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            () => {
              console.log("Sequence completed"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "1.5rem",
            lineHeight: "2rem",
            display: "inline-block",
            fontWeight: "bold",
            color: "rgb(59, 130, 246)",
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
