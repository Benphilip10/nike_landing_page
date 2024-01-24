import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import Button from './Button';


export const Nav = () => {
  return (
    <header className='padding-x py-8 absolute w-full z-10'>

      <nav className='flex items-center max-container justify-between'>
        <a href="/">
          <img
          src={headerLogo} alt='logo' width={120} height={24}
          />
        </a>

        <ul className='flex flex-1 justify-center items-center max-lg:hidden gap-20'>
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

        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt="hamburger"
            width={25} height={25}
          />
        </div>     
      </nav>

    </header>
  )
}

export default Nav