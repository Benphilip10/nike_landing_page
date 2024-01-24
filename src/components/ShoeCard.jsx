
const ShoeCard = ({bigShoeImage, changeBigShoeImage, imgURL}) => {

    const handleClick = ()=> {
        if (bigShoeImage !== imgURL.bigShoe) {
            changeBigShoeImage (imgURL.bigShoe)
        }
    }


  return (
    <div
    className={`border-2 rounded-xl
     ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red':'border-none'} cursor-pointer max-sm:flex-1`}
    
    onClick={handleClick}
    >
        <div
        className="flex justify-center items-center bg-card bg-cover bg-center rounded-xl sm:h-40 sm:W-40 p-4"    
        >
            <img src={imgURL.thumbnail}
            className="object-contain"
            alt="shoe collection"
            width={127}
            height={103}
            />
       </div>
    </div>
  )
}

export default ShoeCard