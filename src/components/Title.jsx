import React from 'react'
import Button from './Button'
import './componentsStyles.css'

export default function Title() {
  return (
    <div className='title-wrapper'>
      <h1 className='title-header'>
        Техническая поддержка сайтов, CRM систем и мобильных приложений
      </h1>
      <h2 className='title-subheader'>
        Профессиональное техническое сопровождение и обслуживание сайтов: полный комплекс услуг от опытных экспертов
      </h2>
      <Button text='Подключиться' buttonClass='title-button'/>
    </div>
  )
}
