import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSpotify } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaFigma, FaBehance } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineDiscord } from "react-icons/ai";
import { TbBrandGumroad } from "react-icons/tb";

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
            <a
              className="text-orange-500 inline-flex items-center p-3 ml-5"
              href="#AboutSection"
            >
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
    <section className="bg-white dark:bg-stone-950" id="AboutSection">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light dark:text-gray-500 sm:text-lg text-gray-400">
          <h2
            data-aos="fade-right"
            className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Here’s My Canvas 🎨 – A glimpse into the creative journey that
            shapes my design world!
          </h2>
          <p className="mb-4" data-aos="fade-right">
            UI/UX Designer and Developer with 5+ years of experience creating
            user-friendly and high-performing web and mobile applications.
            Expertise in all phases of the design and development process, from
            user research and wireframing to prototyping and implementation.
            Proven track record of success in delivering projects on time and
            within budget, and collaborating with cross-functional teams to
            create innovative and impactful products.
          </p>
          <a
            className="text-orange-500 inline-flex items-center"
            data-aos="fade-right"
          >
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
            data-aos="fade-up"
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
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"
              data-aos="fade-right"
            >
              Projects Showcase
            </h1>
            <div
              className="h-1 w-20 bg-orange-500 rounded"
              data-aos="fade-right"
              data-aos-duration="200"
            ></div>
          </div>
          <p
            className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"
            data-aos="fade-right"
            data-aos-duration="500"
          >
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
                  href="https://creators.spotify.com/pod/show/2mp"
                  className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  <AiOutlineSpotify color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/hashtagkaran"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <CiLinkedin color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://figma.com/@hashtagkaran"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FaFigma color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hashtagkaran"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FiGithub color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/hashtagkaran"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <RiTwitterXFill color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://discordapp.com/users/471181383117570058"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <AiOutlineDiscord color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://hashtagkaran.gumroad.com"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <TbBrandGumroad color="white" />
                </a>
              </li>
              <li>
                <a
                  href="http://behance.net/hashtagkaran"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FaBehance color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="mt-5 text-[40px] font-extrabold tracking-tight leading-none dark:text-white">
          <a href="mailto:hi@hashtagkaran.com"> hi@hashtagkaran.com</a>
        </h1>
        <div className="lg:mt-0 lg:col-span-5 lg:flex hover:underline">
          {/* <img src="/img/hero-img.png" alt="mockup"/> */}
          {/*<img src="/img/hero-img1.png" alt="mockup" />*/}
        </div>
      </div>
    </section>
  );
};
