import React, { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useNavigate } from "react-router-dom";
import './css/cards.css';

const Cards = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [alignment, setAlignment] = React.useState('web');

  const navigate = useNavigate();
  function gotoview() {
    navigate("/view");
  }
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="flex-grow ml-[100px] mr-[30px]">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "profile"
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              id="profile-tab"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === "profile"}
              onClick={() => handleTabClick("profile")}
            >
              Upcoming
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "dashboard"
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              id="dashboard-tab"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected={activeTab === "dashboard"}
              onClick={() => handleTabClick("dashboard")}
            >
              Past
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "profile" ? "block" : "hidden"
          }`}
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className=" p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to StreamFusion!
            </h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Manage your stream and webinar at your fingertips.
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                style={{ textDecoration: "none" }}
                onClick={openModal}
              >
                <svg
                  className="mr-3 w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                </svg>

                <div className="text-left">
                  <div className="mb-1 text-xs">Live Stream</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    Go live from studio
                  </div>
                </div>
              </a>

              {isModalOpen && (
                <div className="backdrop">
        <div
          id="crypto-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
        >
          <div className="relative w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={closeModal}
                className=" absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              {/* Modal header */}
              <div className=" px-6 py-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                  Create live stream
                </h3>
              </div>
              {/* Modal body */}
              <div className="p-6">
                <p className="text-sm font-bold text-black-500 dark:text-gray-400">
                  Source
                </p>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value="web">Studio</ToggleButton>
                    <ToggleButton value="android">Pre-recorded video</ToggleButton>

                </ToggleButtonGroup>
                <p className="text-sm font-bold text-black-500 dark:text-gray-400 mt-3">
                  Select Destinations
                </p>

                <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={gotoview}>Create live stream</button>
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="w-3 h-3 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      ></path>
                    </svg>
                    Why do I need to connect with my wallet?
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}

              <a
                href="#"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                style={{ textDecoration: "none" }}
              >
                <svg
                  className="mr-3 w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs">Recording</div>
                  <div className="mt-1 font-sans text-sm font-semibold">
                    Record from the studio
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                style={{ textDecoration: "none" }}
              >
                <svg
                  className="mr-3 w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                >
                  <g>
                    <path d="M21,3H3C1.9,3,1,3.9,1,5v3h2V5h18v14h-7v2h7c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M1,18v3h3C4,19.34,2.66,18,1,18z M1,14 v2c2.76,0,5,2.24,5,5h2C8,17.13,4.87,14,1,14z M1,10v2c4.97,0,9,4.03,9,9h2C12,14.92,7.07,10,1,10z M11,11.09v2L14.5,15l3.5-1.91 v-2L14.5,13L11,11.09z M14.5,6L9,9l5.5,3L20,9L14.5,6z" />
                    <path d="M0,0h24v24H0V0z" fill="none" />
                  </g>
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs">On-Air webinar</div>
                  <div className="mt-1 font-sans text-sm font-semibold">
                    Host webinar on streamfusion
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "dashboard" ? "block" : "hidden"
          }`}
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong className="font-medium text-gray-800 dark:text-white">
              You haven't completed any streams or recordings yet.
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
