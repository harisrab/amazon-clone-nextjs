import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function Checkout() {
	const items = useSelector(selectItems);

	const [session] = useSession();

	return (
		<div className="bg-gray-100">
			<Header />

			<main className="lg:flex max-w-screen-2xl mx-auto">
				{/* Left Section */}
				<div className="flex-grow m-5 shadow-sm">
					<Image
						src="https://links.papareact.com/ikj"
						width={1020}
						height={250}
						objectFit="contain"
					/>

					<div className="flex flex-col p-5 space-y-10 bg-white">
						<h1 className="text-3xl border-b pb-4">
							{items.length === 0 ? (
								<h1>Your Cart is Empty</h1>
							) : (
								<h1>Shopping Basket</h1>
							)}
						</h1>

						{items.map(
							(
								{
									id,
									title,
									rating,
									price,
									description,
									category,
									image,
									hasPrime,
								},
								i
							) => (
								<CheckoutProduct
									key={i}
									id={id}
									title={title}
									rating={rating}
									price={price}
									description={description}
									category={category}
									image={image}
									hasPrime={hasPrime}
								/>
							)
						)}
					</div>
				</div>

				{/* Right Section */}
				<div className="flex flex-col">
					{items.length > 0 && (
						<>
							<h2 className="whitespace-nowrap">
								Subtotal ({items.length} items):
								{/* <span className="font-bold"><Currency quantity={items.reduce()}/></span> */}
							</h2>

							<button
								className={`button mt-2 ${
									!session &&
									"bg-gray-300 border-gray-500 disabled hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 cursor-not-allowed max-w-max"
								}`}
							>
								{!session
									? "Sign in to checkout"
									: "Proceed to Checkout"}
							</button>
						</>
					)}
				</div>
			</main>
		</div>
	);
}

export default Checkout;
