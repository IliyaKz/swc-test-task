import React from 'react'
import Menu from './Menu'
import Button from './Button'
import './componentsStyles.css'
import { useDispatch } from 'react-redux'
import {ReactComponent as Logo} from '../assets/logo.svg'
import { togglePopupVisibility } from '../store/appSlice'

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className='header'>
      <Logo />
      <Menu />
      <div className='header-lang'>
        En
      </div>
      <div className='header-number'>
        +7 (495) 123-45-67
      </div>
      <Button text='Контакты' buttonClass='contact-button' onClick={() => dispatch(togglePopupVisibility())}/>
    </header>
  )
}
