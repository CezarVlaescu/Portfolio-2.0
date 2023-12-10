// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAngular,
  FaSass,
  FaBootstrap,
  FaLinux,
  FaGitAlt,
  FaAws
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiCsharp,
  SiDotnet,
  SiTypescript,
  SiTailwindcss,
  SiJquery,
  SiDjango,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiMicrosoftsqlserver,
  SiGraphql,
  SiWebauthn,
  SiPostman,
  SiSelenium,
  SiMicrosoftazure

} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "hard skills",
    info: [
      {
        title: "Frontend Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiTypescript />,
          <FaSass />,
          <FaReact />,
          <SiNextdotjs />,
          <FaAngular />,
          <SiTailwindcss />,
          <SiJquery />,
          <FaBootstrap />
        ],
      },
      {
        title: "Backend Development",
        icons : [
          <SiCsharp />,
          <FaPython />,
          <FaJava />,
          <FaNodeJs />,
          <SiDotnet />,
          <SiDjango />,
          <SiSpringboot />
        ]
      },
      {
        title: "Database Development",
        icons: [
          <SiMysql />,
          <SiPostgresql />,
          <SiMongodb />,
          <SiFirebase />,
          <SiMicrosoftsqlserver />,
          <SiGraphql />
        ]
      },
      {
        title: "Misscellaneous Skills",
        icons: [
          <SiMicrosoftazure />,
          <FaAws />,
          <SiPostman />,
          <FaLinux />,
          <FaGitAlt />,
          <SiSelenium />,
          <SiWebauthn />
        ]
      }
    ],
  },
  {
    title: "soft skills",
    info: [
      {
        title: "Team worker",
        stage : "An ease in communication and collaboration"
      },
      {
        title: "Organized",
        stage: "A structured approach to tasks"
      },
      {
        title: "Efficient",
        stage: "Produce quality results within tight timeframes"
      },
      {
        title: "Learner",
        stage: "My curiosity fuels my desire to acquire new knowledge"
      },
      {
        title: "Problem-solver",
        stage: "Perspective that brings innovative solutions"
      },
      {
        title: "Motivated",
        stage: "Never give up mentality, pushes me through challenges"
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Fullstack Dev. Intern - Arobs Transilvania",
        stage: "Jul, 2023 - Sept, 2023",
      },
      {
        title: "Fullstack Developer Trainee - FORTECH ",
        stage: "Feb, 2023 - Apr, 2023",
      },
      {
        title: "Python Developer - Informal School of IT",
        stage: "Jun 2022 - Nov, 2022",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "FORTECH C#/.NET Pre-Employment Trainee - Certificate",
        stage: "2023",
      },
      {
        title: "Udemy Java Programming Masterclass - Certificate",
        stage: "2023",
      },
      {
        title: "Informal School of IT Cluj-Napoca - Tehnical Diploma",
        stage: "2022",
      },
      {
        title: "USAMV Cluj-Napoca, Engineering - Master & Degree",
        stage: "2016 - 2022",
      },
      {
        title: "CAB Gura Humorului, Math - Info, Intensive Info",
        stage: "2012 - 2016",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/**Avatar*/}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[200px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/**text*/}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
          A <span className="text-accent">journey</span> requires a strong will and deep passion.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Technology isn't just my passion—it's my life. I pride myself on being dynamic, disciplined, and adaptable.<br></br>My dedication to continuous learning and the projects I've undertaken have shaped the intellectual growth I strive for as a programmer.
          </motion.p>
          {/**counters*/}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/*experience*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/**clients*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Freelance Projects
                </div>
              </div>
              {/**projects*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/**info*/}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/*title*/}
                  <div className="font-light mb-2 md:mb-0"><span className="text-accent">{item.title}</span></div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/*icons*/}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
