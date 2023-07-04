import React, { useEffect, useState } from "react";
import Text from "../../components/text";
import axios from "../../api/axios";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import useGlobalStore from "../../store";
import { toast } from "react-hot-toast";

const Shop = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const { cart, addItemToCart } = useGlobalStore();
	const navigate = useNavigate();
	const getProducts = async () => {
		try {
			const response = await axios.get("/products");
			setProducts(response.data);
			// console.log(...response.data);
		} catch (error) {
			console.log("error in NAME", error);
			throw error;
		}
	};

	useEffect(() => {
		getProducts();
	}, []);
	console.log("products", JSON.stringify(products, null, 2));
	return (
		<>
			<section className="relative w-full h-[768px] flex items-end">
				<img
					className="absolute -z-10 aspect-[1.6] object-cover -top-[168px]"
					src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1681526232/komorebi-development/young-person-wearing-hoodie-mockup_2_1_bhc6x9.png"
					alt=""
				/>
				<div className="mx-[50px] mb-40">
					<Text variant="heading-three" className="mb-3">
						Latest hoodie styles online
					</Text>
					<Text variant="body-two">Suit your unique preferences</Text>
				</div>
			</section>
			<section className="mt-[50px] mx-[50px] bg-white">
				<Text variant="heading-one" className="mt-[82px]">
					Experience comfort and style
				</Text>
				<Text variant="body-two" className="mb-[80px]">
					Perfect blend of comfort, style and quality materials
				</Text>
				<div className="grid grid-cols-3 gap-[38px] mb-[180px] mt-[40px]">
					{products.map((productItem) => {
						return (
							<div className="" key={productItem._id}>
								<Link to={`/shop/${productItem._id}`}>
									<div className="rounded-[18px] w-fit">
										<img
											src={productItem.image}
											width={368}
											height={368}
											className="w-[368px] h-[368px]"
										/>
									</div>
								</Link>
								<Text variant="heading-three" className="mt-7 mb-2">
									{productItem.name}
								</Text>
								<Text variant="body-three">$ {productItem.price}</Text>
								<Button
									size="small"
									className="mt-7"
									onClick={() => {
										const cartItem: RawCartItem = {
											name: productItem.name,
											image: productItem.image,
											price: productItem.price,
											product: productItem._id,
										};
										addItemToCart(cartItem);
										toast.success("Item added to cart");
									}}>
									Add to bag
								</Button>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Shop;
