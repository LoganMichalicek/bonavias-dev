import React from "react";

const Testimonial = ({name, message}) => {
  return (
    <div className="grid grid-cols-8 gap-4">
      <svg
        className="h-6 w-6 place-self-center"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
      <div className="py-6 col-span-7 place-self-start">
        <p className="py-2">{message}</p>
        <p className="text-sm text-gray-500 py-2">{name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
