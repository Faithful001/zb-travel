import { useEffect } from "react";
import mountain from "../../public/assets/images/mountain.png";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const textControls = useAnimation();

  // Trigger animation on mount for text
  useEffect(() => {
    textControls.start({ y: [100, 0], scale: 1 });
  }, [textControls]);

  return (
    <>
      <div className='fixed inset-0 bg-[url("/assets/images/cloud.svg")] bg-cover bg-center h-[120vh]' />
      <div className="relative h-[120vh] flex items-center justify-center">
        <motion.h1
          className="text-transparent sm:leading-normal leading-20 bg-gradient-to-r from-brown-1 to-brown-2 bg-clip-text lg:text-[134.3px] md:text-[100px] sm:text-[80px] text-[70px] md:-mt-72 mt-20 text-center px-10 font-bold"
          initial={{ y: 100, scale: 0.75 }}
          animate={textControls}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Wild Escapes
        </motion.h1>
        <motion.img
          src={mountain}
          alt="mountain"
          className="absolute left-0 bottom-0 w-full"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
    </>
  );
};

export default Hero;
