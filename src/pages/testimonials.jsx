import React, { useState } from "react";
import Testimonial from "../components/Testimonial";
import data from "../content/testimonials.json";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import PageCard from "../components/PageCard";

const Testimonials = () => {
  const keys = Object.keys(data);
  const [currentTab, setCurrentTab] = useState(0);
  const [ad_currentTab, ad_setCurrentTab] = useState(0);
  const [pa_currentTab, pa_setCurrentTab] = useState(0);
  const [fm_currentTab, fm_setCurrentTab] = useState(0);

  return (
    <div className="page-layout">
      <h2 className="section-header">Testimonials</h2>
      <p>
        We have helped thousands of clients over our working history, but some
        have provided feedback that we can share to let you know how much they
        valued the resources and services they received. Under each subject
        matter category, here is what they had to say about us:
      </p>
      <div className="inset-box py-4">
        <div className="flex justify-between items-center content-center pb-4 border-b-2">
          <button
            className="cursor-pointer"
            onClick={() => setCurrentTab((currentTab - 1) % keys.length)}
          >
            <BsArrowLeft />
          </button>
          <span className="">{keys[currentTab]}</span>
          <button
            className="cursor-pointer"
            onClick={() => setCurrentTab((currentTab + 1) % keys.length)}
          >
            <BsArrowRight />
          </button>
        </div>
        <div>
          {data[keys[currentTab]].map((entry, idx) => {
            return (
              <Testimonial
                key={idx}
                name={entry.name}
                message={entry.message}
              />
            );
          })}
        </div>
      </div>
      <div className="inset-box py-4">
        <div className="grid lg:grid-cols-3 grid-cols-0 gap-10 mb-10">
          <h1 className="place-self-center">Academic Developement</h1>
          <h1 className="place-self-center">Professional Advancement</h1>
          <h1 className="place-self-center">Financial Management</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pharetra sapien vitae ex consequat, at consectetur lorem
            ullamcorper. Praesent urna felis, semper quis consequat vel,
            volutpat in est. Nunc placerat iaculis diam, ac gravida purus
            aliquet quis. Nunc ut ipsum libero. Sed auctor sed mi semper
            pulvinar. Nulla at lectus nisl. Mauris faucibus nisl vitae dui
            vulputate porttitor. Mauris et tincidunt sapien, ut ullamcorper
            justo. Ut tempor, dui a consectetur pulvinar, dolor lorem fermentum
            ex, varius commodo metus magna sed urna. Quisque aliquam efficitur
            quam eget tristique. Proin mattis neque nec mauris dapibus
            tincidunt. Nunc quis orci ut arcu pretium varius id non turpis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pharetra sapien vitae ex consequat, at consectetur lorem
            ullamcorper. Praesent urna felis, semper quis consequat vel,
            volutpat in est. Nunc placerat iaculis diam, ac gravida purus
            aliquet quis. Nunc ut ipsum libero. Sed auctor sed mi semper
            pulvinar. Nulla at lectus nisl. Mauris faucibus nisl vitae dui
            vulputate porttitor. Mauris et tincidunt sapien, ut ullamcorper
            justo. Ut tempor, dui a consectetur pulvinar, dolor lorem fermentum
            ex, varius commodo metus magna sed urna. Quisque aliquam efficitur
            quam eget tristique. Proin mattis neque nec mauris dapibus
            tincidunt. Nunc quis orci ut arcu pretium varius id non turpis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pharetra sapien vitae ex consequat, at consectetur lorem
            ullamcorper. Praesent urna felis, semper quis consequat vel,
            volutpat in est. Nunc placerat iaculis diam, ac gravida purus
            aliquet quis. Nunc ut ipsum libero. Sed auctor sed mi semper
            pulvinar. Nulla at lectus nisl. Mauris faucibus nisl vitae dui
            vulputate porttitor. Mauris et tincidunt sapien, ut ullamcorper
            justo. Ut tempor, dui a consectetur pulvinar, dolor lorem fermentum
            ex, varius commodo metus magna sed urna. Quisque aliquam efficitur
            quam eget tristique. Proin mattis neque nec mauris dapibus
            tincidunt. Nunc quis orci ut arcu pretium varius id non turpis.
          </p> */}
          <div>
            <p>{data[keys[0]][ad_currentTab].message}</p>
            <button
              onClick={() =>
                ad_setCurrentTab((ad_currentTab + 1) % data[keys[0]].length)
              }
            >{`Academic Dev #${ad_currentTab}`}</button>
          </div>
          <div>
            <p>{data[keys[1]][pa_currentTab].message}</p>
            <button
              onClick={() => pa_setCurrentTab((pa_currentTab + 1) % 10)}
            >{`Professional Adv #${pa_currentTab}`}</button>
          </div>
          <div>
            <p>{data[keys[2]][fm_currentTab].message}</p>
            <button
              onClick={() => fm_setCurrentTab((fm_currentTab + 1) % 10)}
            >{`Financial Mgt #${fm_currentTab}`}</button>
          </div>
        </div>
      </div>
      <div className="py-4">
        <h2 className="section-header">Letters</h2>
        <p>
          Some of our clients have gone so far as to write letters expressing
          their gratitude for our services.
        </p>

        <div className="flex flex-wrap justify-start items-center">
          <PageCard name="[Letter 1]" />
          <PageCard name="[Letter 2]" />
        </div>
      </div>
      <div className="py-4">
        <p className="py-2">If you have received help from us...</p>
        <h1 className="text-2xl text-blue-400 py-2">
          We would like to hear from you!
        </h1>
        <p className="py-2">
          Please contact us if you would like to provide feedback that we can
          use to improve our website or any of our subject resources or
          services. If you would like to add your testimonial to the list above,
          briefly tell us:
        </p>
        <div className="px-8 py-2">
          <p>1) what resources or services you received,</p>
          <p>2) how you felt before, during and/or after working with us and</p>
          <p>3) how you think it may have impacted you.</p>
        </div>
        <p className="py-2">
          Feel free to identify any of our staff, volunteers or counselors if
          you feel someone did an outstanding job.{" "}
          <span className="font-bold underline">PLEASE NOTE:</span> If we add
          your feedback to our testimonials, we will show{" "}
          <span className="underline font-bold">ONLY</span> your first name and
          we will redact any other personal or identifiable information before
          sharing it publicly.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
