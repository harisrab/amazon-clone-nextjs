import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import axios from "axios";
import cache from "memory-cache";

export default function Home({ products }) {
	console.log(products);

	return (
		<div className="bg-gray-100">
			<Head>
				<title>Amazon 2.0</title>
			</Head>

			{/* Header */}
			<Header />

			<main className="max-w-screen-2xl mx-auto">
				{/* Banner */}
				<Banner />

				{/* Product Feed */}
				<ProductFeed products={products} />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const url = "https://fakestoreapi.com/products";
	let products = [];

	const cachedResponse = cache.get(url);

	if (cachedResponse) {
		products = cachedResponse;
	} else {
		const hours = 24;
		products = await axios.get(url).then((res) => res.data);
		cache.put(url, products, hours * 1000 * 60 * 60);
	}

	return {
		props: {
			products,
		},
	};
}
