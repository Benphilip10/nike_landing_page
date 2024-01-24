// import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="max-lg:flex-col max-container w-full gap-10 flex justify-between items-center"
    >
    <div
      className="flex flex-1 flex-col" data-aos='fade-up' data-aos-duration="600">
      <h2 className="font-palanquin capitalize font-bold text-4xl lg:max-w-lg">
        We provide you
        <span className="text-coral-red"> Super</span>
        <span className="text-coral-red"> Quality </span>
        Shoes
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our carefully crafted footwear 
      is designed to elevate your wearing experience, providing you with unmatched quality and a touch of style</p>

      <p className="mt-6 lg:max-w-lg info-text"> Our dedication to detail and excellence ensures your satisfaction</p>

      <div className="mt-6">
      <Button
        label= "View details"
        // iconURL={arrowRight}
        />
      </div>
    </div>

      <div className="flex-3 flex justify-center items-center" data-aos='zoom-out'>
        <img
          src={shoe8}
          alt="shoe8"
          width={520}
          height={450}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality