import React from 'react'

const Contact = () => {
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
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Let's have some business together</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We are here to answer your questions, provide support, and help you achieve your goals.
            </p>
            <div
                className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="#contact-form"
                 className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Let's Connect
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
        <main id="contact-form" className="flex overflow-hidden">
          <div className="flex-1 hidden lg:block">
            <img src="https://res.cloudinary.com/floatui/image/upload/v1670701901/scott-webb-NQymDb5XqC4-unsplash_ezrolm.jpg" className="w-full h-screen object-cover" />
          </div>
          <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
            <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
              <div>
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  Get in touch
                </h3>
                <p className="mt-3">
                  We’d love to hear from you! Please fill out the form bellow.
                </p>
              </div>
              <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5 mt-12 lg:pb-12"
              >
                <div>
                  <label className="font-medium">
                    Full name
                  </label>
                  <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Email
                  </label>
                  <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Phone number
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                        <option>IN</option>

                      </select>
                    </div>
                    <input
                        type="number"
                        placeholder="+91 (987) 6543-210"
                        required
                        className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                {/*<div>*/}
                {/*  <label className="font-medium">*/}
                {/*    Services*/}
                {/*  </label>*/}
                {/*  <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">*/}
                {/*    {*/}
                {/*      servicesItems.map((item, idx) => (*/}
                {/*          <li key={idx} className="flex gap-x-3 text-sm">*/}
                {/*            <div>*/}
                {/*              <input id={`service-${idx}`} type="checkbox" className="checkbox-item peer hidden" />*/}
                {/*              <label*/}
                {/*                  htmlFor={`service-${idx}`}*/}
                {/*                  className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"*/}
                {/*              >*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <label htmlFor={`service-${idx}`} className="cursor-pointer">{item}</label>*/}
                {/*          </li>*/}
                {/*      ))*/}
                {/*    }*/}
                {/*  </ul>*/}
                {/*</div>*/}
                <div>
                  <label className="font-medium">
                    Message
                  </label>
                  <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                </div>
                <button
                    className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main></>
  )
}
export default Contact
