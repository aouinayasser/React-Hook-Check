import ReactStars from "react-rating-stars-component";

export default function RateMovie ({ setRate }) {
    const ratingChanged = (newRating) => {
        console.log(newRating)
        return setRate(newRating)
      };
    return (
        <div>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
        </div>
    )
}