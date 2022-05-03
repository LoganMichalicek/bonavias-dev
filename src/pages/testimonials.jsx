import React, { useState } from "react";
import Testimonial from "../components/Testimonial";
import TestimonialBox from "../components/TestimonialBox";
import data from "../content/testimonials.json";
import PageCard from "../components/PageCard";

const Testimonials = () => {
  const keys = Object.keys(data);
  // const [currentTab, setCurrentTab] = useState(0);
  // const [ad_currentTab, ad_setCurrentTab] = useState(0);
  // const [pa_currentTab, pa_setCurrentTab] = useState(0);
  // const [fm_currentTab, fm_setCurrentTab] = useState(0);

  return (
    <div className="page-layout">
      <h2 className="section-header">Testimonials</h2>
      <p>
        We have helped thousands of clients over our working history, but some
        have provided feedback that we can share to let you know how much they
        valued the resources and services they received. Under each subject
        matter category, here is what they had to say about us:
      </p>
      {keys.map((key, idx) => {
        return <TestimonialBox key={idx} section={key} data={data[key]}/>
      })}
      {/* <TestimonialBox section={keys[0]} data={data[keys[0]]}/> */}
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