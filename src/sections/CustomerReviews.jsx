import CustomerReviewsCard from "../components/CustomerReviewsCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold" data-aos="fade-in" data-aos-duration="500">What our <span className="text-coral-red"> Customers </span> say</h3>

      <p className="info-text text-center max-w-lg mt-4 m-auto" data-aos="fade-in" data-aos-duration="500">Hear genuine stories from our satisfied customers about their exceptional experiences with us</p>

    <div className="mt-20 flex flex-1 items-center justify-evenly max-lg:flex-col gap-14">
    
    {reviews.map((review, index) => (
        <CustomerReviewsCard
          key={index}
          {...review}
        />
    ))}
    </div>

    </section>
  )
}

export default CustomerReviews