import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import { useRouter } from "next/router";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Product Tracker & Machine Learning" ,
          path: "/Advantages-Of-Web-Scraping-And-Its-Impact-On-The-Digital-World-Banner.png",
          link: "https://github.com/CezarVlaescu/Machine-Learning-Project---Python"
        },
        {
          title: "WebScraper MERN-App",
          path: "/webscraping-beginner-1.jpg",
          link: "https://github.com/CezarVlaescu/WebScraper--Fullstack-MERN-App"
        },
        {
          title: "BookiePal Blockchain Freelance",
          path: "/flora-teasereinstiegs-bild.jpg",
          link: ""
        },
        {
          title: "E-commerce Freelance Project",
          path: "/e-commerce-1.jpg",
          link: ""
        },
      ],
    },
    {
      images: [
        {
          title: "Password Generator",
          path: "/best-tools-generate-strong-secure-random-password.jpg",
          link: "https://github.com/CezarVlaescu/Pycharm---Python-Code/tree/main/Password%20Generator%20App"
        },
        {
          title: "My Blog in Django",
          path: "/read-my-blog-compressed.jpg",
          link: "https://github.com/CezarVlaescu/Pycharm---Python-Code/tree/main/Final%20Project%20-%20Django%20App"
        },
        {
          title: "Daily Planner",
          path: "/5-Reasons-Why-Your-Residential-Building-Needs-a-Professional-Gym-Banner-1200x620.jpg",
          link: "https://github.com/CezarVlaescu/DailyPlanner-Angular-.NET-SSMS-App"
        },
        {
          title: "Quiz App",
          path: "/images1.jpeg",
          link: "https://github.com/CezarVlaescu/Quiz-App-React-GraphQL-MongoDB"
        },
      ],
    },
    {
      images: [
        {
          title: "String Convertor",
          path: "/Python-Convert-String-to-int.png",
          link: "https://github.com/CezarVlaescu/Visual-Studio--C-sharp/blob/master/ProjectFortech/Program.cs"
        },
        {
          title: "Caesar's Cipher",
          path: "/ceaserCipher.png",
          link: "https://github.com/CezarVlaescu/Caesar-Cipher---Frontend-Project-and-Backend-Code"
        },
        {
          title: "New ideas coming",
          path: "/newproject.jpg",
          link: ""
        },
        {
          title: "New ideas coming",
          path: "/newproject.jpg",
          link: ""
        },
      ],
    },
  ],
};

const WorkSlider = () => {

  const router = useRouter(); 

  const handleClick = (url) => {
    router.push(url); 
  }

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex item-center justify-center group" key={index} onClick={() => handleClick(image.link) || '#'}>
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1*/}
                          <div className="delay-100">{image.title}</div>
                          {/*icon*/}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
