import Link from "next/link";

import { SiLeetcode } from "react-icons/si";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://leetcode.com/vlaescu"}
        className="hover:text-accent transition-all duration-300"
      >
        <SiLeetcode />
      </Link>
      <Link
        href={"https://www.instagram.com/vlaescu_cezar/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/cezar.vlaescu.1/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://github.com/CezarVlaescu"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/cezar-vlaescu-076846214/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
