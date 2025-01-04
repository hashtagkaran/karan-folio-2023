import React from "react";
import { Link, useParams } from "react-router-dom";
import MPStripe from "../components/2mpStripe";

const Portfolio = () => {
  return (
    <div className="bg-stone-950">
      <section className=" dark:bg-stone-950">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <MPStripe />
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
            <a
              href="/portfolio/2"
              className="group relative block h-64 sm:h-80 lg:h-96"
            >
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <img
                    src="/img/dating_app.png"
                    width="100%"
                    alt="dating app"
                  />
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Dating Application
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Dating Application
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    A dating application connects individuals seeking
                    relationships, facilitating matches based on preferences,
                    location, and interests for meaningful connections.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
            <a
              href="/portfolio/1"
              className="group relative block h-64 sm:h-80 lg:h-96"
            >
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <img
                    src="/img/marriage_app.png"
                    width="100%"
                    alt="marriage app"
                  />
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Marriage Application
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Marriage Application
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    A marriage application is a formal request submitted to
                    authorities seeking legal recognition and registration of a
                    marital union.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
            <a
              href="/portfolio/3"
              className="group relative block h-64 sm:h-80 lg:h-96"
            >
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <img src="/img/ai_app.png" width="100%" alt="dating app" />
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    AI Website
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    AI Website
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    AI-driven website project enhancing user experience through
                    personalized content, intelligent navigation, and automated
                    customer support for increased engagement.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
            <a
              href="/portfolio/4"
              className="group relative block h-64 sm:h-80 lg:h-96"
            >
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <img
                    src="/img/hiring_app.png"
                    width="100%"
                    alt="dating app"
                  />
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Hiring Portal
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Hiring Portal
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    A Hiring Portal is a web-based platform that connects job
                    seekers with employers, streamlining the recruitment process
                    through features like job postings, resume submissions, and
                    application tracking.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>

            <a
              href="/portfolio/5"
              className="group relative block h-64 sm:h-80 lg:h-96"
            >
              <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg"></span>
              <div className="relative flex h-full transform items-end border-2 border-white rounded-lg bg-black text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/*Image Or Logo Here*/}
                  <img src="/img/mind_app.png" width="100%" alt="dating app" />
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Mindfull App
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Mindfull App
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Mindfull App is a mindfulness application designed to help
                    users reduce stress, improve focus, and enhance overall
                    well-being.
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
                  <img
                    src="/img/message_app.png"
                    width="100%"
                    alt="dating app"
                  />
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Messaging App
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 ">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Messaging App
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">Coming soon</p>

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
