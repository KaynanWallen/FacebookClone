import React from 'react'

import facebook from '../assets/facebook.svg'
import search from '../assets/search.svg'

import menu from '../assets/menu.svg'
import bell from '../assets/bell.svg'
import msg from '../assets/msg.svg'

import home from '../assets/home.svg'
import user from '../assets/users.svg'
import movie from '../assets/movie.svg'
import UsersGroup from '../assets/UsersGroup.svg'
import card from '../assets/card.svg'

import menu2 from '../assets/menu2.svg'

function Header() {
  return (
    <header className='w-full h-[60px] bg-[#242526] border-b-2 border-[#3A3B3C] flex flex-row justify-center'>

      <div className='w-[300px] h-full mr-auto flex flex-row justify-between items-center ml-4 max-[1200px]:justify-start gap-3'>
        <img src={facebook} className='h-[40px] w-[40px]'/>
        <section className='w-[240px] h-[40px] flex flex-row items-center bg-[#3A3B3C] rounded-3xl justify-center max-[1200px]:w-[40px] max-[1200px]:h-[40px]'>
          <img src={search} className='w-[15px] h-[15px]'/>
          <input type='text' className='w-[200px] h-full bg-transparent rounded-3xl focus:outline-none pl-3 max-[1200px]:hidden' />
        </section>

        <section className='w-auto h-auto min-[850px]:hidden'>
          <img src={menu2} className='w-[30px] h-[30px]' />
        </section>
      </div>

      <div className='w-[700px] h-full flex items-center justify-between max-[850px]:hidden'>

        <section className='border-b-4 border-blue-500 w-[100px] h-[60px] flex justify-center items-center'>
          <img src={home} className='w-[30px] h-[30px]'/>
        </section>

        <section className=' w-[100px] h-[60px] flex justify-center items-center'>
          <img src={user} className='w-[30px] h-[30px]'/>
        </section>

        <section className=' w-[100px] h-[60px] flex justify-center items-center'>
          <img src={movie} className='w-[30px] h-[30px]'/>
        </section>

        <section className=' w-[100px] h-[60px] flex justify-center items-center'>
          <img src={UsersGroup} className='w-[30px] h-[30px]'/>
        </section>

        <section className=' w-[100px] h-[60px] flex justify-center items-center'>
          <img src={card} className='w-[30px] h-[30px] max-[1200px]:hidden'/>
          <img src={menu2} className='w-[30px] h-[30px] min-[1200px]:hidden' />
        </section>

      </div>

      <div className='w-[300px] h-full ml-auto mr-4 flex justify-end'>
        <div className='flex flex-row w-auto h-full gap-1 items-center'>
          <section className='w-[45px] h-[45px] bg-[#3A3B3C] flex items-center justify-center rounded-full'>
            <img src={menu} className='w-[20px] h-[20px]'/>
          </section>

          <section className='w-[45px] h-[45px] bg-[#3A3B3C] flex items-center justify-center rounded-full'>
            <img src={msg} className='w-[20px] h-[20px]'/>
          </section>

          <section className='w-[45px] h-[45px] bg-[#3A3B3C] flex items-center justify-center rounded-full'>
            <img src={bell} className='w-[27px] h-[27px]'/>
          </section>

          <section className='w-[45px] h-[45px] bg-[#3A3B3C] flex items-center justify-center rounded-full'>
          </section>
        </div>
      </div>


    </header>
  )
}

export default Header