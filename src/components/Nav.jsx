import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import Button from './Button';
import { useState } from 'react';


export const Nav = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className='padding-x py-8 absolute w-full z-20'>

      <nav className='flex items-center max-container justify-between'>
        <a href="/">
          <img
          src={headerLogo} alt='logo' width={120} height={24}
          />
        </a>

        <ul className='flex flex-1 justify-center items-center gap-20 max-lg:hidden'>
          {   
            navLinks.map((item) => (
              <li key={item.label}>
                  <a href={item.href}
                    className='font-montserrat leading-normal text-base text-slate-gray hover:text-coral-red transition-all ease-in' 
                  >
                    {item.label}
                  </a>
              </li>  
            ))
          }
        </ul>

        <div className='block max-lg:hidden'>
        <Button
          label="Shop now"
        />
        </div>

        <div className='hidden max-lg:block cursor-pointer hover:bg-coral-red p-3 rounded-lg transition-all'
        onClick={toggleMobileMenu}
        >
          <img
            src={hamburger}
            alt="hamburger"
            width={25} height={25}
          />
        </div>     
      </nav>

      {/* Mobile Menu */}
      
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} bg-pale-blue p-10 pb-[70px] relative mx-[120px] 
      my-5 text-right rounded-2xl min-h-20 w-[300px] flex flex-col items-end gap-10 drop-shadow-md slide-in-right`}>

      <ul className=''>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className='block py-5 px-4 font-montserrat leading-normal text-base  text-slate-gray hover:text-coral-red transition-all ease-in'

              onClick={toggleMobileMenu}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className='block'>
        <Button
          label="Shop now"
        />
        </div>
      </div>

    </header>
  )
}

export default Nav