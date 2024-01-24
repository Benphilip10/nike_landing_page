const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
   <button 
   className={`flex justify-center items-center gap-2 px-7 
   py-4 border font-montserrat leading-none 
   
   ${
    backgroundColor ? `${textColor} ${backgroundColor} ${borderColor}`: 
    "bg-coral-red text-white"} hover:drop-shadow-xl transition-all ease-in rounded-full

    ${fullWidth && `w-full`}

    `}
   >

        {label}
        {iconURL && <img src={iconURL}
          alt="arrow-left-icon"
          className="ml-2 rounded-full w-5 h-5"
        />}

   </button>
  )
}

export default Button