import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const Hero = () => {

  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full max-container justify-center flex flex-col xl:flex-row gap-10 min-h-screen"
    >
    <div
      className="xl:w-2/5 flex flex-col justify-center items-start w-full pt-28 relative max-xl:padding-x"
    >
      <p className='text-xl text-coral-red font-montserrat'> Our Summer Collection</p>
      <h1 className='mt-10 text-8xl font-palanquin max-sm:text-[72px] font-bold max-sm:leading-[1.2] aos-init'
       data-aos="fade-out" data-aos-duration='700'>
      <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
      <br/>
      <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
      </h1>
      <p className='text-slate-gray text-lg font-montserrat leading-8 mt-6 mb-10 sm:max-w-sm: aos-init' data-aos="fade-out" data-aos-duration='700'>
      Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
      
      <Button
        label= "Shop now"
        iconURL = {arrowRight}/>

      <div className='mt-20 flex flex-wrap w-full justify-start items-start gap-16'>
      {statistics.map((stat) => (
          <div key={stat.label}>
            <p className='font-bold font-palanquin text-4xl'>{stat.value}</p>
            <p className='font-montserrat text-slate-gray leading-7'>{stat.label}</p>
          </div>
      ))}
      </div>
    </div>

      <div className='relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center aos-init' data-aos='fade-in' data-aos-delay='650'>
          <img
            src={bigShoeImage}
            alt='shoe-collection'
            width={500}
            height={450}
            className='object-contain z-10 relative'
            />

          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 md:left-[20%]'>
            {shoes.map((shoe) =>(
              <div key={shoe}>
                <ShoeCard
                  imgURL = {shoe}
                  changeBigShoeImage = {(shoe) =>{
                    setbigShoeImage(shoe)
                  }}
                  bigShoeImage = {bigShoeImage}
                />
              </div>
            ))}
          </div>

      </div>

    </section>
  )
}

export default Hero