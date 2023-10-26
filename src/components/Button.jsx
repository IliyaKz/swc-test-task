import React from 'react'
import './componentsStyles.css'

export default function Button({onClick, buttonClass, text}) {
  return (
    <button className={`${buttonClass} default-button`} onClick={onClick}>
      {text}
    </button>
  )
}
