import Image from "next/image";

const Avatar = () => {
  return (
  <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    src={'/386868690_915284380157452_3561294507179745302_n-removebg-preview_cleanup.png'}
    width={737}
    height={678}
    alt=''
    className="translate-z-0 w-full h-full"/>
  </div>
  );
};

export default Avatar;
