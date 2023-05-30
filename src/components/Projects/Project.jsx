import React from "react";
import fiveStarMockup from "../../assets/fiveStarMockup.png";
import chatAppMockup from "../../assets/chatAppMockup.png";
import fiveStarAppProjectReport from "../../assets/project_report.pdf";
import movixApp from "../../assets/movixMochup.png";
import ecommerceMockup from "../../assets/ecommerceMockup.png";
import { BsDownload } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const Project = () => {
  return (
    <div
      id="projects"
      className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 pt-10 pl-10 pr-10"
    >
      <h1 className="font-cursive text-4xl border-gray-800 dark:border-gray-200 w-40 border-b-2">
        My <span className="text-blue-500">Projects</span>
      </h1>

      <p className="w-full my-10 text-xl dark:text-gray-100 text-gray-800">
        Here are my few projects.
      </p>

      <div className="w-full flex justify-around flex-wrap py-5">
        {/* Review App */}
        <div className="w-96 p-2 mx-2 my-4 rounded shadow-lg dark:shadow-md dark:shadow-gray-100 bg-gray-300 dark:bg-gray-700 text-center">
          <img src={fiveStarMockup} className="w-full" />
          <h2 className="text-lg font-bold underline my-1">Review App</h2>
          <p className="tracking-wide">
            A Movie and TV-Series review website where user can give ratings and
            review to the content. It also have an admin panel for admin to add,
            update or delete content. If you want to run this project then first
            click on backend starter and then click on live.
          </p>
          <div className="py-2 flex flex-wrap">
            <a
              href={fiveStarAppProjectReport}
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Project Report &nbsp;
              <BsDownload className="inline animate-bounce" />
            </a>

            <a
              href="https://github.com/ShivamYadav-Coding/five-start-movie-review-frontend"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Code Frontend &nbsp;
              <BiLinkExternal className="inline" />
            </a>

            <a
              href="https://github.com/ShivamYadav-Coding/five-start-movie-review-backend"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Code Backend &nbsp;
              <BiLinkExternal className="inline" />
            </a>

            <a
              href="https://five-star-review-backend.onrender.com/"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Backend Starter &nbsp;
              <BiLinkExternal className="inline" />
            </a>

            <a
              href="https://mrf-8qdb.onrender.com/"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Live &nbsp;
              <BiLinkExternal className="inline" />
            </a>
          </div>
        </div>

        {/* Chat App */}
        <div className="w-96 p-2 m-2 rounded shadow-lg dark:shadow-md dark:shadow-gray-100 bg-gray-300 dark:bg-gray-700 text-center">
          <img src={chatAppMockup} className="w-full" />
          <h2 className="text-lg font-bold underline my-1">Chat App</h2>
          <p className="tracking-wide">
            A web App to make rooms online and chat with friends. To try this
            project you have to click on Live button two times. This will open
            the project in two tabs, on first tab enter your name and room no.
            after this on second tab enter another name the same room no. as
            previous tab and try chating or you could simple run this app in two
            different devices.
          </p>
          <div className="py-2 flex flex-wrap">
            <a
              href="https://github.com/ShivamYadav-Coding/chat-app"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Code &nbsp;
              <BiLinkExternal className="inline" />
            </a>

            <a
              href="https://chatapp-w056.onrender.com/"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Live &nbsp;
              <BiLinkExternal className="inline" />
            </a>
          </div>
        </div>

        {/* Movix App */}
        <div className="w-96 p-2 m-2 rounded shadow-lg dark:shadow-md dark:shadow-gray-100 bg-gray-300 dark:bg-gray-700 text-center">
          <img src={movixApp} className="w-full" />
          <h2 className="text-lg font-bold underline my-1">Movix App</h2>
          <p className="tracking-wide">
            An app to discover new movies, tv series & web series. This app has
            a good User interface and design. It uses TMDB Api to fetch its
            data.
          </p>
          <div className="py-2 flex flex-wrap">
            <a
              href="https://github.com/ShivamYadav-Coding/MovixApp"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Code &nbsp;
              <BiLinkExternal className="inline" />
            </a>

            <a
              href="https://movix-app-tan.vercel.app/"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Live &nbsp;
              <BiLinkExternal className="inline" />
            </a>
          </div>
        </div>

        {/* Ecommerce App */}
        <div className="w-96 p-2 m-2 rounded shadow-lg dark:shadow-md dark:shadow-gray-100 bg-gray-300 dark:bg-gray-700 text-center">
          <img src={ecommerceMockup} className="w-full" />
          <h2 className="text-lg font-bold underline my-1">Ecommerce App</h2>
          <p className="tracking-wide">
            It is an Ecommerce App where you could select items and then place
            order for them. It's payment is handled through Stripe.
          </p>
          <div className="py-2 flex flex-wrap">
            <a
              href="https://github.com/ShivamYadav-Coding/crwn-store"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Code &nbsp;
              <BiLinkExternal className="inline" />
            </a>

            <a
              href="https://beautiful-sunburst-eb1238.netlify.app/"
              className="text-gray-100 m-2 hover:text-blue-500 dark:hover:text-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 bg-blue-500 p-2 rounded border-2 border-blue-600"
              target="_blank"
            >
              Live &nbsp;
              <BiLinkExternal className="inline" />
            </a>
          </div>
        </div>
      </div>

      <hr class="h-px mt-8 bg-gray-400 border-0 dark:bg-gray-600"></hr>
    </div>
  );
};

export default Project;
