import React from 'react';
import { Footer } from 'flowbite-react';
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from "../assets/finallogo.png";

const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8'>
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="text-[#263238]">RAMZERS</span>
            </a>
            <div className='text-neutralDGrey'>
              <p className='mb-1'>Copyright © 2023 Ramzers ltd.</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Services
                </Footer.Link>
                <Footer.Link href="#">
                  Industries
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.linkedin.com/company/ramzers/about/?viewAsMember=true">
                  Linkedin
                </Footer.Link>
                <Footer.Link href="https://twitter.com/ramzers_">
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-end">
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/company/ramzers/about/?viewAsMember=true"
              icon={BsLinkedin}
              target="_blank"              
              className="text-neutralDGrey hover:text-blue-700"
            />
            <Footer.Icon
              href="https://www.instagram.com/ramzers_/?next=%2F"
              icon={BsInstagram}
              target="_blank"
              className="text-neutralDGrey hover:text-pink-700"
            />
            <Footer.Icon
              href="https://twitter.com/ramzers_"
              icon={BsTwitter}
              target="_blank"
              className="text-neutralDGrey hover:text-blue-700"
            />
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=61552399045882"
              icon={BsFacebook}
              target="_blank"
              className="text-neutralDGrey hover:text-brandPrimary"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
