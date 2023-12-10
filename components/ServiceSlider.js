import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FaServer, FaDatabase } from "react-icons/fa";
import { VscGitFetch } from "react-icons/vsc";
import { IoIosCloud } from "react-icons/io";
import { IoMdBuild } from "react-icons/io";

// icons
import {
  RxDesktop,
  RxArrowTopLeft,
} from "react-icons/rx";

import { FreeMode, Pagination } from 'swiper';


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Frontend Development',
    description: 'Creating websites that look and function well on a variety of devices and screen sizes',
  },
  {
    icon: <FaServer />,
    title: 'Backend Development',
    description: 'Developing and maintaining the server-side of web applications.',
  },
  {
    icon: <VscGitFetch />,
    title: 'API Development and Integration',
    description: 'Creating APIs which allow different software systems to communicate.',
  },
  {
    icon: <IoIosCloud />,
    title: 'Cloud Computing Services',
    description: 'Setting up and managing cloud-based environments for hosting applications.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Management',
    description: 'Designing, implementing, and maintaining databases and optimizing database performance',
  },
  {
    icon: <IoMdBuild />,
    title: 'Microservices Architecture',
    description: 'Designing and implementing applications as a collection of loosely coupled services.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640 : {
        slidesPerView : 3,
        spaceBetween: 15
      }
    }}
    freeMode={true}
    pagination= {{
      clickable: true
    }}
    modules={[Pagination, FreeMode]}
    className='h-[240px] sm:h-[340px]'>
      {
        serviceData.map((item, index) => {
          return <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex 
            sm:flex-col gap-x-6 sm:gap-x-0 group curson-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>
                {item.icon}
              </div>
              {/* title & desc*/}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopLeft className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
