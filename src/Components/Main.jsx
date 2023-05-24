import React from 'react'

import Arrow from '../assets/Main/Arrow.svg'
import GroupUsers from '../assets/Main/GroupUsers.svg'
import People from '../assets/Main/People.svg'
import Recent from '../assets/Main/Recent.svg'
import Store from '../assets/Main/Store.svg'
import Watch from '../assets/Main/Watch.svg'

import Perfume from '../assets/Main/Perfume.png'
import Sandalias from '../assets/Main/Sandalias.png'

import Stories from '../assets/Main/Stories.svg'
import Reel from '../assets/Main/Reel.svg'

import VideoCamera from '../assets/Main/VideoCamera.svg'
import Smile from '../assets/Main/Smile.svg'
import Fotos from '../assets/Main/Fotos.svg'

import love from '../assets/Emojis/love.png'
import like from '../assets/Emojis/like.png'

import Comment from '../assets/Main/comment.svg'
import Compartilhar from '../assets/Main/compartilhar.svg'

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

        <div className='w-[95%] min-h-[300px] bg-[#2D2E2F] rounded-md flex flex-col'>

          <div className='w-full h-[70px] flex flex-row items-center justify-around border-b-2 border-zinc-700'>

            <section className='border-b-2 border-blue-500 w-[40%] h-full flex justify-center items-center'>
              <img src={Stories} className='w-[40px] h-[40px]'/>
              <p className='font-semibold text-blue-500'>Stories</p>
            </section>

            <section className='w-[40%] h-full flex justify-center items-center'>
              <img src={Reel} className='w-[40px] h-[40px]'/>
              <p className=' font-semibold'>Stories</p>
            </section>

          </div>

          <div className='w-full h-[230px] flex items-center'>
            <div className='Stories w-full h-full flex flex-row items-center gap-3 overflow-x-scroll mb-2 pl-2 pr-2'>
              <section className='min-w-[120px] h-[200px] rounded-md'>

                <div className='w-full h-[150px] bg-slate-500 rounded-md'>

                </div>

                <div className='w-full h-[50px] bg-zinc-950  rounded-md'>

                </div>

              </section>

              <section className='min-w-[120px] h-[200px] rounded-md ' id='Stories1'>

                <div className='w-full h-full bg-transparent rounded-md'>
                  <section className='w-full h-full p-2 flex flex-col justify-between'>
                    <div className='w-[30px] h-[30px] bg-gray-600 rounded-full'>
                    </div>
                    <p className='text-center'> Nome de usuario</p>
                  </section >
                </div>

              </section>

              <section className='min-w-[120px] h-[200px] rounded-md bg-gray-950' id='Stories2'>

                <div className='w-full h-full bg-transparent rounded-md'>
                  <section className='w-full h-full p-2 flex flex-col justify-between'>
                    <div className='w-[30px] h-[30px] bg-gray-600 rounded-full'>
                    </div>
                    <p className='text-center'> Nome de usuario</p>
                  </section >
                </div> 

              </section>

              <section className='min-w-[120px] h-[200px] rounded-md bg-gray-950' id='Stories3'>

                <div className='w-full h-full bg-transparent rounded-md'>
                  <section className='w-full h-full p-2 flex flex-col justify-between'>
                    <div className='w-[30px] h-[30px] bg-gray-600 rounded-full'>
                    </div>
                    <p className='text-center'> Nome de usuario</p>
                  </section >
                </div>

              </section>

              <section className='min-w-[120px] h-[200px] rounded-md bg-gray-950' id='Stories4'>

                <div className='w-full h-full bg-transparent rounded-md'>
                  <section className='w-full h-full p-2 flex flex-col justify-between'>
                    <div className='w-[30px] h-[30px] bg-gray-600 rounded-full'>
                    </div>
                    <p className='text-center'> Nome de usuario</p>
                  </section >
                </div>

              </section>

              <section className='min-w-[120px] h-[200px] rounded-md bg-gray-950' id='Stories5'>

                <div className='w-full h-full bg-transparent rounded-md'>
                  <section className='w-full h-full p-2 flex flex-col justify-between'>
                    <div className='w-[30px] h-[30px] bg-gray-600 rounded-full'>
                    </div>
                    <p className='text-center'> Nome de usuario</p>
                  </section >
                </div>

              </section>

            </div>
          </div>

        </div>

        <div className='w-[95%] min-h-[150px] bg-[#2D2E2F] flex flex-col'>
          <div className='w-full h-[50%] flex justify-center'>
            <section className='w-[90%] h-full border-b-2 border-zinc-700 flex flex-row items-center justify-around'>
              <div className='w-[40px] h-[40px] bg-red-800 rounded-full'>
              </div>

              <input type='text' className='w-[80%] h-[40px] bg-[#3A3B3C] rounded-2xl p-3 focus:outline-none' placeholder='Oque esta passando na sua mente?'/>
            </section>
          </div>
          <div className='w-full h-[50%] flex justify-center items-center'>
            <div className='w-[70%] flex flex-row justify-between max-[550px]:justify-around max-[550px]:w-[80%]'>

              <section className='flex flex-row items-center gap-2'>
                <img src={VideoCamera} />
                <p className='font-semibold max-[550px]:hidden'>Live Video</p>
              </section>

              <section className='flex flex-row items-center gap-2'>
                <img src={Fotos} />
                <p className='font-semibold max-[550px]:hidden'>Photo/Video</p>
              </section>

              <section className='flex flex-row items-center gap-2'>
                <img src={Smile} />
                <p className='font-semibold max-[550px]:hidden'>Feeling/activity</p>
              </section>

            </div>
          </div>
        </div>

        <section className='w-[95%] min-h-auto bg-[#2D2E2F] flex flex-col items-center'>

          <div className='w-full h-[60px] p-2'>
            <section className='flex flex-row gap-3'>
              <div className='w-[40px] h-[40px] bg-slate-200 rounded-full'>
              </div>
              <div className='h-[40px] flex flex-col justify-center'>
                <p>Memes Group</p>
                <p>1h</p>
              </div>
            </section>
          </div>

          <div className='w-[500px] h-[500px] max-[550px]:w-full' id='Post1'>
          </div>

          <div className='w-full h-[50px] flex flex-row justify-between p-4 border-b-2 border-zinc-700'>
            <div className='flex flex-row gap-2'>
              <div className='flex flex-row '>
                <img src={love} className='w-[20px] h-[20px]'/>
                <img src={like} className='w-[20px] h-[20px]'/>
              </div>
              <p className='font-semibold'>268</p>
            </div>

            <div className='flex flex-row gap-2'>

              <div className='flex flex-row gap-1  items-center'>
                <p className='font-semibold'>39</p>
                <img src={Comment} className='w-[20px] h-[20px]'/>
              </div>

              <div className='flex flex-row gap-1 h-[20px] items-center'>
                <p className='font-semibold'>30</p>
                <img src={Compartilhar} className='w-[20px] h-[20px]'/>
              </div>
            </div>
          </div>

          <div className='w-full h-[50px] flex flex-row justify-around'>
            <section className='flex flex-row items-center gap-2'>
              <img src={like} className='w-[25px] h-[25px]'/>
              <p className='font-semibold'>Curtir</p>
            </section>

            <section className='flex flex-row items-center gap-2'>
              <img src={Comment} className='w-[25px] h-[25px]'/>
              <p className='font-semibold'>Comentar</p>
            </section>

            <section className='flex flex-row items-center gap-2'>
              <img src={Compartilhar} className='w-[25px] h-[25px]'/>
              <p className='font-semibold'>Compartilhar</p>
            </section>

          </div>

        </section>

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