import React from "react";
import { Link } from "react-router-dom";
import PageCard from "../components/PageCard";

const About = () => {
  return (
    <div className="">
      <div className="page-layout inline-block align-center">
        {/* About us */}
        <h2 className="my-16 text-3xl text-blue-400">About Us</h2>
        <p className="my-10 text-xl">
          We are working toward our 501(c)(3) charitable organization status.
        </p>
        <p className="my-10 text-xl">
          We provide <span className="font-bold">FREE</span> educational
          resources and counseling services to help you find your best path to
          personal prosperity.
        </p>
        <p className="my-10 text-md">
          What started in 1993 as a volunteer tutor service for underprivileged
          students has grown into something much larger. We learned along the
          way that "prosperity" means much more than just financial success and
          that the best way to thrive is to take an active role in shaping the
          elements that define your version of success. Those particular
          elements may not be shared among all cultures, but it seems that most
          cultures share one common problem... not everyone is taught what they
          need to know to realize a meaningful way of life, or at least not
          early enough to avoid making costly mistakes and learning critical
          lessons the hard way. We are committed to addressing that problem and
          to helping you find a plan that maximizes your physical, emotional and
          psychological well-being. Still, let's be honest, that's much easier
          to do if you build wealth instead of debt, so let's discuss your
          academic, professional and financial needs. There is always something
          to learn that you wish you had known sooner.
        </p>
        <p className="my-10 text-md">
          If you struggle in any of these areas, as we all do sometimes, please
          contact us and let's figure out how we can help you. Once you are on
          your way to achieving your goals,{" "}
          <span className="font-bold">
            "we hope you never need to see us again!"
          </span>
        </p>
        {/* <div className="flow flow-col justify-start items-start border-b-2 border-gray-200 pb-10">
          <Link to="/gallery" className="page-button mr-2">
            Gallery
          </Link>
          <Link to="/testimonials" className="page-button mx-2">
            Testimonials
          </Link>
          <Link to="/donate" className="page-button mx-2">
            Donate
          </Link>
          <Link to="/contact" className="page-button ml-2">
            Contact Us
          </Link>
        </div> */}
        <div className="my-10 p-5">
          <span className="col-span-3 text-xl">
            We are here to support you in these key areas:
          </span>
          <div className="p-5 mt-5 border-2 border-gray-200">
            <div className="grid lg:grid-cols-3 grid-cols-0 gap-10 mb-10">
              <div>
                <span className="text-xl text-blue-400">Academic Developement</span>
                <p className="my-5">
                  Your education and work-related skills are the foundation of
                  your marketability for the rest of your life, so it's
                  important to stay focused and drive toward your objectives
                  instead of just going along for the ride and waiting to see
                  where you end up. An optimized academic plan is the first step
                  on your best path and it is much more than just earning good
                  grades in school. What may seem like trivial decisions could
                  have lasting effects on your career and you will be much
                  better off in the long run if you make those decisions with
                  the right tools and information that best suit your needs.
                  It's never too late to discover what makes you happy and how
                  to earn a living doing it.
                </p>
                <Link to="/testimonials" className="page-button">
                  <span className="my-4">
                    Testimonials
                  </span>
                </Link>
              </div>
              <div>
                <span className="text-xl text-blue-400">Professional Advancement</span>
                <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sapien vitae ex consequat, at consectetur lorem ullamcorper. Praesent urna felis, semper quis consequat vel, volutpat in est. Nunc placerat iaculis diam, ac gravida purus aliquet quis. Nunc ut ipsum libero. Sed auctor sed mi semper pulvinar. Nulla at lectus nisl. Mauris faucibus nisl vitae dui vulputate porttitor. Mauris et tincidunt sapien, ut ullamcorper justo. Ut tempor, dui a consectetur pulvinar, dolor lorem fermentum ex, varius commodo metus magna sed urna. Quisque aliquam efficitur quam eget tristique. Proin mattis neque nec mauris dapibus tincidunt. Nunc quis orci ut arcu pretium varius id non turpis. 
                </p>
                <Link to="/#" className="page-button">
                  <span className="my-4">
                    Read more
                  </span>
                </Link>
              </div>
              <div>
                <span className="text-xl text-blue-400">Financial Management</span>
                <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sapien vitae ex consequat, at consectetur lorem ullamcorper. Praesent urna felis, semper quis consequat vel, volutpat in est. Nunc placerat iaculis diam, ac gravida purus aliquet quis. Nunc ut ipsum libero. Sed auctor sed mi semper pulvinar. Nulla at lectus nisl. Mauris faucibus nisl vitae dui vulputate porttitor. Mauris et tincidunt sapien, ut ullamcorper justo. Ut tempor, dui a consectetur pulvinar, dolor lorem fermentum ex, varius commodo metus magna sed urna. Quisque aliquam efficitur quam eget tristique. Proin mattis neque nec mauris dapibus tincidunt. Nunc quis orci ut arcu pretium varius id non turpis. 
                </p>
                <Link to="/#" className="page-button">
                  <span className="my-4">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Subject Matter Experts */}
        <div>
          <div className="my-10">
            <h2 className="text-3xl text-blue-400">Subject Matter Experts</h2>
            <p className="my-5">Our resources and services are provided by experts in their fields who have significant experience working with people who very likely asked the same questions and needed the same information as you.  Your counselor may vary depending on your needs, so please be specific when you contact us for more information and when scheduling your appointment.  We want to make sure you get in touch with the right person.</p>
            <Link to="/contact" className="page-button">
              <span className="my-4">
                Get More Information
              </span>
            </Link>
          </div>
          <div className="my-10">
            <h3 className="text-xl">Do you want to join us?</h3>
            <p className="my-5">Are you a subject matter expert in the areas described above who is willing to work with people in need of your expertise to help them find their best path to personal prosperity?  If so, please contact us and let's talk about how we can make that work for the benefit of everyone involved.  This is a very rewarding opportunity to give back to your community and you will have fun doing it!</p>
            <Link to="/contact" className="page-button">
              <span className="my-4">
                Get More Information
              </span>
            </Link>
          </div>
        </div>
        {/* End Subject Matter Experts */}
        {/* Board of Directors */}
        <div className="my-20">
          <h2 className="text-3xl text-blue-400">Board of Directors</h2>
          <p>Click on any image to read the full biography.</p>
          <div className="flex flex-wrap justify-start items-center">
            <PageCard name="Dr. Adrian Michalicek" title="President"/>
            <PageCard name="Dr. Teresa Nuñez" title="Vice-President"/>
            <PageCard name="Jon Rager" title="Secretary"/>
            <PageCard name="Aileda Lindal" title="Treasurer"/>
            <PageCard name="Kimber Laurence" title=""/>
          </div>
        </div>
        {/* End Board of Directors */}
      </div>
    </div>
  );
};

export default About;
