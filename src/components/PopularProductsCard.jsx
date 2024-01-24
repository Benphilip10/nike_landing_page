import { star } from "../assets/icons"


const PopularProductsCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full" data-aos='zoom-in' data-aos-duration='800'>
    <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px]"
    />

    <div className="mt-8 flex justify-start gap-2.5">
            <img
                src={star} alt="ratings" width={20} height={20}
            />
            <p className="text-slate-gray font-montserrat text-base">(4.5)</p>
    </div>

        <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">{name}</h3>
        <p className="mt-1 font-montserrat text-coral-red text-lg font-semibold leading-normal">{price}</p>

    </div>
  )
}

export default PopularProductsCard