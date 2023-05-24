import React from 'react'

import Arrow from '../assets/Main/Arrow.svg'
import GroupUsers from '../assets/Main/GroupUsers.svg'
import People from '../assets/Main/People.svg'
import Recent from '../assets/Main/Recent.svg'
import Store from '../assets/Main/Store.svg'
import Watch from '../assets/Main/Watch.svg'

import Perfume from '../assets/Main/Perfume.png'
import Sandalias from '../assets/Main/Sandalias.png'


function Main() {
  return (
    <main className='w-full h-full flex flex-row justify-center max-[1500px]:justify-around'>

      {/* PARTE ESQUERDA */}
      <div className='CENTRO w-[350px] h-full mr-auto bg-[#2D2E2F] p-4 flex flex-col gap-5'>

        <section className='flex flex-row items-center gap-3'>
          <div className='w-[40px] h-[40px] bg-[#3A3B3C] flex items-center justify-center rounded-full'></div>
          <p className=''>Nome do Perfil</p>
        </section>

        <section className='flex flex-row items-center gap-3'>
          <img src={GroupUsers} className='w-[30px] h-[30px]'/>
          <p className=''> Encontrar Amigos </p>
        </section>

        <section className='flex flex-row items-center gap-3'>
          <img src={People} className='w-[30px] h-[30px]'/>
          <p className=''> Grupos </p>
        </section>

        <section className='flex flex-row items-center gap-3'>
          <img src={Recent} className='w-[30px] h-[30px]'/>
          <p className=''> Mais Recentes </p>
        </section>

        <section className='flex flex-row items-center gap-3'>
          <img src={Store} className='w-[30px] h-[30px]'/>
          <p className=''> Mercado </p>
        </section>

        <section className='flex flex-row items-center gap-3'>
          <img src={Watch} className='w-[30px] h-[30px]'/>
          <p className=''> Watch </p>
        </section>

        <section className='flex flex-row items-center gap-3'>
          <img src={Arrow} className='w-[30px] h-[30px]'/>
          <p className=''> Mostar Mais </p>
        </section>
      </div>

      {/* PARTE DO MEIO */}
      <div className='Content w-[700px]  flex flex-col items-center pt-6 pb-6 gap-4 overflow-y-scroll
      max-[750px]:w-full'>

        <div className='w-[95%] min-h-[300px] bg-[#2D2E2F] rounded-md'>

        </div>

        <div className='w-[95%] min-h-[150px] bg-[#2D2E2F]'>

        </div>

        <div className='w-[95%] min-h-[600px] bg-[#2D2E2F]'>

        </div>

      </div>

      {/* PARTE DA DIREITA */}
      <div className='w-[350px] h-full ml-auto flex flex-col items-center pt-6 max-[1500px]:ml-0 max-[1100px]:hidden'>
        <section className='h-auto w-[90%] flex flex-col gap-3'>
          <h2 className=' font-medium'> Patrocinado </h2>

          <section className='flex flex-row w-full gap-4 h-[130px]'>
            <img src={Perfume} className='w-[130px] h-[130px]'/>
            <section className='flex justify-center flex-col'>
              <p>Melhor Perfume </p>
              <p>www.perfume.com.br</p>
            </section>
          </section> 

          <section className='flex flex-row w-full gap-4 h-[130px]'>
            <img src={Sandalias} className='w-[130px] h-[130px]'/>
            <section className='flex justify-center flex-col'>
              <p>Melhor Sandalias </p>
              <p>www.Sandalias.com.br</p>
            </section>
          </section> 


        </section>
      </div>
    </main>
  )
}

export default Main