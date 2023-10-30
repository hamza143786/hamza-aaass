import React from "react";
//motion
import {motion} from "framer-motion";
//variants
import {fadeIn} from "../variants";

const Services = () => {
    const services =  [
        {id: 1, title: "Website Development", description: "Elevate Your Brand Online with Our Web Wizardry. We create, code, and craft captivating websites that leave a lasting impression.", image: "/src/assets/icons/webicon.png"},
        {id: 2, title: "SEO", description: "Boost Your Visibility, Dominate Search Results. Our SEO magic turns clicks into customers, and dreams into reality.", image: "/src/assets/icons/seoicon.png"},
        {id: 4, title: "Digital Marketing", description: "Supercharge Your Online Presence, Rule the Digital Realm. Our digital marketing strategies are your secret weapon for standing out in the digital noise.", image: "/src/assets/icons/dmicon.png"},
    ]

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">

      {/* services card */}
      <motion.div
      variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      
      className="text-center my-8">
        <h2 className="text-6xl text-neutralDGrey font-semibold mb-2">
          Our Services 
        </h2>
        <h2 className="text-xl text-brandPrimary font-semibold mb-2">
          We understand that one size doesn't fit all. Our services are
          customized to meet your unique needs and goals.</h2>
          <p className="text-neutralDGrey">Who is Ramzers suitable for?</p>
      </motion.div>

      {/* cards */}
        <div
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
            {
                services.map(service => <div
                key={service.id} className="px-4 py-8 text-center md:[w-300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                    <div>
                        <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" className="ml-5" /></div>
                        <h4 className="text-4xl text-neutralDGrey font-bold mb-2 px-2">{service.title}</h4>
                        <p className="text-m text-brandPrimary">{service.description}</p>
                    </div>
                </div>)
            }
        </div>
    </div>
  );
};

export default Services;
