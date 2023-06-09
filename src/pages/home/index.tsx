import React, { useEffect, useState } from "react";
import Text from "../../components/text";
import Button from "../../components/button";
import Icon from "../../components/icons";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { fallbackProducts } from "../../constants";

const Home = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const navigateToShop = () => {
		navigate("/shop");
	};

	const getProducts = async () => {
		try {
			setLoading(true);
			const response = await axios.get("/products");
			console.log("response.data", JSON.stringify(response.data, null, 2));
			setProducts(response.data);
			setLoading(false);
		} catch (error) {
			console.log("error in getProducts", error);
			throw error;
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<section className="relative">
			<img
				className="absolute min-h-screen object-cover -top-[105px] -z-10 w-full"
				src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1681360256/komorebi-development/komorebi-img1_zcqdeh.png"
			/>
			<div className="mx-[50px] min-h-screen  flex flex-col justify-end items-start pb-80">
				<Text className="" variant="heading-two">
					HOODIE HEAVEN
				</Text>
				<Button
					className="mt-7"
					onClick={() => {
						navigateToShop();
					}}>
					<span className="flex">
						<Icon name="arrow-small-right" />
						<span className="ml-[10px]">Shop now</span>
					</span>
				</Button>
			</div>

			{loading ? (
				<div className="grid grid-cols-3 gap-[38px] mt-[200px] mx-[50px]">
					{fallbackProducts.slice(0, 3).map((productItem) => {
						return (
							<div
								key={productItem._id}
								className="rounded-[18px] flex items-center flex-col justify-center">
								<Text variant="heading-three">{productItem.name}</Text>
								<div className="bg-cream rounded-[18px] p-4 my-[32px]">
									<img
										width={368}
										height={368}
										className="w-[368px] h-[368px] object-cover"
										src={productItem.image}
										alt="image"
									/>
								</div>
								<Button className="mt-7" onClick={navigateToShop}>
									<span className="flex">
										<Icon name="arrow-small-right" />
										<span className="ml-[10px]">Shop now</span>
									</span>
								</Button>
							</div>
						);
					})}
				</div>
			) : (
				<div className="grid grid-cols-3 gap-[38px] mt-[200px] mx-[50px]">
					{products.slice(0, 3).map((productItem) => {
						return (
							<div
								key={productItem._id}
								className="rounded-[18px] flex items-center flex-col justify-center">
								<Text variant="heading-three">{productItem.name}</Text>
								<div className="bg-cream rounded-[18px] p-4 my-[32px]">
									<img
										width={368}
										height={368}
										className="w-[368px] h-[368px] object-cover"
										src={productItem.image}
										alt="image"
									/>
								</div>
								<Button className="mt-7" onClick={navigateToShop}>
									<span className="flex">
										<Icon name="arrow-small-right" />
										<span className="ml-[10px]">Shop now</span>
									</span>
								</Button>
							</div>
						);
					})}
				</div>
			)}

			<div className="mt-[180px] mx-[50px] max-w-3xl">
				<Text variant="heading-one">Komorebi Hoodies</Text>
				<Text variant="body-two">
					Our hoodies are crafted from high-quality materials and are designed
					to be both comfortable and stylish. We believe that fashion should be
					functional, and our hoodies are the perfect combination of both.
					Whether you're looking for something cozy to wear around the house or
					a statement piece to make a statement out in the world, we have you
					covered
				</Text>
			</div>
			<div className="mt-[82px] mb-[180px] relative">
				<img
					className="h-[768px] aspect-[1.6] w-full object-cover"
					src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1681526232/komorebi-development/young-person-wearing-hoodie-mockup_2_1_bhc6x9.png"
					alt="learn-more-image"
				/>
				<Button className="absolue bottom-20 left-[45%]">
					<span className="flex">
						<Icon name="arrow-small-right" />
						<span className="ml-[10px]">Learn More</span>
					</span>
				</Button>
			</div>
		</section>
	);
};

export default Home;
