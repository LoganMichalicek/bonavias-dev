import React from 'react'
import PlaceholderImage from '../images/stock-profile.jpg'

const PageCard = ({name, image, title}) => {
  return (
    <div className="page-card m-5 bg-gray-100 border-2 border-gray-200">
      <img src={image ? image : PlaceholderImage} alt="profile"/>
      <div className='pl-3 pt-3'>
        <h2>{name}</h2>
        {title && <h3 className='text-sm text-gray-500'>{title}</h3>}
      </div>
    </div>
  )
}

export default PageCard