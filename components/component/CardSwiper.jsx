'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';



const CardSwiper = () => {

    const cardData = [
      { image: 'https://lh3.googleusercontent.com/p/AF1QipO5h79VXD7WHii9BT8HKCrcut5VTmJgZ_Nsxchu=s680-w680-h510' },
      { image: 'https://lh3.googleusercontent.com/p/AF1QipOE8yIM3y21dm8YEsQz81RZSEEqFHwxBCiM1Cnk=s680-w680-h510' },
      { image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { image: 'https://images.pexels.com/photos/16148201/pexels-photo-16148201/free-photo-of-cocktail-and-orange-slices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

      { image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { image: 'https://images.pexels.com/photos/2336667/pexels-photo-2336667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { image: 'https://images.pexels.com/photos/1280364/pexels-photo-1280364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { image: 'https://lh3.googleusercontent.com/p/AF1QipPZBgPmBhwNRBwebUGfp3sAsnuxMiJHj2AOEuU3=s680-w680-h510' }, 
      ];
      
  return (
    <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper mt-4"
  >
   {cardData.map((card, index) => (
        <SwiperSlide className='' key={index}>
          <img
            src={card.image} 
            alt={`Card ${index + 1}`}
            className="object-cover h-full w-full"
          />
        </SwiperSlide>
      ))}
  </Swiper>
  )
}

export default CardSwiper