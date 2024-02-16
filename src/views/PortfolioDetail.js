import React from 'react'
import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
  let { projectId } = useParams();
  console.warn(projectId);

  const makePost = () => {

  }
  const data = [
    {
      name: "Marriage App",
      title: "Marriage App",
      desc: "Experience a revolutionary marriage app designed to strengthen your bond. From personalized relationship advice to intuitive event planning features, stay connected and grow together. Share memorable moments, set shared goals, and navigate challenges hand in hand. Rediscover love and build a lifelong partnership with ease and joy.",
      hero: "/img/app1-hero.png",
      thumb: "/img/app1-thumb.png",
      image1: "/img/app1-image1.png",
      image2: "/img/app1-image2.png",
      image3: "someImage.jpg",
      image4: "someImage.jpg",
      image5: "someImage.jpg",
    },
    {
      name: "Dating App",
      title: "Dating App",
      desc: "Welcome to our dating app, where connections flourish effortlessly. Discover nearby singles, engage in meaningful conversations, and forge genuine relationships. With advanced matching algorithms and user-friendly features, finding your perfect match has never been easier. Join our vibrant community and embark on a journey to find love and companionship today!",
      hero: "/img/app2-hero.png",
      thumb: "/img/app2-thumb.png",
      image1: "/img/app2-image1.png",
      image2: "/img/app2-image2.png",
      image3: "someImage.jpg",
      image4: "someImage.jpg",
      image5: "someImage.jpg",
    },
    // {
    //   name: "Project 3",
    //   title: "ng essentially unchanged. It was pop",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   hero: "image.jpg",
    //   image1: "someImage.jpg",
    //   image2: "someImage.jpg",
    //   image3: "someImage.jpg",
    //   image4: "someImage.jpg",
    //   image5: "someImage.jpg",
    // },
    // {
    //   name: "Project 4",
    //   title: "an unknown printer took a galley of",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   hero: "image.jpg",
    //   image1: "someImage.jpg",
    //   image2: "someImage.jpg",
    //   image3: "someImage.jpg",
    //   image4: "someImage.jpg",
    //   image5: "someImage.jpg",
    // },
    // {
    //   name: "Project 5",
    //   title: "Lorem Ipsum has been the industry's stan",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   hero: "image.jpg",
    //   image1: "someImage.jpg",
    //   image2: "someImage.jpg",
    //   image3: "someImage.jpg",
    //   image4: "someImage.jpg",
    //   image5: "someImage.jpg",
    // }
  ]

  return (
    <div>
      {projectId < data.length + 1 ? <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">

          <article
            className="mx-auto w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <nav
              className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mb-5"
              aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                    </svg>
                    <a href="/portfolio"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Portfolio</a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                    </svg>
                    <span
                      className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{projectId < data.length + 1 ? data[projectId - 1].name : "not found"}</span>
                  </div>
                </li>
              </ol>
            </nav>

            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img className="mr-4 w-16 h-16 rounded-full"
                    src="/img/hero-img.png" alt="Jese Leos" />
                  <div>
                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Karan Singh</a>
                    <p className="text-base text-gray-500 dark:text-gray-400">Designer & Front End Developer</p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time pubdate dateTime="2024-02-16" title="February 8th, 2022">Feb. 16, 2024</time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{projectId < data.length + 1 ? data[projectId - 1].title : "not found"}</h1>
            </header>
            <div className="text-gray-300">
              <p className="lead">{projectId < data.length + 1 ? data[projectId - 1].desc : "not found"}</p>
            </div>
            <br/>
            {
              projectId ? <img src={data[projectId - 1].hero} alt="" width="100%" /> : <img src="" alt="image not found" width="100%" />
            }
            <br />
            {
              projectId ? <img src={data[projectId - 1].image1} alt="" width="100%" /> : <img src="" alt="image not found" width="100%" />
            }
            <br />
            {
              projectId ? <img src={data[projectId - 1].image2} alt="" width="100%" /> : <img src="" alt="image not found" width="100%" />
            }
            {/* <br />
            {
              projectId ? <img src={data[projectId - 1].hero} alt="" width="100%" /> : <img src="" alt="image not found" width="100%" />
            }
            <br />
            {
              projectId ? <img src={data[projectId - 1].hero} alt="" width="100%" /> : <img src="" alt="image not found" width="100%" />
            } */}

          </article>
        </div>
      </main> : <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">

          <article
            className="mx-auto w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <nav
              className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mb-5"
              aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                    </svg>
                    <a href="/portfolio"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Portfolio</a>
                  </div>
                </li>

              </ol>
            </nav>

            <header className="mb-4 lg:mb-6 not-format">

              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Project Not Found</h1>
            </header>
          </article>
        </div>
      </main>}
    </div>
  )
}
export default PortfolioDetail
