import React from 'react'
import Title from './Title'
import Images from './Images'
import './componentsStyles.css'
import {ReactComponent as ArrowDown} from '../assets/arrow-down-short.svg'

export default function Main() {
  return (
    <main className='main'>
      <div className="title-container">
        <Title />
        <div className='arrow-down'>
          <ArrowDown/>
        </div>
      </div>
      <Images />
    </main>
  )
}
