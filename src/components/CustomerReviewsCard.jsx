import { star } from "../assets/icons"

const CustomerReviewsCard = ({imgURL, rating, feedback, customerName}) => {
  return (
    <div className="flex justify-center items-center flex-col" data-aos="zoom-in-right" data-aos-duration="800">
    <img
        src={imgURL}
        alt="customer-image"
        className="rounded-full object-cover"
        width={100}
        height={100}
    />
    <h3 className="mt-3 font-palanquin text-2xl text-center font-bold">{customerName}</h3>
    <p className="max-w-sm text-center info-text mt-2">{feedback}</p>

    <div className="flex gap-3 mt-3 items-center justify-center">
        <img src={star} width={22} height={22}/>
        <p className="text-lg font-montserrat text-slate-gray">({rating})</p>
    </div>
    </div>
  )
}

export default CustomerReviewsCard