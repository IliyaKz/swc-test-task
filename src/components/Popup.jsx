import React from 'react'
import Button from './Button'
import Vk from '../assets/vk.svg'
import Clock from '../assets/clock.svg'
import { useDispatch } from 'react-redux'
import Zen from '../assets/yandex-zen.svg'
import Telegramm from '../assets/telegramm.svg'
import Location from '../assets/location-mark.svg'
import { togglePopupVisibility } from '../store/appSlice'

export default function Popup() {
  const dispatch = useDispatch();

  return (
    <div className='popup-background' onClick={() => dispatch(togglePopupVisibility())}>
      <div className='popup-content' onClick={e => e.stopPropagation()}>
        <div className="popup-header">
          Контактная информация
        </div>
        <div className="popup-info">
          <div className="popup-address">
            <img className='location-img' src={Location} alt='location'/>
            <span className='popup-text data'>
              Санкт-Петербург, ул. Такая-то, д. 1
            </span>
            <a className='popup-text href' href='./'>
              Показать на карте
            </a>
          </div>
          <div className="popup-contacts">
            <div className="contacts-data">
              <div className="contact-type">
                <span className="popup-text title">Звоните:</span>
                <span className="popup-text data">+7 (495) 123-45-67</span>
              </div>
              <div className="contact-type">
                <span className="popup-text title">Пишите:</span>
                <span className="popup-text data">info@test.ru</span>
              </div>
            </div>
            <Button text='Заказать звонок' buttonClass='popup-button'/>
          </div>
          <div className="popup-timetable">
            <div className="timetable-header">
              <img src={Clock} alt='clock'/>
              <span className="popup-text title">Режим работы:</span>
            </div>
            <div className="timetable-items">
              <span className="popup-text data">Пн-Пт — с 10:00 до 18:00</span>
              <span className="popup-text data">Сб-Вс — выходной</span>
            </div>
          </div>
          <div className="popup-social">
            <span className="popup-text title">Мы в соцсетях</span>
            <div className='social-container'>
              <div className="social-icon boarded">
                <img src={Telegramm} alt='telegramm'/>
              </div>
              <div className="social-icon boarded">
                <img src={Vk} alt='vk'/>
              </div>
              <div className="social-icon">
                <img src={Zen} alt='zen'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
