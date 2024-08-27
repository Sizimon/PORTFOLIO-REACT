import React from 'react'
import PortfolioImage from '../assets/image/portfolio.png'

export default function Hero() {
  return (
    <section id='hero' className='flex flex-col justify-center items-center'>
      <div className='mt-32'>
        <img src={PortfolioImage} className='w-40 h-40 mb-4'/>
      </div>
      <div className='m-2 text-center'>
        <h1 className='text-center text-MainLight font-Anton text-3xl'>Szymon Samus</h1>
        <h2 href='#about' className='text-center text-MainLight font-Anton text-lg'>Fullstack Developer</h2>
        <p className='font-WorkSans text-MainLight text-center mx-16'>Fullstack Developer who is constantly curious about learning new technologies and perfecting existing ones to help achieve client goals.</p>
        <div>
          <li className='flex flex-row list-none justify-between mx-16 mt-4 text-MainLight'>
            <ul>1</ul>
            <ul>2</ul>
            <ul>3</ul>
          </li>
        </div>
        <button className='bg-MainLight text-MainDark p-4 rounded-full font-WorkSans mt-2'>View My Projects</button>
      </div>
    </section>
  )
}
