import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";


const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-wrap max-xl:flex-col-reverse gap-10 max-container">
    
    <div className="flex-1" data-aos="fade-right" data-aos-duration="600">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full" />
    </div>
    
    <div className="flex flex-1 flex-col" data-aos="fade-in" data-aos-duration="700">
      <h2 className="font-palanquin capitalize font-bold text-4xl lg:max-w-lg">
        <span className="text-coral-red"> Special </span>
        Offer
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'> Embark on an exciting journey that redefines your experience with unbeatable deals. From top notch selections to incredible savings, we offer unparalled value that sets us apart</p>

      <p className="mt-6 lg:max-w-lg info-text"> Navigate a realm of possibilities designed to fulfill your unique desires. Your journey with us is nothing short of exceptional </p>

      <div className="mt-6 flex flex-wrap gap-4">
      <Button
        label= "Shop now"
        iconURL={arrowRight}
        />

        <Button
          label='Learn more'
          backgroundColor ='bg-white'
          borderColor = 'border-slate-gray'
          textColor = 'text-slate-gray'
        />

      </div>
    </div>
    </section>
  )
}

export default SpecialOffer