import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// testimonial data
const testimonialData = [
  {
    image: "/jan-philipp-esch.256x256-modified.png",
    name: "Jan-Philipp Esch",
    position: "Software Architect - SAP - 10 years experience",
    message:
      "I've encountered many emerging talents, but Cezar truly stands out. I've observed his journey and growth in the field with great interest. Cezar's passion for learning and the professionalism is evident. ",
  },
  {
    image: "/349473547_583253363934024_5336847008524097151_n-modified.png",
    name: "Tarnovan Claudiu",
    position: "Fullstack Engineer - ddroidd - 4 years experience",
    message:
      "As a friend, I've seen how Cezar tackles challenges with optimism and a readiness to embrace new technologies and methodologies. I have no doubt that Cezar will achieve great things.",
  },
  {
    image: "/1594296786621-modified.png",
    name: "Andrei Berintan",
    position: "QA Engineer - jpard Solutions - 3 years experience",
    message:
      "Cezar has a keen eye for detail and a deep understanding of what makes a product not just functional, but exceptional.His skills and work ethic undoubtedly make him a valuable asset to any team.",
  },
];

const TestimonialsSlider = () => {
  return (
    <Swiper
      navigation = {true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/**avatar, name, position*/}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/**avatar*/}
                  <div className="mb-2 mx-auto">
                    <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt="" />
                  </div>
                  {/*name*/}
                  <div className="text-lg">{person.name}</div>
                  {/*position*/}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              {/*quote & message*/}
              <div
                className="flex-1 flex flex-col justify-center before:w-[1px]
              xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
              >
                {/*quote*/}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/*message*/}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialsSlider;
