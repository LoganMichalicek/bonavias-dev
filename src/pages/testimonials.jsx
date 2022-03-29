import React from 'react'
import Testimonial from '../components/Testimonial';
import data from '../content/testimonials.json'

const Testimonials = () => {
  const keys = Object.keys(data);
  return (
    <div className='page-layout'>
      <h2 className="section-header">Testimonials</h2>
      <div className='inset-box'>
        {data[keys[0]].map((entry, idx) => {
          return <Testimonial key={idx} name={entry.name} message={entry.message} />
        })}
      </div>
    </div>
  )
}

export default Testimonials