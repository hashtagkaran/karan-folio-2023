import React from 'react'
import { Link, useParams } from "react-router-dom";

const Portfolio = () => {
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
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Projects Showcase</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">"Explore a curated collection of our finest projects, showcasing creativity, innovation, and excellence in design and development."</p>
        </div>
      </section>
      {/*  Portfolio Start*/}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="/portfolio/1">
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/img/app1-thumb.png"
                  alt="Bonnie Avatar" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="/portfolio/1">Marriage App</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">General</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"> Find love, chat, and meet nearby singles effortlessly.</p>

              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Link to="/portfolio/2">
                <a href="">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/img/app2-thumb.png"
                    alt="Bonnie Avatar" />
                </a>
              </Link>

              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="/portfolio/2">Dating App</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">General</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Find love, chat, and meet nearby singles effortlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Portfolio End*/}
    </>

  )
}
export default Portfolio
