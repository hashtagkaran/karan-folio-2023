import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSpotify } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineDiscord } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ConnectSectionNew />
    </>
  );
};
export default Home;

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="h-screen flex items-center bg-stone-950">
      <div className="max-w-screen-xl max-h-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1 className="mb-4 text-[40px] font-extrabold tracking-tight leading-none dark:text-white">
            Hey, I'm Karan Singh
            <br />
            <div className="mt-5 leading-none md:text-[60px] lg:text-[80px]">
              <span className="text-orange-500">UX Designer</span> with 5+ years
              of experience crafting intuitive web and mobile designs, from
              concept to launch.
            </div>
          </h1>
          <div>
            <Link className="relative inline-block mt-10" href="/" to="/">
              <div
                className={`absolute inset-0 border-2 border-dashed border-white rounded-md transition-opacity duration-200 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              <button
                className={`relative px-6 py-3 bg-primary text-primary-foreground flex  bg-white items-center  border-[1.5px] rounded-md transition-all duration-200 ease-in-out ${
                  isHovered ? "-translate-x-2 -translate-y-2" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => alert("check here")}
              >
                Know More
              </button>
            </Link>
            <a className="text-orange-500 inline-flex items-center p-3 ml-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          {/* <img src="/img/hero-img.png" alt="mockup"/> */}
          {/*<img src="/img/hero-img1.png" alt="mockup" />*/}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="dark:bg-white bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light dark:text-gray-500 sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold dark:text-gray-900 text-white">
            Here’s My Canvas 🎨 – A glimpse into the creative journey that
            shapes my design world!
          </h2>
          <p className="mb-4">
            UI/UX Designer and Developer with 5+ years of experience creating
            user-friendly and high-performing web and mobile applications.
            Expertise in all phases of the design and development process, from
            user research and wireframing to prototyping and implementation.
            Proven track record of success in delivering projects on time and
            within budget, and collaborating with cross-functional teams to
            create innovative and impactful products.
          </p>
          <a className="text-orange-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="">
          <img
            className="w-full rounded-lg"
            src="/img/hero-img.png"
            alt="office content 1"
            height={200}
            width={200}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section className="bg-white dark:bg-stone-950">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Projects Showcase
            </h1>
            <div className="h-1 w-20 bg-orange-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            Explore our diverse portfolio of innovative projects, showcasing our
            expertise in design, development, and creativity. See our work come
            to life!
          </p>
        </div>
        <ProjectList />
      </div>
    </section>
  );
};

const ProjectList = () => {
  return (
    <>
      <div className="container mx-auto">
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

const ConnectSection = () => {
  return (
    <section className="text-gray-400 body-font bg-stone-950">
      <div className="max-w-screen-xl px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              You can find me on
            </h1>
            <div className="h-1 w-20 bg-orange-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            In addition to exploring my website, you can also connect with me
            and access my creative works and free assets on various platforms.
            Follow me on social media, visit my Figma, and explore my
            contributions to enrich your creative journey
          </p>
        </div>
        <a></a>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <a href="https://figma.com/@hashtagkaran">
              <div className="bg-stone-950 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/img/figma.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  Free Assets and work
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Figma
                </h2>
                <p className="leading-relaxed text-base">
                  Figma creator: Assets, plugins, published for efficient
                  design.
                </p>
              </div>
            </a>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <a href="https://figma.com/@hashtagkaran">
              <div className="bg-stone-950 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/img/figma.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  Free Assets
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  <s>Envato</s> (Figma)
                </h2>
                <p className="leading-relaxed text-base">
                  Figma creator: Assets, plugins, published for efficient
                  design.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConnectSectionNew = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="h-screen flex items-center bg-stone-950">
      <div className="max-w-screen-xl max-h-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1 className="mb-4 text-[40px] font-extrabold tracking-tight leading-none dark:text-white">
            Feel Free to
            <br />
            <div className="text-[80px] mt-5">
              <span className="text-orange-500">Connect</span> with me on these
              platforms
            </div>
          </h1>
          <div className="mt-[100px] text-6xl">
            <ul className="mt-5 font-medium flex flex-col p-4 md:p-0  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  <AiOutlineSpotify color="white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <CiLinkedin color="white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FaFigma color="white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FiGithub color="white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <RiTwitterXFill color="white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <AiOutlineDiscord color="white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <AiOutlineDiscord color="white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <AiOutlineDiscord color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          {/* <img src="/img/hero-img.png" alt="mockup"/> */}
          {/*<img src="/img/hero-img1.png" alt="mockup" />*/}
        </div>
      </div>
    </section>
  );
};
