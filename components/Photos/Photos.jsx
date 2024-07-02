import React from 'react'
import CardSwiper from '../component/CardSwiper'

const Photos = () => {
  return (
    <section id='photos' className='w-full py-12 md:py-24 lg:py-32 bg-opacity-30 backdrop-blur-lg bg-gray-300 shadow-lg  border border-opacity-20 border-white rounded-md'>
    <div className='md:hidden'>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Photos</h2>
     <CardSwiper/>
    </div>
    </section>
  )
}

export default Photos