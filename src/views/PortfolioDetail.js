import React from 'react'
import {useParams} from "react-router-dom";

const PortfolioDetail = () => {
  let { projectId } = useParams();
  console.warn(projectId);

  const makePost = () => {

  }
  const data = [
    {
      name : "Project 1",
      title : "This is some random title for the portfolio",
      desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      hero: "image.jpg",
      image1 : "someImage.jpg",
      image2 : "someImage.jpg",
      image3 : "someImage.jpg",
      image4 : "someImage.jpg",
      image5 : "someImage.jpg",
    },
    {
      name : "Project 2",
      title : "tially unchanged. It was popularised in th",
      desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      hero: "image.jpg",
      image1 : "someImage.jpg",
      image2 : "someImage.jpg",
      image3 : "someImage.jpg",
      image4 : "someImage.jpg",
      image5 : "someImage.jpg",
    },
    {
      name : "Project 3",
      title : "ng essentially unchanged. It was pop",
      desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      hero: "image.jpg",
      image1 : "someImage.jpg",
      image2 : "someImage.jpg",
      image3 : "someImage.jpg",
      image4 : "someImage.jpg",
      image5 : "someImage.jpg",
    },
    {
      name : "Project 4",
      title : "an unknown printer took a galley of",
      desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      hero: "image.jpg",
      image1 : "someImage.jpg",
      image2 : "someImage.jpg",
      image3 : "someImage.jpg",
      image4 : "someImage.jpg",
      image5 : "someImage.jpg",
    },
    {
      name : "Project 5",
      title : "Lorem Ipsum has been the industry's stan",
      desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      hero: "image.jpg",
      image1 : "someImage.jpg",
      image2 : "someImage.jpg",
      image3 : "someImage.jpg",
      image4 : "someImage.jpg",
      image5 : "someImage.jpg",
    }
  ]

  return (
      <div>
        {projectId < data.length + 1  ? <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
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
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                           fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 9 4-4-4-4"/>
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
                              d="m1 9 4-4-4-4"/>
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
                         src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                    <div>
                      <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                      <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO
                        Flowbite</p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        <time pubdate dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{projectId < data.length + 1 ? data[projectId - 1].title : "not found"}</h1>
              </header>
              <div className="text-gray-300">
                <p className="lead">{projectId < data.length + 1 ? data[projectId - 1].desc : "not found"}</p>
              </div>

              <figure><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt=""/>
                <figcaption>Digital art by Anonymous</figcaption>
              </figure>
              <h2>Getting started with Flowbite</h2>
              <p>First of all you need to understand how Flowbite works. This library is not another framework.
                Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
                documentation.</p>
              <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
                and datepickers which you can optionally include into your project via CDN or NPM.</p>
              <p>You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart
                guide</a> to explore the elements by including the CDN files into your project. But if you want
                to build a project with Flowbite I recommend you to follow the build tools steps so that you can
                purge and minify the generated CSS.</p>
              <p>You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
                you get started with your projects even faster. You can check out this <a
                    href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand
                the differences between the open-source and pro version of Flowbite.</p>
              <h2>When does design come in handy?</h2>
              <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
                will come in handy:</p>
              <ol>
                <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                  follow your intended user journey and buy something from the site you’ve designed? By running a
                  usability test, you’ll be able to see how users will interact with your design once it’s live;
                </li>
                <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                  properly? Pass your prototype to your data protection team and they can test it for real;
                </li>
                <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                  providing your client with a hands-on experience;
                </li>
                <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                  design elements, designers and developers can understand each other — and the project — better.
                </li>
              </ol>
              <h3>Laying the groundwork for best design</h3>
              <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                you can think things through before committing to an actual design project.</p>
              <p>Let's start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
              <h3>Understanding typography</h3>
              <h4>Type properties</h4>
              <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                letters. A typeface represents shared patterns across a collection of letters.</p>
              <h4>Baseline</h4>
              <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                letters. A typeface represents shared patterns across a collection of letters.</p>
              <h4>Measurement from the baseline</h4>
              <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                letters. A typeface represents shared patterns across a collection of letters.</p>
              <h3>Type classification</h3>
              <h4>Serif</h4>
              <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
                following:</p>
              <h4>Old-Style serifs</h4>
              <ul>
                <li>Low contrast between thick and thin strokes</li>
                <li>Diagonal stress in the strokes</li>
                <li>Slanted serifs on lower-case ascenders</li>
              </ul>
              <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png" alt=""/>
              <ol>
                <li>Low contrast between thick and thin strokes</li>
                <li>Diagonal stress in the strokes</li>
                <li>Slanted serifs on lower-case ascenders</li>
              </ol>
              <h3>Laying the best for successful prototyping</h3>
              <p>A serif is a small shape or projection that appears at the beginning:</p>
              <blockquote>
                <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from
                  login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
              </blockquote>
              <h4>Code example</h4>
              <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
                following:</p>

              <h4>Table example</h4>
              <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
              </p>
              <table>
                <thead>
                <tr>
                  <th>Country</th>
                  <th>Date &amp; Time</th>
                  <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>United States</td>
                  <td>April 21, 2021</td>
                  <td><strong>$2,300</strong></td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td>May 31, 2021</td>
                  <td><strong>$300</strong></td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>June 3, 2021</td>
                  <td><strong>$2,500</strong></td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>June 23, 2021</td>
                  <td><strong>$3,543</strong></td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>July 6, 2021</td>
                  <td><strong>$99</strong></td>
                </tr>
                <tr>
                  <td>France</td>
                  <td>August 23, 2021</td>
                  <td><strong>$2,540</strong></td>
                </tr>
                </tbody>
              </table>
              <h3>Best practices for setting up your prototype</h3>
              <p><strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to
                the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity
                prototype — like a wireframe with placeholder images and some basic text — would be more than
                enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with
                on-brand colors, fonts and imagery — could help get more pointed results.</p>
              <p><strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user
                would when interacting with your product. While you can fine-tune this during beta testing,
                considering your user’s needs and habits early on will save you time by setting you on the right
                path.</p>
              <p><strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
                user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will
                be important to your user, like a Buy now button or an image gallery, and list each element by order
                of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart
                of your design.</p>
              <p>And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
              </p>
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
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                           fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 9 4-4-4-4"/>
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
        </main> }
      </div>
  )
}
export default PortfolioDetail
