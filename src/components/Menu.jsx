import React from 'react'
import './componentsStyles.css'

export default function Menu() {
  return (
    <nav>
      <ul className='menu-wrapper'>
        <li className='menu-item'>Преимущества</li>
        <li className='menu-item'>Услуги</li>
        <li className='menu-item'>Виджет</li>
        <li className='menu-item'>Кому</li>
        <li className='menu-item'>Тарифы</li>
        <li className='menu-item'>Блог</li>
      </ul>
    </nav>
  )
}
