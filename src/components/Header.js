import Image from "next/image";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
	return (
		<header>
			{/* Upper Section */}
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				{/* Logo */}
				<div className="mt-2 mb-1 flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="/amazon-logo.png"
						height={35}
						width={150}
						objectFit="contain"
						className="cursor-pointer"
					/>
				</div>

				{/* Search Bar */}
				<div className="hidden sm:flex h-9 -mt-1 flex-grow focus-within:outline-none rounded focus-within:ring focus-within:ring-yellow-500 focus-within:ring-opacity-100">
					<input
						type="text"
						className="flex flex-grow rounded-l p-2 flex-shrink cursor-text focus:outline-none"
					/>
					<SearchIcon className="h-9 w-12 p-2 bg-yellow-400 cursor-pointer hover:bg-yellow-500 rounded-r" />
				</div>

				{/* Right Section */}
				<div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div className="link">
						<p>Hello Haris Rashid</p>
						<p className="font-extrabold md:text-sm">
							Account & Lists
						</p>
					</div>
					<div className="link">
						<p>Returns</p>
						<p className="font-extrabold md:text-sm">& Orders</p>
					</div>
					<div className="relative link flex items-center">
						<span className="absolute bg-yellow-400 rounded-full h-4 w-4 text-center text-black top-0 right-0 md:right-11 font-bold">
							5
						</span>

						<ShoppingCartIcon className="h-8" />
						<p className="hidden md:inline font-extrabold md:text-sm mt-2">
							Basket
						</p>
					</div>
				</div>
			</div>

			{/* Lower Section */}
			<div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
				<p className="link flex items-center">
					<MenuIcon className="h-6 mr-3" /> All
				</p>
				<p className="link">Prime Video</p>
				<p className="link">Today's Deal</p>
				<p className="link hidden lg:inline">Electronics</p>
			</div>
		</header>
	);
}

export default Header;
