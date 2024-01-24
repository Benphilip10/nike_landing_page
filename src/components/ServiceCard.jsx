
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm-w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-12" data-aos='zoom-out'>
            
            <div className="w-11 h-11 items-center justify-center rounded-full flex bg-coral-red">
            <img
                src={imgURL}
                alt='label'
                width={24}
                height={24} />
            </div>

            <div>
            <h3 className="mt-5 font-palanquin text-2xl font-bold leading-normal">{label}</h3>
            <p className="font-montserrat mt-3 info-text break-words text-slate-gray">{subtext}</p>
            </div>
    </div>
  )
}

export default ServiceCard