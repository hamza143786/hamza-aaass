import React from "react";
import aboutImg from "../assets/about.png";
import connect from "../assets/icons/final.png";
import clock from "../assets/icons/clock.png";
import final2 from "../assets/icons/final2.png";
import mailbox from "../assets/icons/mailbox.png";
//motion
import {motion} from "framer-motion";
//variants
import {fadeIn} from "../variants";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 " id="about">
        <div className="md:w-20/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-16 ">
          <motion.img
          variants={fadeIn("left",0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.7}}
          src={aboutImg} alt="" />
          <motion.div
           variants={fadeIn("right",0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount: 0.7}}
          className="md:w-3/5 mx-auto">
            <h2 className="text-5xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Pioneers of Innovative IT Solutions in Web Development, Design,
              and More...
            </h2>
            <p className="md:w-3/4 text-m text-neutralDGrey mb-8">
              At Ramzers, we are passionate about turning your ideas into
              digital realities. With a deep commitment to innovation,
              excellence, and client satisfaction, we are your dedicated partner
              for a wide range of IT solutions, including web development,
              design, and more. Our experienced team of experts leverages
              cutting-edge technologies and creative insights to craft solutions
              that not only meet your needs but exceed your expectations. We are
              here to transform your vision into a thriving digital presence,
              and we look forward to joining you on this exciting journey of
              growth and success.
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>
<hr />
      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
          variants={fadeIn("left",0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.7}}
          className="md:w-1/2 ">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="">
              We are here to transform your vision into a thriving digital
              presence
            </p>
          </motion.div>

        {/* stats */}
          <motion.div
          variants={fadeIn("right",0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.7}}
          className="md:w-1/2 mx-auto flex sm:flex-row sm:items-center justify-around gap-12 ">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img src={connect} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold ">Quality Work</h4>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={clock} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold ">On-Time Delivery</h4>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img src={final2} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold ">Improved Results</h4>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={mailbox} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold ">Constant Updates</h4>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
