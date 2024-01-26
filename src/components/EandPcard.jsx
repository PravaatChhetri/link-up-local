import { Link } from "react-router-dom";

const RestaurantCard = ({
  name,
  image,
  rating,
  reviews,
  pricing,
  type,
  place,
  phone_number,
}) => {
  const star = "★".repeat(Math.floor(rating));
  const expense = "$".repeat(pricing);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-[300px] h-[200px] object-cover transition duration-300 ease-in-out hover:scale-110" src={image} alt="Sushi" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {rating}
          <span className="text-green-500">{star}</span>
          {"(" + reviews + ")"}
        </p>
        <p className="text-gray-700 text-base">
          {type} • {expense}
        </p>
        <p className="text-gray-700 text-base">{place}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Link href={`https://wa.me/${phone_number}`}>Call Now</Link>
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
