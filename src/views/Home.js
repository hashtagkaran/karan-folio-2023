import React from 'react'

const Home = () => {
  return (
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl max-h-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">A Full Stack Front End Engineer</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From
                checkout to global sales tax compliance, companies around the world use Flowbite to simplify their
                payment stack.</p>
              <a href="#"
                 className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Know More
              </a>
              <a href="/karan_singh_resume_ux_ui.pdf" download
                 className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Download CV &nbsp;
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7L10 13L16 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
              <img src="/img/hero-img.png" alt="mockup"/>
            </div>
          </div>
        </section>
      {/*  Hero End*/}
      {/*About Start*/}
        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="">
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full inline-flex items-center justify-center">
                    <img src="/img/hero-img.png"/>
                  </div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-white text-lg">Karan Singh</h2>
                    <div class="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                    <p class="text-base text-gray-400">Full Stack Front End Developer</p>
                    <p className="text-base">Delhi, India</p>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-lg mb-4">  UI/UX Designer and Developer with 5+ years of experience creating user-friendly and high-performing web and mobile applications. Expertise in all phases of the design and development process, from user research and wireframing to prototyping and implementation. Proven track record of success in delivering projects on time and within budget, and collaborating with cross-functional teams to create innovative and impactful products.</p>
                  <a class="text-yellow-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/*About End*/}

      {/*  Portfolio Start*/}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Projects Showcase</h1>
                <div className="h-1 w-20 bg-yellow-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Explore our diverse portfolio of innovative projects, showcasing our expertise in design, development, and creativity. See our work come to life!</p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="/portfolio">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-300"
                       src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                       alt="Bonnie Avatar"/>
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="/portfolio">Bonnie Green</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical
                    strategy of the flowbite platform and brand.</p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="/portfolio">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-300"
                       src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                       alt="Jese Avatar"/>
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="/portfolio">Jese Leos</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">CTO</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical
                    strategy of the flowbite platform and brand.</p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="/portfolio">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-300"
                       src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                       alt="Michael Avatar"/>
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="/portfolio">Michael Gough</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Michael drives the technical
                    strategy of the flowbite platform and brand.</p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="/portfolio">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-300"
                       src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                       alt="Sofia Avatar"/>
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="/portfolio">Lana Byrd</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">Marketing & Sale</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Lana drives the technical
                    strategy of the flowbite platform and brand.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/*  Portfolio End*/}

        {/*  Services Start*/}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Services</h1>
                <div className="h-1 w-20 bg-yellow-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Discover our comprehensive range of top-notch services tailored to meet your needs, delivered with excellence and unmatched dedication.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-yellow-200 lg:h-12 lg:w-12 dark:bg-yellow-600">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Digital Marketing</h3>
                <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly
                  with all the organization and hit your marketing goals every month with our marketing plan.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-yellow-600">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Application Development</h3>
                <p className="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant
                  with our structured workflows and custom permissions made for you.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-yellow-600">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clip-rule="evenodd"></path>
                    <path
                        d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Business Development</h3>
                <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more.
                  Now power up with hundreds of new templates to help you get started.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-yellowDull">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="white"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Graphic Design</h3>
                <p className="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial
                  operations like month-end close and quarterly budgeting.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-yellow-600">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Application Design</h3>
                <p className="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both
                  marketing and product with real cross-company collaboration.</p>
              </div>
              <div>
                <div
                    className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-yellow-600">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.49 3.17C11.11 1.61 8.88999 1.61 8.50999 3.17C8.45326 3.40442 8.34198 3.62212 8.18522 3.80541C8.02845 3.9887 7.83062 4.13238 7.60784 4.22477C7.38505 4.31716 7.1436 4.35564 6.90313 4.33709C6.66266 4.31854 6.42997 4.24347 6.22399 4.118C4.85199 3.282 3.28199 4.852 4.11799 6.224C4.65799 7.11 4.17899 8.266 3.17099 8.511C1.60999 8.89 1.60999 11.111 3.17099 11.489C3.40547 11.5458 3.62322 11.6572 3.80651 11.8141C3.98979 11.971 4.13343 12.1689 4.22573 12.3918C4.31803 12.6147 4.35639 12.8563 4.33766 13.0968C4.31894 13.3373 4.24368 13.5701 4.11799 13.776C3.28199 15.148 4.85199 16.718 6.22399 15.882C6.42993 15.7563 6.66265 15.6811 6.90318 15.6623C7.14371 15.6436 7.38527 15.682 7.60817 15.7743C7.83108 15.8666 8.02904 16.0102 8.18592 16.1935C8.34281 16.3768 8.45419 16.5945 8.51099 16.829C8.88999 18.39 11.111 18.39 11.489 16.829C11.546 16.5946 11.6575 16.377 11.8144 16.1939C11.9713 16.0107 12.1692 15.8672 12.3921 15.7749C12.6149 15.6826 12.8564 15.6442 13.0969 15.6628C13.3373 15.6815 13.57 15.7565 13.776 15.882C15.148 16.718 16.718 15.148 15.882 13.776C15.7565 13.57 15.6815 13.3373 15.6628 13.0969C15.6442 12.8564 15.6826 12.6149 15.7749 12.3921C15.8672 12.1692 16.0107 11.9713 16.1939 11.8144C16.377 11.6575 16.5946 11.546 16.829 11.489C18.39 11.11 18.39 8.889 16.829 8.511C16.5945 8.45419 16.3768 8.34281 16.1935 8.18593C16.0102 8.02904 15.8666 7.83109 15.7743 7.60818C15.682 7.38527 15.6436 7.14372 15.6623 6.90318C15.681 6.66265 15.7563 6.42994 15.882 6.224C16.718 4.852 15.148 3.282 13.776 4.118C13.5701 4.24368 13.3373 4.31895 13.0968 4.33767C12.8563 4.35639 12.6147 4.31804 12.3918 4.22574C12.1689 4.13344 11.971 3.9898 11.8141 3.80651C11.6572 3.62323 11.5458 3.40548 11.489 3.171L11.49 3.17ZM9.99999 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 9.99999 7C9.20434 7 8.44128 7.31607 7.87867 7.87868C7.31606 8.44129 6.99999 9.20435 6.99999 10C6.99999 10.7956 7.31606 11.5587 7.87867 12.1213C8.44128 12.6839 9.20434 13 9.99999 13Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Content Creation</h3>
                <p className="text-gray-500 dark:text-gray-400">Keep your company’s lights on with customizable,
                  iterative, and structured workflows built for all efficient teams and individual.</p>
              </div>
            </div>
          </div>
        </section>
        {/*  Services End*/}
      {/*  Find me on Start */}
        <section className="text-gray-400 body-font bg-gray-900">
          <div className="max-w-screen-xl px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">You can find me on</h1>
                <div className="h-1 w-20 bg-yellow-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">In addition to exploring my website, you can also connect with me and access my creative works and free assets on various platforms. Follow me on social media, visit my Figma, and explore my contributions to enrich your creative journey</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6"
                       src="https://dummyimage.com/720x400" alt="content"/>
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Free Assets and work</h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">Figma</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6"
                       src="https://dummyimage.com/721x401" alt="content"/>
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Get some business</h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">Fiverr</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6"
                       src="https://dummyimage.com/722x402" alt="content"/>
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">My work</h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">Dribble</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6"
                       src="https://dummyimage.com/723x403" alt="content"/>
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Free Assets</h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">Envato</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/*  Find me on End */}

      {/* Content Start */}
        <section className="bg-white dark:bg-gray-900">
          <div
              className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't
                reinvent the wheel</h2>
              <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small
                enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small
                enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
              <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple
                and quick.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                   alt="office content 1"/>
                <img className="mt-4 w-full lg:mt-10 rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                     alt="office content 2"/>
            </div>
          </div>
        </section>
      {/* Content End */}
        {/* Content Start */}
        <section className="bg-white dark:bg-gray-900">
          <div
              className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                   alt="office content 1"/>
              <img className="mt-4 w-full lg:mt-10 rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                   alt="office content 2"/>
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't
                reinvent the wheel</h2>
              <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small
                enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small
                enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
              <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple
                and quick.</p>
            </div>

          </div>
        </section>
        {/* Content End */}

      </div>
  )
}
export default Home
