import React from 'react'
import GroupImg1 from '../assets/GroupImg1.png'
import GroupImg2 from '../assets/GroupImg2.png'
import GroupImg3 from '../assets/GroupImg3.png'
import Portrait1 from '../assets/Portrait1.svg'
import Portrait2 from '../assets/Portrait2.svg'

export default function Images() {
  return (
    <div className='images-container'>
      <div className='main-image image-1'>
        <img src={GroupImg1} alt='img-1'/>
      </div>
      <div className='main-image image-2'>
        <img src={GroupImg2} alt='img-2'/>
        <img className='portrait portrait-2' src={Portrait2} alt='portrait-2'/>
        <div className="image-border"></div>
      </div>
      <div className='main-image image-3'>
        <img src={GroupImg3} alt='img-3'/>
        <img className='portrait portrait-1' src={Portrait1} alt='portrait-1'/>
      </div>
    </div>
  )
}
