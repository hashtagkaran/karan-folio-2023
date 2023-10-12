import React from 'react'

const About = () => {
  return (
      <>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#"
               className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
               role="alert">
              <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span
                className="text-sm font-medium">2MP is in progress! See what's new</span>
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About ME</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Get to know the heart and soul behind our work. Learn about our passion, team, and the driving force behind our creativity</p>
            {/*<div*/}
            {/*    className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">*/}
            {/*  <a href="#"*/}
            {/*     className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">*/}
            {/*    Learn more*/}
            {/*    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
            {/*         xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path fill-rule="evenodd"*/}
            {/*            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"*/}
            {/*            clip-rule="evenodd"></path>*/}
            {/*    </svg>*/}
            {/*  </a>*/}
            {/*  <a href="#"*/}
            {/*     className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">*/}
            {/*    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
            {/*         xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path*/}
            {/*          d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>*/}
            {/*    </svg>*/}
            {/*    Watch video*/}
            {/*  </a>*/}
            {/*</div>*/}
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
              <span className="font-semibold text-gray-400 uppercase">Assets Available On</span>
              <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 ">
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 ">
                  <svg width="132" height="29" viewBox="0 0 132 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_556_12)">
                      <path d="M24 14.5C24 13.3065 24.4741 12.1619 25.318 11.318C26.1619 10.4741 27.3065 10 28.5 10C29.6935 10 30.8381 10.4741 31.682 11.318C32.5259 12.1619 33 13.3065 33 14.5C33 15.6935 32.5259 16.8381 31.682 17.682C30.8381 18.5259 29.6935 19 28.5 19C27.3065 19 26.1619 18.5259 25.318 17.682C24.4741 16.8381 24 15.6935 24 14.5V14.5Z" fill="#1ABCFE"/>
                      <path d="M15 23.5C15 22.3065 15.4741 21.1619 16.318 20.318C17.1619 19.4741 18.3065 19 19.5 19H24V23.5C24 24.6935 23.5259 25.8381 22.682 26.682C21.8381 27.5259 20.6935 28 19.5 28C18.3065 28 17.1619 27.5259 16.318 26.682C15.4741 25.8381 15 24.6935 15 23.5V23.5Z" fill="#0ACF83"/>
                      <path d="M24 1V10H28.5C29.6935 10 30.8381 9.52589 31.682 8.68198C32.5259 7.83807 33 6.69347 33 5.5C33 4.30653 32.5259 3.16193 31.682 2.31802C30.8381 1.47411 29.6935 1 28.5 1L24 1Z" fill="#FF7262"/>
                      <path d="M15 5.5C15 6.69347 15.4741 7.83807 16.318 8.68198C17.1619 9.52589 18.3065 10 19.5 10H24V1H19.5C18.3065 1 17.1619 1.47411 16.318 2.31802C15.4741 3.16193 15 4.30653 15 5.5V5.5Z" fill="#F24E1E"/>
                      <path d="M15 14.5C15 15.6935 15.4741 16.8381 16.318 17.682C17.1619 18.5259 18.3065 19 19.5 19H24V10H19.5C18.3065 10 17.1619 10.4741 16.318 11.318C15.4741 12.1619 15 13.3065 15 14.5V14.5Z" fill="#A259FF"/>
                    </g>
                    <g clip-path="url(#clip1_556_12)">
                      <path d="M38.5627 1V21.9354L41.3764 21.9458V11.9765H48.1401V9.33885H41.3656V3.62731H50.1855V1H38.5627ZM55.2285 5.25769C55.7164 5.25769 56.1844 5.0717 56.5294 4.74062C56.8744 4.40955 57.0682 3.96052 57.0682 3.49231C57.0682 3.0241 56.8744 2.57507 56.5294 2.24399C56.1844 1.91292 55.7164 1.72692 55.2285 1.72692C54.7406 1.72692 54.2726 1.91292 53.9276 2.24399C53.5826 2.57507 53.3888 3.0241 53.3888 3.49231C53.3888 3.96052 53.5826 4.40955 53.9276 4.74062C54.2726 5.0717 54.7406 5.25769 55.2285 5.25769V5.25769ZM53.8108 7.885V21.9458H56.6245V7.885H53.8108V7.885Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M67.0243 7.47998C63.3016 7.47998 60.7043 10.5019 60.7043 14.095C60.7043 17.6881 63.3016 20.71 67.0243 20.71C68.7342 20.71 70.1411 20.0869 71.1691 19.0484V20.9177C71.1763 21.4762 71.068 22.0305 70.8505 22.5486C70.6331 23.0668 70.3107 23.5384 69.9022 23.9362C69.4936 24.3341 69.0069 24.6503 68.4702 24.8665C67.9336 25.0828 67.3575 25.1948 66.7754 25.1961C65.8772 25.1961 64.9898 24.8638 64.2864 24.3861L62.8796 26.7227C63.9674 27.3974 65.2249 27.7779 66.5193 27.8241C67.8137 27.8702 69.0971 27.5802 70.2341 26.9847C71.3711 26.3892 72.3195 25.5103 72.9793 24.4406C73.6391 23.371 73.9858 22.1503 73.9828 20.9073V7.89537H71.1691V9.1519C70.1411 8.11344 68.7342 7.49037 67.0243 7.49037V7.47998ZM63.5072 14.095C63.5072 11.8623 65.282 10.1073 67.3382 10.1073C69.3943 10.1073 71.1583 11.8727 71.1583 14.095C71.1583 16.3277 69.3835 18.0723 67.3382 18.0723C65.282 18.0723 63.5072 16.3277 63.5072 14.095V14.095Z" fill="white"/>
                      <path d="M84.0905 10.1074C83.2858 10.121 82.519 10.4381 81.956 10.99C81.393 11.5419 81.079 12.2843 81.082 13.0566V21.9458H78.2683V7.88506H81.082V9.17276C81.503 8.63737 82.0498 8.20499 82.6779 7.91084C83.306 7.61668 83.9977 7.46908 84.6965 7.48006C86.6661 7.48006 88.1812 8.41468 89.0469 9.84776C89.5299 9.12934 90.191 8.53704 90.971 8.12384C91.7509 7.71065 92.6255 7.48946 93.5164 7.48006C96.7089 7.48006 98.7109 9.9516 98.7109 13.0151V21.9458H95.9189V13.0462C95.9218 12.2739 95.6079 11.5315 95.0449 10.9796C94.4819 10.4277 93.7151 10.1106 92.9104 10.097C92.1057 10.1106 91.3389 10.4277 90.7759 10.9796C90.2129 11.5315 89.8989 12.2739 89.9019 13.0462V21.9354H87.0882V13.0462C87.0912 12.2757 86.7787 11.5348 86.218 10.9832C85.6573 10.4316 84.8933 10.1133 84.0905 10.097V10.1074Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M113.678 9.48438C113.039 8.84506 112.271 8.33756 111.42 7.99295C110.57 7.64833 109.655 7.47384 108.732 7.48015C104.555 7.48015 101.59 10.8655 101.59 14.9155C101.59 18.9655 104.555 22.3509 108.732 22.3509C109.655 22.3554 110.569 22.1801 111.419 21.8356C112.269 21.4911 113.038 20.9845 113.678 20.3467V21.9459H116.481V7.88515H113.667V9.48438H113.678ZM104.392 14.9155C104.392 12.2363 106.535 10.1075 109.035 10.1075C111.524 10.1075 113.678 12.2363 113.678 14.9155C113.678 17.5948 111.535 19.7132 109.035 19.7132C106.546 19.7132 104.392 17.5948 104.392 14.9155V14.9155Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_556_12">
                        <rect width="18" height="27" fill="white" transform="translate(15 1)"/>
                      </clipPath>
                      <clipPath id="clip1_556_12">
                        <rect width="79" height="27" fill="white" transform="translate(38 1)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Who I am */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16 ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Things I am working on...</h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where
                technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly
                  with all the organization and hit your marketing goals every month with our marketing plan.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Legal</h3>
                <p className="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant
                  with our structured workflows and custom permissions made for you.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clip-rule="evenodd"></path>
                    <path
                        d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Business Automation</h3>
                <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more.
                  Now power up with hundreds of new templates to help you get started.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
                <p className="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial
                  operations like month-end close and quarterly budgeting.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3>
                <p className="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both
                  marketing and product with real cross-company collaboration.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Operations</h3>
                <p className="text-gray-500 dark:text-gray-400">Keep your company’s lights on with customizable,
                  iterative, and structured workflows built for all efficient teams and individual.</p>
              </div>
            </div>
          </div>
        </section>
        {/*  Education and Work*/}
        {/*<section className="text-gray-400 bg-gray-900 body-font">*/}
        {/*  <div className="container px-5 py-24 mx-auto flex flex-wrap ">*/}
        {/*    <div className="flex flex-wrap mx-auto items-stretch max-w-screen-xl flex justify-center g-yellow-500">*/}
        {/*      <div className="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">*/}
        {/*        <h3 className="text-xl mb-10 font-bold tracking-tight text-gray-900 dark:text-white">*/}
        {/*          <a href="#">Education</a>*/}
        {/*        </h3>*/}
        {/*        <div className="flex relative pb-12">*/}
        {/*          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">*/}
        {/*            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 1</h2>*/}
        {/*            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk*/}
        {/*              bespoke try-hard cliche palo santo offal.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="flex relative pb-12">*/}
        {/*          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">*/}
        {/*            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 2</h2>*/}
        {/*            <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken*/}
        {/*              slow-carb health goth, vape typewriter.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="flex relative pb-12">*/}
        {/*          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">*/}
        {/*            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <circle cx="12" cy="5" r="3"></circle>*/}
        {/*              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 3</h2>*/}
        {/*            <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1*/}
        {/*              master cleanse blog taiyaki.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="flex relative pb-12">*/}
        {/*          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">*/}
        {/*            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>*/}
        {/*              <circle cx="12" cy="7" r="4"></circle>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 4</h2>*/}
        {/*            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk*/}
        {/*              bespoke try-hard cliche palo santo offal.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="flex relative">*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>*/}
        {/*              <path d="M22 4L12 14.01l-3-3"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">FINISH</h2>*/}
        {/*            <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever*/}
        {/*              cold-pressed retro.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">*/}
        {/*        <h3 className="text-xl mb-10 font-bold tracking-tight text-gray-900 dark:text-white">*/}
        {/*          <a href="#">Work and Career</a>*/}
        {/*        </h3>*/}
        {/*        <div className="flex relative pb-12">*/}
        {/*          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">*/}
        {/*            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 1</h2>*/}
        {/*            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk*/}
        {/*              bespoke try-hard cliche palo santo offal.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="flex relative pb-12">*/}
        {/*          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">*/}
        {/*            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 2</h2>*/}
        {/*            <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken*/}
        {/*              slow-carb health goth, vape typewriter.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="flex relative pb-12">*/}
        {/*          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">*/}
        {/*            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <circle cx="12" cy="5" r="3"></circle>*/}
        {/*              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 3</h2>*/}
        {/*            <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1*/}
        {/*              master cleanse blog taiyaki.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="flex relative pb-12">*/}
        {/*          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">*/}
        {/*            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>*/}
        {/*              <circle cx="12" cy="7" r="4"></circle>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 4</h2>*/}
        {/*            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk*/}
        {/*              bespoke try-hard cliche palo santo offal.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="flex relative">*/}
        {/*          <div*/}
        {/*              className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">*/}
        {/*            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
        {/*                 stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">*/}
        {/*              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>*/}
        {/*              <path d="M22 4L12 14.01l-3-3"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <div className="flex-grow pl-4">*/}
        {/*            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">FINISH</h2>*/}
        {/*            <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever*/}
        {/*              cold-pressed retro.</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </>
  )
}
export default About
