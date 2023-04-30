import React from "react";
import Tilt from "react-tilt"; // for CARDS tilt functionality
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    // <Tilt className="xs:w-[250px] w-full">
    <div className="xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        {/* <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      > */}
        <div
          // options={{
          //   // These are the Tilt options that we're providing to this card
          //   max: 45,
          //   scale: 1,
          //   speed: 450,
          // }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px]
          flex justify-evenly items-center flex-col
          "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </div>
    </div>
    //   </motion.div>
    // </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex ">
        <div className=" lg:w-[60%] xl:w-[35%]">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFFgqD8-mAOHA/profile-displayphoto-shrink_800_800/0/1623392386556?e=2147483647&v=beta&t=7yf52KFqCP1yuiWMbv9GqC_hj1dM_xy1POhYYfP6T50"
          alt="Indu Chandana"
          className="hidden lg:flex w-28 h-28 object-contain rounded-full"
        />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js. I'm a quick
        learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); // using Higher order components in react.
