import React from "react";
import ContainerComponent from "../../../components/ContainerComponent";
import LandingSection from "../components/LandingSection";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import getInTouchImg from "../../../assets/contact-us/getInTouch.png";

import hero from "../../../assets/contact-us/heroSection.png";
import PrimaryBtn from "../components/PrimaryBtn";
import { FiSend } from "react-icons/fi";

import FBicon from "../components/FBicon";
import YTicon from "../components/YTicon";
import TwitterIcon from "../components/TwitterIcon";
import Linkedinicon from "../components/Linkedinicon";
import IGicon from "../components/IGicon";
import { easeInOut, easeOut, motion } from "framer-motion";
const ContactUsPage = () => {
  const cube = {
    width: "100%",
    height: "100%",
    perspective: "550px",
    perspectiveOrigin: "center",
    transformStyle: "preserve-3d",
    transformOrigin: "center",
    position: "relative",
  };

  const face = {
    backfaceVisibility: "hidden",
    display: "block",
    position: "absolute",
    width: "16px",
    height: "16px",
    border: "none",

    fontFamily: "sans-serif",
    fontSize: "60px",
    color: "white",
    textAlign: "center",
  };
  const front = {
    background: "rgb(0 0 0 / 30%)",
    transform: "translateZ(50px)",
  };
  const back = {
    background: "rgb(0 255 0 / 100%)",
    color: "black",
    transform: "rotateY(180deg) translateZ(-50px)",
  };
  const top = {
    background: "rgb(196 196 0 / 70%)",
    transform: "rotateX(90deg) translateZ(50px)",
  };
  const bottom = {
    background: "rgb(196 0 196 / 70%)",
    transform: "rotateX(-90deg) translateZ(50px)",
  };

  return (
    <section className=" lg:space-y-32  sm:mb-20  mb-10 space-y-10 lg:mb-32">
      <LandingSection name="Contact us" imgPath={hero} />

      <ContainerComponent className=" mx-auto lg:space-y-32 sm:space-y-20 space-y-10 ">
        <div className="grid grid-cols-4  lg:grid-cols-12 sm:grid-cols-8 md:grid-cols-8 justify-center  gap-x-5  gap-y-10">
          {/* <motion.div
            style={{
              width: "100%",
              height: "auto",
              transformStyle: "preserve-3d",
              transform: "rotate3d(0, 0, 0, 0deg)",
            }}
            initial={{ rotateX: 180, scale: 0.5 }}
            whileInView={{
              rotateX: 0,
              scale: 1,
              transition: { duration: 0.4 },
            }}
            className="    "
          >
            <h1
              style={{
                ...commonCss,
                background: "rgb(90 90 90 / 70%)",
                transform: "translateZ(50px)",
              }}
              className=""
            >
              We’re here to Help You
            </h1>
            <h1
              style={{
                background: "rgb(0 210 0 / 70%)",
                transform: "translateZ(50px) rotateY(180deg)",
              }}
            >
              We’re here to Help You
            </h1>
            <h1
              style={{
                background: "rgb(210 210 0 / 70%)",
                transform: "translateZ(50px)  rotateX(90deg)",
              }}
            >
              We’re here to Help You
            </h1>
            <h1
              style={{
                background: "rgb(210 0 210 / 70%)",
                transform: "translateZ(50px) rotateX(-90deg)",
              }}
            >
              We’re here to Help You
            </h1>
          </motion.div> */}
          {/* <motion.div  style={{...cube ,  }} >
            <h1 style={ {...face , ...front} } >1</h1>
            <h1 style={{ ...face , ...back}} >2</h1>
            <h1 style={{ ...face , ...top}} >3</h1>
            <h1 style={{ ...face , ...bottom}} >4</h1>
          </motion.div> */}
          <div
            className="hidden lg:block  col-span-full"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              whileInView={{
                rotateX: 180,
                transition: {
                  type: "spring",
                  stiffness: 100, // Controls the "strength" of the spring
                  damping: 9,
                  duration: 0.9,
                  ease: "easeIn",
                },
              }}
              initial={{ rotateX: 0 }}
              style={{ transformStyle: "preserve-3d" }}
              className=" relative h-12  w-full  "
            >
              <h1
                style={{
                  backfaceVisibility: "hidden",
                  transform: "translateZ(-24px) rotateX(180deg)",
                }}
                className=" font-semibold   sm:text-3xl lg:text-h1 md:text-4xl text-heading text-2xl col-span-full text-center absolute w-full h-full flex justify-center items-center bg-white"
              >
                We’re here to Help You
              </h1>
              <h1
                style={{
                  backfaceVisibility: "hidden",
                  transformOrigin: "top",
                  transform: " translateZ(-24px) rotateX(90deg) ",
                }}
                className=" font-semibold   sm:text-3xl lg:text-h1 md:text-4xl text-heading text-2xl col-span-full text-center z-10 absolute w-full h-full flex justify-center items-center  bg-white -translate-y-[20px] "
              >
                We’re here to Help You
              </h1>
              <h1
                style={{
                  backfaceVisibility: "hidden",
                  transformOrigin: "bottom",
                  transform: " translateZ(-24px) rotateX(-90deg) ",
                }}
                className="font-semibold   sm:text-3xl lg:text-h1 md:text-4xl text-heading text-2xl col-span-full text-center absolute w-full h-full  flex justify-center items-center  bg-white translate-y-[20px] "
              >
                We’re here to Help You
              </h1>
              <h1
                style={{
                  backfaceVisibility: "hidden",
                  transform: "translateZ(16px) ",
                }}
                className=" font-semibold   sm:text-3xl lg:text-h1 md:text-4xl text-heading text-2xl col-span-full text-center z-10 absolute w-full  h-full flex justify-center items-center bg-white "
              >
                We’re here to Help You
              </h1>
            </motion.div>
           
          </div>
          <h1 className=" lg:hidden col-span-full sm:text-3xl  md:text-4xl  font-semibold    text-heading text-2xl text-center  w-full h-full bg-white">
              We’re here to Help You 
            </h1>   
          <div className=" lg:col-span-4 col-span-full sm:col-span-4 sm:col-start-3   bg-bg1 rounded-sm flex flex-col gap-4 justify-center p-5">
            <h3 className=" lg:text-3xl sm:text-2xl text-2xl  font-semibold text-heading text-center ">
              Customer Support
            </h3>
            <p className="flex  items-start justify-center">
              {" "}
              <HiOutlineMapPin className=" w-10 -mr-2 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                789 Pine Drive, Apt 3B Greenwood, NY 10920 United States{" "}
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <LuPhoneCall className=" size-5 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                +1 (800) 123-4567
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <HiOutlineMail className=" size-5 mt-1 " />{" "}
              <span className="font-hind text-para  text-para4 text-wrap text-center">
                Pathway67@gmail.com
              </span>{" "}
            </p>
          </div>
          <div className=" lg:col-span-4 col-span-full  sm:col-span-4 sm:col-start-3  bg-bg1 rounded-sm flex flex-col gap-4 justify-center p-5">
            <h3 className=" lg:text-3xl text-2xl sm:text-2xl  font-semibold text-heading text-center ">
              Contact Address
            </h3>
            <p className="flex  items-start justify-center">
              {" "}
              <HiOutlineMapPin className=" w-10 -mr-2 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                P.O. Box 3456 Ocean City, FL 33121 United States
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <LuPhoneCall className=" size-5 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                +1 (415) 987-6543
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <HiOutlineMail className=" size-5 mt-1 " />{" "}
              <span className="font-hind text-para  text-para4 text-wrap text-center">
                Pathway67@gmail.com
              </span>{" "}
            </p>
          </div>{" "}
          <div className=" lg:col-span-4 col-span-full  sm:col-span-4 sm:col-start-3  bg-bg1 rounded-sm flex flex-col gap-4 justify-center p-5">
            <h3 className=" lg:text-3xl text-2xl sm:text-2xl  font-semibold text-heading text-center ">
              Main Office Address
            </h3>
            <p className="flex  items-start justify-center">
              {" "}
              <HiOutlineMapPin className=" w-10 -mr-2 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                Suite 200 Rivertown, CA 90210 United States{" "}
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <LuPhoneCall className=" size-5 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                +1 (555) 123-4567
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <HiOutlineMail className=" size-5 mt-1 " />{" "}
              <span className="font-hind text-para  text-para4 text-wrap text-center">
                Pathway67@gmail.com
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-8 lg:grid-cols-12 sm:gap-y-8 px-3  gap-x-5 items-stretch lg:gap-y-10">
          <h1 className=" lg:text-h1  text-2xl sm:text-h2 font-semibold col-span-full sm:col-span-full  text-center  text-heading">
            Get In Touch
          </h1>
          <div className=" lg:col-span-5 sm:col-span-6 sm:justify-self-center sm:col-start-2">
            <img src={getInTouchImg} width="100%" alt="getInTouchImg" />
          </div>
          <div className=" flex flex-col sm:col-span-full gap-5 py-2 lg:col-span-6 sm:px-12 md:px-14   lg:col-start-7">
            <div className="flex gap-5 ">
              {" "}
              <div className="flex flex-col gap-2 flex-grow">
                <label className=" font-kite" htmlFor="nameForContactForm">
                  Name
                </label>
                <input
                  id="nameForContactForm"
                  className="  flex    w-full rounded-lg border border-paraTertiary  px-3 py-2
                            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-stokeColor focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  name="nameForContactForm"
                  type="text"
                />
              </div>{" "}
              <div className="flex flex-col gap-2 flex-grow">
                <label className=" font-kite" htmlFor="emailForContactForm">
                  Email
                </label>
                <input
                  id="emailForContactForm"
                  className="  flex    w-full rounded-md border border-paraTertiary  px-3 py-2
                            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-stokeColor focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  name="emailForContactForm"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-kite" htmlFor="phoneForContactForm">
                Phone
              </label>
              <input
                id="phoneForContactForm"
                className="  flex     w-full rounded-lg border border-paraTertiary  px-3 py-2
                            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-stokeColor focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                name="phoneForContactForm"
                type="text"
              />
            </div>
            <div className="flex flex-col flex-grow gap-2 ">
              <label className=" font-kite" htmlFor="messageForContactForm">
                Message
              </label>
              <textarea
                rows="4"
                className=" flex-grow rounded-lg px-4 py-3 w-full flex border border-paraTertiary
                            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-stokeColor focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us a few words"
                name="messageForContactForm"
                id="messageForContactForm"
              ></textarea>
            </div>
            <PrimaryBtn className="   w-40  px-3 py-2">
              <span
                className="flex items-center
              "
              >
                {" "}
                Send message
              </span>
              <FiSend />
            </PrimaryBtn>
            <div className="flex gap-5 items-center">
              {" "}
              <p className=" font-medium text-para text-footerColor">
                Follow us on
              </p>
              <div className=" flex gap-2 ">
                <a href="#">
                  {" "}
                  <FBicon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="#525252"
                  />
                </a>
                <a href="#">
                  {" "}
                  <IGicon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="white"
                  />
                </a>
                <a href="#">
                  {" "}
                  <TwitterIcon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="white"
                  />
                </a>{" "}
                <a href="#">
                  {" "}
                  <Linkedinicon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="white"
                  />
                </a>
                <a href="#">
                  <YTicon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="white"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-full  lg:h-[478px] h-[250px] sm:h-[337px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.763498671471!2d96.13149100963174!3d16.838084783891443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edbb8a89416d%3A0x64420f52367032b9!2sMMS%20IT!5e0!3m2!1sen!2smm!4v1732870842557!5m2!1sen!2smm"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default ContactUsPage;
