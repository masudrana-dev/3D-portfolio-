import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Styles } from '../Styles'
import { navLinks } from '../Constants';
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${Styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center mx-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'
          onClick={() => {
            setActive(' ')
            window.scroll(0, 0)
          }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Masud  <span className='sm:block hidden'>  | Rana</span></p>
        </Link>
        <ul className=' list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            // active portion 
            <li
              key={link.id}
              className={`${active === link.title ?
                'text-white' : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.id}`}> {link.title}</a>
            </li>
            // active portion 
          ))}
        </ul>

        {/* humburg menu  */}
        <div className='sm:hidden flex flex-1 justify-end items-center '>
          <img
            src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[144px] z-10 rounded-xl`}>
            <ul className=' list-none  flex  justify-end items-start  flex-col gap-2'>
              {navLinks.map((link) => (
                // active portion 
                <li
                  key={link.id}
                  className={`${active === link.title ?
                    'text-white' : "text-secondary"
                    } text-[16px] font-medium font-poppins cursor-pointer`}
                  onClick={() => {
                    // afer clicking menu the menu portion will be hidden
                    setToggle(!toggle);
                    // afer clicking menu the menu portion will be hidden 
                    setActive(link.title);
                  }}
                >
                  <a href={`${link.id}`}> {link.title}</a>
                </li>
                // active portion 
              ))}
            </ul>
          </div>
          {/* humburg menu  */}

        </div>
      </div>
    </nav>
  )
}

export default Navbar