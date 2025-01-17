import React,{useState} from 'react'

import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import menu from "../images/menu.svg"

 import PopupMenu from './PopupMenu'



function Nav({navlinks}) {


  const [popupState, setPopupState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);











  return (
  <>
   <header 
  //  className={`
  //       nav-default ${navState && 'nav-sticky'}
  //     `}

    className=' flex items-center justify-center w-auto h-auto absolute top-7 left-0 right-0'
      >
    <nav className='flex items-center justify-between travigo-container'>
      <NavLink  to={`/`} className="flex items-center">
        <img src={logo} alt=""    className='w-22 h-9 object-fill'  />
      </NavLink>

      <ul className='flex items-center lg:hidden gap-7'>
            {navlinks?.map((val, i) => (
              <li key={i}><NavLink to={'#'} className="text-lg text-slate-900">{val.link}</NavLink></li>
            ))}
          </ul>

          <ul className='flex items-center lg:hidden'>
            <li><button type='button' className='button-emrald px-7 text-base'>Join Us</button></li>
          </ul>
          <ul className='hidden lg:flex items-center'>
            <li><button type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer'
             onClick={onTriggerPopup}
             ><img src={menu} alt="menu/svg" className='object-cover shadow-sm filter' /></button></li>
          </ul>
    </nav>
   </header>
   <PopupMenu navlinks={navlinks} popupState={popupState} />
  </>
  )
}

export default Nav



// 40:42