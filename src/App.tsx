import { useState, useEffect, useRef } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './App.css';
import ecommerceImage from './assets/e-commerce.png';
import portfolioImage from './assets/portfolio-1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Component() {
  const [activeSection, setActiveSection] = useState(0);

  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const { ref: contentsRef, inView: contentsInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (aboutMeInView) setActiveSection(1);
    else if (projectsInView) setActiveSection(2);
    else if (contentsInView) setActiveSection(3);
    else setActiveSection(0);
  }, [aboutMeInView, projectsInView, contentsInView]);

  const scrollToSection = (sectionId: number) => {
    const section = document.querySelector(`#section-${sectionId}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    const formData = new FormData(formRef.current!);

    setIsSubmitting(true); 

    try {
      const response = await fetch("https://formspree.io/f/myzyypnk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        formRef.current?.reset(); 
      } else {
        toast.error("There was an error sending your message.");
      }
    } catch (error) {
      toast.error("There was an error sending your message.");
    } finally {
      setIsSubmitting(false); 
    }
  };


  return (
    <>
      <div>
        <div id="root"></div>
        <div>
          <div className="sidebar">
            <div className={`sidebar-item ${activeSection === 0 ? 'nav-active' : ''}`} onClick={() => scrollToSection(0)}>00</div>
            <div className={`sidebar-item ${activeSection === 1 ? 'nav-active' : ''}`} onClick={() => scrollToSection(1)}>01</div>
            <div className={`sidebar-item ${activeSection === 2 ? 'nav-active' : ''}`} onClick={() => scrollToSection(2)}>02</div>
            <div className={`sidebar-item ${activeSection === 3 ? 'nav-active' : ''}`} onClick={() => scrollToSection(3)}>03</div>
          </div>

          <div className="h-screen w-full overflow-auto snap-mandatory snap-y scroll-smooth no-scrollbar">
            <section id="section-0" className="section-container">
              <div className="relative-container">
                <div className="gradient_secondary_1 absolute-container"></div>
                <div className="gradient_primary_1 absolute-container"></div>
                <div className="gradient_secondary_2 absolute-container"></div>
                <div className="content-container">
                  <div className="border-gradient-container">
                    <img
                      className="background-image"
                      src="https://shahad-alahdal.vercel.app/assets/bg-grid.svg"
                      alt="Background"
                    />
                    <h1 className="heading">
                      Hello, I’m Ahmad.
                      <br className="hidden lg:block" /> I’m a developer who
                      <br className="hidden lg:block" /> develops{' '}
                      <span className="highlight">
                        <Typewriter
                          words={['Websites', 'Apps']}
                          loop={true}
                          cursor
                          cursorStyle="|"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        />
                      </span>
                      ;
                    </h1>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-1" className="h-screen lg:section p-6 lg:p-10 lg:pr-44 flex flex-col justify-center section_1" ref={aboutMeRef}>
              <span className="index-module_type__E-SaG text-3xl md:text-4xl lg:text-5xl text-primary text_1_section">
                {aboutMeInView && (
                  <Typewriter
                    words={['About Me:']}
                    cursor
                    cursorStyle="|"
                    typeSpeed={200}
                    delaySpeed={1000}
                  />
                )}
              </span>
              <div className="lg:h-24 h-14" />
              <p className="text-sm md:text-lg lg:text-xl md:fade-in-bottom lg:fade-in-bottom block">
                I am Ahmad Husirami, a dedicated software developer graduated in computer science from Lebanease international university in Saida. I am a
                person who is driven by passion and has a strong belief that
                the pursuit of knowledge is limitless;
                <br className="ab_sk" />{" "}
                I love working on a variety of technologies such as Mobile App
                Development, Web Development and Back-end Development, my goal
                is to build highly performant applications that solve
                real-world problems and provide users with an awesome
                experience;
              </p>

              <div className="lg:h-24 h-14 between_about_skill" />

              <h2 className="text-2xl md:text-3xl lg:text-3xl underline decoration-primary md:fade-in-bottom lg:fade-in-bottom block">
                Skills:
              </h2>

              <div className="lg:h-10 h-7" />

              <div className="flex flex-wrap items-center justify-center lg:gap-14 gap-6 md:fade-in-bottom lg:fade-in-bottom block">
                <div className="large-container"></div>

                <div className="flex-container">
                  <div className="icon-container">
                    <i className="devicon-dart-plain"></i>
                    <p className="icon-label">Dart</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-flutter-plain"></i>
                    <p className="icon-label">Flutter</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-javascript-plain"></i>
                    <p className="icon-label">Javascript</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-react-original"></i>
                    <p className="icon-label">React</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-laravel-original"></i>
                    <p className="icon-label">React</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-nodejs-plain-wordmark"></i>
                    <p className="icon-label">NodeJS</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-java-plain"></i>
                    <p className="icon-label">Java</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-express-original"></i>
                    <p className="icon-label">Express</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-html5-plain"></i>
                    <p className="icon-label">HTML</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-css3-plain"></i>
                    <p className="icon-label">CSS</p>
                  </div>
                  <div className="icon-container">
                    <i className="devicon-tailwindcss-plain"></i>
                    <p className="icon-label">Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </section>

            <div>
              <section id="section-2" className="h-screen lg:section p-6 lg:p-10 lg:pr-44 flex flex-col justify-center section_1" ref={projectsRef}>
                <span className="index-module_type__E-SaG text-3xl md:text-4xl lg:text-5xl text-primary">
                  {projectsInView && (
                    <Typewriter
                      words={['Projects:']}
                      cursor
                      cursorStyle="|"
                      typeSpeed={200}
                      delaySpeed={1000}
                    />
                  )}
                </span>
                <div className="h-9" />
                <div className="h-14" />
                <div className="swiper_container">
                  <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <a href="https://github.com/AhmadHusirami" target="_blank" className="slide-link">
                        <div className="slide-content">
                          <img
                            className="slide-image"
                            height={100}
                            width={100}
                            src={ecommerceImage}
                            alt="e-commerce"
                          />
                          <h1 className="slide-title">AH Shop</h1>
                          <p className="slide-description">
                            An Web Application made with Laravel Framework , it's a big e-commerce shop.
                          </p>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://github.com/AhmadHusirami" target="_blank" className="slide-link-next">
                        <div className="slide-content-next">
                          <img
                            className="slide-image-next"
                            height={100}
                            width={100}
                            src={portfolioImage}
                            alt="Portfolio"
                          />
                          <h1 className="slide-title-next">Portfolio</h1>
                          <p className="slide-description-next">
                            QuizU is an application made with Flutter, allowing people to join a quiz for 2 minutes and collect as many points as possible.
                          </p>
                        </div>
                      </a>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="slide-content">
                        <h1 className="slide-title">Coming Soon!</h1>
                        <p className="slide-description"></p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="slide-content">
                        <h1 className="slide-title">Coming Soon!</h1>
                        <p className="slide-description"></p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="slide-content">
                        <h1 className="slide-title">Coming Soon!</h1>
                        <p className="slide-description"></p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </section>
            </div>

            <div>
              <section id="section-3" className="h-screen lg:section p-6 lg:p-10 lg:pr-44 flex flex-col justify-center section_1" ref={contentsRef}>
                <span className="index-module_type__E-SaG text-3xl md:text-4xl lg:text-5xl text-primary">
                  {contentsInView && (
                    <Typewriter
                      words={['Contact Me:']}
                      cursor
                      cursorStyle="|"
                      typeSpeed={200}
                      delaySpeed={1000}
                    />
                  )}
                </span>
                <div className="spacing-small h-9"></div>
                <div className="spacing-medium lg:h-24 h-14"></div>
                <form ref={formRef} onSubmit={handleFormSubmit} className="form lg:w-1/2 md:w-3/4 w-full mx-auto">
                  <div className="form-container">
                    <div className="form-row lg:flex-row flex-col w-full">
                      <div className="form-group flex flex-col w-full mb-3 lg:mr-3">
                        <label htmlFor="name" className="label text-xl">Name</label>
                        <input type="text" id="name" name="from_name" className="input" required />
                      </div>
                      <div className="form-group flex flex-col mb-3 w-full">
                        <label htmlFor="email" className="label text-xl">Email</label>
                        <input type="email" id="email" name="from_email" className="input" required />
                      </div>
                    </div>
                    <div className="form-group flex flex-col w-full mb-3">
                      <label htmlFor="message" className="label text-xl">Message</label>
                      <textarea id="message" name="message" rows={4} className="input textarea" required></textarea>
                    </div>
                    <button className="button" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send"}
                    </button>
                  </div>
                </form>

                <div className="spacing-small h-7"></div>
                <div className="icon-container-last mx-auto flex gap-2 text-xl">
                  <a href="https://www.linkedin.com/in/ahmad-husirami-ab438b272/" target="_blank" className="icon-last">
                    <svg className="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"/>
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>
                  <a href="https://wa.me/+96171793152" target="_blank" className="icon-last">
                    <svg className="w-[47px] h-[47px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor"  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"/>
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                    </svg>
                  </a>

                  <a href="https://github.com/AhmadHusirami" target="_blank" className="icon-last">
                    <svg className="w-[47px] h-[47px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"/>
                    </svg>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

