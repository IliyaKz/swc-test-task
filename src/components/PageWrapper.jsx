import React from 'react'
import Ellipse1 from '../assets/Ellipse1.svg'
import Ellipse2 from '../assets/Ellipse2.svg'
import Ellipse3 from '../assets/Ellipse3.svg'

export default function PageWrapper({children, show}) {
  return (
    <div className={`app-wrapper ${show ? 'popup-show' : ''}`}>
      <div className='app-content'>
        {children}
      </div>
      <div className="app-background-purple">
        <div className="background-ellipse ellipse-1">
          <img src={Ellipse1} alt='ellipse-1'/>
        </div>
        <div className="background-ellipse ellipse-2">
          <img src={Ellipse2} alt='ellipse-2'/>
        </div>
        <div className="background-ellipse ellipse-3">
          <img src={Ellipse3} alt='ellipse-3'/>
        </div>
      </div>
    </div>
  )
}
