import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import jorgeImg from "../assets/Images/FullSizeRender.jpg";


const WhoIAm = () => {

   const controls = useAnimation();
   const [ref, inView] = useInView({
     threshold: .7,
   });

   useEffect(() => {
     if (inView) {
       controls.start("visible");
     } else {
       controls.start("hidden");
     }
   }, [controls, inView]);

  const item = {
    visible: {
      scale: [0.9, 1],
      opacity: [0.2, 0.7],
      transition: { duration: 3 },
    },
    hidden: { opacity: 0.2, scale: 0.9 },
    transition: { duration: 1 },
  };

  return (
    <div className="whoiam" id="whoiam">
      <motion.img
        src={jorgeImg}
        alt="Jorge Silva"
        className="jorge-img"
        variants={item}
        ref={ref}
        animate={controls}
        initial="hidden"
      />
      <motion.p
        className="aboutme-whoiam"
        variants={item}
        ref={ref}
        animate={controls}
        initial="hidden"
      >
        I’m a Navy Veteran with a wide range of experience. I attended College
        after the Navy However I was forced into the workforce before being able
        to complete my studies. When covid Hit I took it as a second opportunity
        to enter the technology field, by attending Brainstation. While Enrolled
        Their I gained skills to develop full-stack applications while keeping
        user experience in mind. My current skillset & past experience makes me
        very adaptable. levering my skills to come up with unique solutions to
        the table Currently, I am a Tech Trainer for Everise, I got promoted
        after being with the company for only 7 months while continuing to
        improve my skills in pursuit of a developer role.
      </motion.p>
    </div>
  );
};

export default WhoIAm;
