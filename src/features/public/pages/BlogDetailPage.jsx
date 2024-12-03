import React from "react";
import { Link, useParams } from "react-router-dom";
import { useBlogStore } from "../../../store/useBlogStore";
import ContainerComponent from "../../../components/ContainerComponent";
import event1Img from "../../../assets/blog/events/event-1.png";
import LatestBlog4 from "../../../assets/blog/latestBlog/blog-4.png";
import LatestBlog5 from "../../../assets/blog/latestBlog/blog-5.png";
import LatestBlog6 from "../../../assets/blog/latestBlog/blog-6.png";
import { easeIn, motion } from "framer-motion";

import ShowDate from "../components/ShowDate";
import LatestBlogCard from "../components/LatestBlogCard";

const BlogDetailPage = () => {
  const { blogSlug } = useParams();
  const { blogs } = useBlogStore();
  const currentElementIndex = blogs.findIndex((el) => el.slug === blogSlug);
const LatestBlogCardMotion = motion.create(LatestBlogCard)
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 , ease : easeIn }}
      className=" lg:space-y-section-spacing sm:space-y-20 space-y-10 lg:mb-32 mb-10 sm:mb-20"
    >
      <section className="  lg:grid-rows-[420px] grid-rows-[200px] md:grid-rows-[274px] items-center justify-center  grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12  gap-5 bg-bg1">
        <div className=" col-span-full lg:col-span-8  lg:col-start-3 lg:px-9 px-5  space-y-2 lg:space-y-4 mx-auto">
          <ShowDate date={blogs[currentElementIndex].date} />
          <p className="  lg:text-2xl md:text-para text-center lg:text-start  text-para4 font-semibold">
            Announcing 10 entry-level Professional Certificates from our biggest
            partners as digital transformation reshapes the labor market
          </p>
        </div>
      </section>
      <ContainerComponent className="grid grid-cols-4 lg:grid-cols-12 sm:grid-cols-8  items-center gap-x-5 gap-y-10 sm:gap-y-20 lg:gap-y-section-spacing ">
        <div className=" rounded-md space-y-5 lg:space-y-6 col-span-full lg:col-start-3  lg:col-span-8  ">
          <img src={event1Img} width="100%" alt="" />
          <div className="space-y-2 lg:space-y-6 ">
            {" "}
            <h2 className="px-4 text-base md:text-2xl sm:text-xl lg:text-2xl text-heading font-semibold text-wrap lg:w-[80%]">
              By Marni Baker , Chief Content Officer, Pathway Academy
            </h2>
            <p className="px-4 text-base  text-para4  ">
              We're excited to announce the expansion of our entry-level
              Professional Certificate portfolio with 10 new programs from
              industry partners. Pathway Academy now offers 80+ entry-level
              certificates across various job roles, with nearly half launched
              in 2024. These programs are designed to equip learners for
              in-demand, entry-level jobs as technology reshapes the labor
              market.
            </p>
          </div>
          <ul className=" px-4 space-y-6 lg:pr-20  ">
            <li
              className=" lg:space-y-2 space-y-1 
          "
            >
              {" "}
              <div className="flex items-center gap-5">
                {" "}
                <div className="lg:size-3 bg-black rounded-full inline-block size-1"></div>
                <h1 className="font-semibold inline-block text-heading text-base sm:text-para lg:text-2xl">
                  New Opportunities for Career Growth
                </h1>{" "}
              </div>
              <p className=" lg:pl-8 pl-6   lg:text-para font-hind text-sm  text-para4">
                In collaboration with our largest industry partners, Pathway
                Academy is excited to offer 10 entry-level Professional
                Certificates. As digital transformation reshapes the labor
                market, these certificates are designed to equip you with
                essential skills that are in high demand.
              </p>
            </li>
            <li
              className=" lg:space-y-2 space-y-1
       "
            >
              {" "}
              <div className="flex items-center gap-5">
                {" "}
                <div className="lg:size-3 bg-black rounded-full inline-block size-1"></div>
                <h1 className="font-semibold text-heading text-base sm:text-para lg:text-2xl">
                  Focus on In-Demand Skills
                </h1>
              </div>
              <p className=" lg:pl-8 pl-6   lg:text-para font-hind text-sm  text-para4">
                Our courses cover critical areas such as Data Analytics,
                Cybersecurity, Cloud Computing, Digital Marketing, and
                more—helping you build a strong foundation for a career in the
                ever-evolving digital workforce.
              </p>
            </li>
            <li
              className=" lg:space-y-2 space-y-1
       "
            >
              <div className="flex items-center gap-5">
                {" "}
                <div className="lg:size-3 bg-black rounded-full inline-block size-1"></div>
                <h1 className="font-semibold text-heading text-base sm:text-para lg:text-2xl">
                  Industry-Recognized Credentials
                </h1>
              </div>{" "}
              <p className=" lg:pl-8 pl-6   lg:text-para font-hind text-sm  text-para4">
                Earn certifications backed by some of the biggest names in the
                tech and business sectors. These credentials are recognized by
                employers around the world, ensuring you have the skills they’re
                looking for.
              </p>
            </li>{" "}
            <li
              className=" lg:space-y-2 space-y-1
        "
            >
              <div className="flex items-center gap-5">
                {" "}
                <div className="lg:size-3 bg-black rounded-full inline-block size-1"></div>
                <h1 className="font-semibold text-heading text-base sm:text-para lg:text-2xl">
                  For Beginners and Career Changers
                </h1>
              </div>{" "}
              <p className=" lg:pl-8 pl-6   lg:text-para font-hind text-sm  text-para4">
                Whether you're just starting your career or transitioning into a
                new field, these entry-level programs are designed to help you
                gain hands-on experience and valuable expertise, preparing you
                for high-demand roles across industries.
              </p>
            </li>{" "}
            <li
              className=" lg:space-y-2 space-y-1
"
            >
              {" "}
              <div className="flex items-center gap-5">
                {" "}
                <div className="lg:size-3 bg-black rounded-full inline-block size-1"></div>
                <h1 className="font-semibold text-heading text-base sm:text-para lg:text-2xl">
                  Start Your Journey Today
                </h1>
              </div>{" "}
              <p className=" lg:pl-8 pl-6   lg:text-para font-hind text-sm  text-para4">
                Take control of your future with professional certificates that
                open doors to exciting career opportunities in a digital-first
                world.
              </p>
            </li>
          </ul>
        </div>
        <div className=" col-span-full sm:col-span-6  lg:hidden flex flex-col gap-2  p-2 shadow-sm border rounded">
          <h3 className=" font-medium lg:text-2xl sm:text-xl text-lg text-heading border-b border-borderBlog py-2">
            Keep Reading
          </h3>
          {blogs[currentElementIndex + 1] && (
            <Link
              to={`/blog/${blogs[currentElementIndex + 1].slug}`}
              className=" font-medium text-base sm:text-lg md:text-para text-paraBlue"
            >
              Introducing Pathway Academy’s 2024 Outstanding Enterprise Customer
              Achievement Award Winners
            </Link>
          )}
          {blogs[currentElementIndex + 2] && (
            <Link
              to={`/blog/${blogs[currentElementIndex + 2].slug}`}
              className=" font-medium text-base sm:text-lg md:text-para text-paraBlue"
            >
              AI Grading: Faster, Quality Feedback on Pathway Academy
            </Link>
          )}
        </div>
        <div className=" lg:col-span-full lg:grid grid-cols-12  hidden gap-y-10  gap-x-5">
          <h1 className=" text-3xl text-heading font-medium col-span-full text-center">
            Related Blogs
          </h1>

          <LatestBlogCardMotion initial={{opacity : 0 , y : 30 ,}}  whileInView={ {opacity : 1 , y : 0 , transition  : {duration : 0.7 , }}} img={LatestBlog4} href={`/blog/${blogs[0].slug}`} title="Designing Your First Portfolio Website" descripton="Learn the essential steps to design a professional portfolio
                    that highlights your expertise and attracts opportunities." author="Ms. Olivia Parker" date="Nov 13 2024" />
       
            <LatestBlogCardMotion initial={{opacity : 0 , y : 30 ,}}  whileInView={ {opacity : 1 , y : 0 , transition  : {duration : 0.7 , }}} img={LatestBlog5} href={`/blog/${blogs[0].slug}`} title="Web Development Trends to Watch" descripton="Stay ahead in the fast-paced tech industry with this guide
                    to the top tools and frameworks for 2024." author="Mr.Ethan" date="Nov 13 2024" />
       
            <LatestBlogCardMotion initial={{opacity : 0 , y : 30 ,}}  whileInView={ {opacity : 1 , y : 0 , transition  : {duration : 0.7 , }}} img={LatestBlog6} href={`/blog/${blogs[0].slug}`} title="Unlocking Creativity Through Photography" descripton="Unlocking Creativity Through Photography." author="Ms. Sophia" date="Nov 13 2024" />
        </div>
      </ContainerComponent>
    </motion.section>
  );
};

export default BlogDetailPage;
