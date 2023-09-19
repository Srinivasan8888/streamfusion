import React from "react";

const Cards = () => {
  return (
    <div className="flex-grow ml-[100px] mr-[30px]">
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
            style={{ textDecoration: 'none' }}
          >
            
            <svg className="mr-3 w-12 h-12" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/></svg>
            
            <div className="text-left">
              <div className="mb-1 text-xs">Live Stream</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Go live from studio
              </div>
            </div>
          </a>

          <a
            href="#"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            style={{ textDecoration: 'none' }}
          >
           <svg className="mr-3 w-12 h-12" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
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
            style={{ textDecoration: 'none' }}
          >
            <svg  className="mr-3 w-12 h-12" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#FFFFFF"><g><path d="M21,3H3C1.9,3,1,3.9,1,5v3h2V5h18v14h-7v2h7c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M1,18v3h3C4,19.34,2.66,18,1,18z M1,14 v2c2.76,0,5,2.24,5,5h2C8,17.13,4.87,14,1,14z M1,10v2c4.97,0,9,4.03,9,9h2C12,14.92,7.07,10,1,10z M11,11.09v2L14.5,15l3.5-1.91 v-2L14.5,13L11,11.09z M14.5,6L9,9l5.5,3L20,9L14.5,6z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>
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
  );
};

export default Cards;


