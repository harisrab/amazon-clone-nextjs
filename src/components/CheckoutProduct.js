import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
	id,
	title,
	rating,
	price,
	description,
	category,
	image,
	hasPrime,
}) {
	const dispatch = useDispatch();

	// Push Item to Basket
	const addItemToBasket = () => {
		dispatch(
			addToBasket({
				id,
				title,
				rating,
				price,
				description,
				category,
				image,
				hasPrime,
			})
		);
	};

	const removeItemFromBasket = () => {
		dispatch(removeFromBasket({ id }));
	};

	return (
		<div className="grid grid-cols-5">
			<Image src={image} height={200} width={200} objectFit="contain" />

			{/* Middle Section */}
			<div className="col-span-3 mx-5">
				<p>{title}</p>
				<div className="flex my-2">
					{Array(rating)
						.fill()
						.map((_, i) => {
							return (
								<StarIcon
									key={i}
									className="h-5 text-yellow-500"
								/>
							);
						})}
				</div>
				<p className="text-xs mt-2 mb-2 my-2 line-clamp-3">
					{description}
				</p>

				<Currency quantity={price} />

				{hasPrime && (
					<div className="flex items-center space-x-2">
						<Image
							src="https://links.papareact.com/fdw"
							className="w-12"
							width={60}
							height={60}
							loading="lazy"
							alt=""
						/>

						<p className="text-xs text-gray-500">
							Free Next Day Delivery
						</p>
					</div>
				)}
			</div>

			<div className="flex flex-col space-y-4 my-auto justify-self-end">
				<button onClick={addItemToBasket} className="button mt-auto">
					Add To Basket
				</button>
				<button onClick={removeItemFromBasket} className="button">
					Remove From Basket
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
