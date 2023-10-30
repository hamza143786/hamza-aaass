import React from "react";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner4.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28  md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 ">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Empowering Your Success Through <br />
                <span className="text-brandPrimary leading-snug">
                  Exceptional Services.
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Expand your horizons and grow your business with our tailored
                services that pave the way for sustainable success. Let's embark
                on a journey of growth together.
              </p>
              <a href="mailto:hamza.sknsits.it@gmail.com">
                <button className="btn-primary">Let's Connect</button>
              </a>
            </div>
          </div>

          {/* -------------------- */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner2} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 ">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Expand your horizons and grow <br />
                <span className="text-brandPrimary leading-snug">
                  your business.
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Expand your horizons and grow your business with our tailored
                services that pave the way for sustainable success. Let's embark
                on a journey of growth together.
              </p>
              <a href="mailto:hamza.sknsits.it@gmail.com">
                <button className="btn-primary">Explore Choices</button>
              </a>
            </div>
          </div>

          {/* =------------------------------------- */}
          <div className="my-28  md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner3} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 ">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Unleashing Your <br />
                <span className="text-brandPrimary leading-snug">
                  Business Potential.
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Expand your horizons and grow your business with our tailored
                services that pave the way for sustainable success. Let's embark
                on a journey of growth together.
              </p>
              <a href="mailto:hamza.sknsits.it@gmail.com">
                <button className="btn-primary">Let's Grow</button>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
