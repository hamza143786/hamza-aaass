import React from 'react'
//motion
import {motion} from "framer-motion";
//variants
import {fadeIn} from "../variants";

const Blog = () => {
    const blogs = [
        {id:1, title:"E-commerce: We empower online retailers to create seamless shopping experiences, boost conversions, and expand their digital footprint.", image:"/src/assets/blog1.png"},
        {id:2, title:"Healthcare: Our IT solutions enhance patient care, streamline operations, and improve healthcare accessibility through innovative digital tools.", image:"/src/assets/blog2.png"},
        {id:3, title:"Finance: We provide secure and scalable IT solutions to financial institutions, ensuring data protection and efficient financial services delivery.", image:"/src/assets/blog3.png"},
        {id:4, title:"Hospitality: We help hospitality businesses stand out in the digital landscape, offering solutions that optimize guest experiences and increase bookings.", image:"/src/assets/blog4.png"},
        {id:5, title:"Education: Our technology-driven solutions support educational institutions in delivering engaging, personalized learning experiences to students of all ages.", image:"/src/assets/blog5.png"},
        {id:6, title:"Entrepreneurs: We assist entrepreneurs in realizing their business dreams, providing them with the digital tools and strategies needed to launch, grow, and thrive in today's competitive landscape.", image:"/src/assets/blog6.png"},
    ]

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 ' id='blog'>
      <motion.div
      variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className='text-center md:w-3/2 mx-auto'>
      <h2 className="text-6xl text-neutralDGrey font-semibold mb-4">
            Industries We Serve 🌐
            </h2>
            <p className="md:w-3/4 text-sm text-brandPrimary mb-8 mx-auto">
            At Ramzers, we're all about digital transformation. Our team is dedicated to providing top-notch IT solutions, including web development, design, and more. We thrive on innovation and are committed to delivering exceptional results that drive your business forward. Let's bring your digital dreams to life and set you on a path to success.
            </p>
      </motion.div>

      {/* all blogs */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
            blogs.map(blog => 
            <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer industry-item rounded-sm shadow-md p-10 flex flex-col items-center transition-transform transform scale-100 hover:scale-105 duration-300 hover:shadow-xl'>
                <img src={blog.image} alt="" />
                <div className='text-center px-4 py-8 bg-neutralSilver shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                    <h3 className='mb-3 font-semibold text-brandPrimary'>{blog.title}</h3>
                </div>
            </div>
            )
        }
      </div>
    </div>
  )
}

export default Blog
