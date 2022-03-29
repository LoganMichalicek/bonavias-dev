import React from 'react'
import PageImage from '../components/PageImage'
import stockImage from '../images/stock-profile.jpg'

const Gallery = () => {
  return (
    <div className='page-layout'>
      <h2 className='section-header'>Photos</h2>
      <p>Please send us any photos you would like to consider adding to our gallery.</p>
      <div className='flex flex-wrap justify-start py-10'>
        {[0,1,2,3,4,5,6].map((item) => {
          return <PageImage key={item} image={stockImage}/>
        })}
      </div>
      <h2 className='section-header'>Videos</h2>
      <p>Please send us any videos you would like to consider adding to our gallery.</p>
      <div className='flex flex-wrap justify-start py-10'>
        {[0,1,2,3,4,5,6].map((item) => {
          return <PageImage key={item} image={stockImage}/>
        })}
      </div>
      <p className='uppercase font-bold'>Still under construction</p>
      <p>Links to tutorial videos will be posted once our experts compile their FAQ topics.</p>
    </div>
  )
}

export default Gallery