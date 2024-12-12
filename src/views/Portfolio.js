import React from "react";
import { Link, useParams } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="bg-stone-950">
      <section className=" dark:bg-stone-950">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              2MP is in progress! See what's new
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Projects Showcase
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            "Explore a curated collection of our finest projects, showcasing
            creativity, innovation, and excellence in design and development."
          </p>
        </div>
      </section>
      <ProjectList />
    </div>
  );
};
export default Portfolio;

const ProjectList = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 1
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 1
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
            <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 2
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 2
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
            <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 3
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 3
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
            <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 4
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 4
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>

            <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 5
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 5
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>

            <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 6
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Project 6
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
