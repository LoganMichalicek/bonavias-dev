import React from 'react'
import PlaceholderImage from '../images/stock-profile.jpg'

const PageImage = ({image}) => {
  return (
    <div className="page-image m-5 bg-gray-100 border-2 border-gray-200">
      <img src={image ? image : PlaceholderImage} alt="gallery-item"/>
    </div>
  )
}

export default PageImage