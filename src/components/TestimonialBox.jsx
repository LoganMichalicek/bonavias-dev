import React, { useState } from "react";
import Testimonial from "./Testimonial";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const TestimonialBox = ({section, data}) => {
  const [page, setPage] = useState(0);

  const numPages = data.length;
  return (
    <div className="inset-box py-4 h-screen-7/10" id={section.replace(" ", "_").toLowerCase()}>
      <div className="flex justify-between items-center content-center pb-4 border-b-2">
        <button
          className="cursor-pointer"
          onClick={() => {setPage((page - 1) % numPages)}}
        >
          <BsArrowLeft />
        </button>
        <span className="">{section}</span>
        <button
          className="cursor-pointer"
          onClick={() => {setPage((page + 1) % numPages)}}
        >
          <BsArrowRight />
        </button>
      </div>
      <div className="flex align-center justify-center items-center content-center h-max">
        <Testimonial name={data[page].name} message={data[page].message}/>
      </div>
    </div>
  );
};

export default TestimonialBox;