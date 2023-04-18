import React from "react";
import Text from "../../components/text";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import Icon from "../../components/icons";
import useGlobalStore from "../../store";
import { toast } from "react-hot-toast";
import { getCartTotal } from "../../helpers";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

type FormData = {
	name: string;
	email: string;
	city: string;
	address: string;
};

type OrderDetailsType = {
	user: {
		name: string;
		email: string;
	};
	deliveryAddress: {
		address: string;
		city: string;
	};
	orderItems: ICartItem[];
};

const ShippingAddress = () => {
	const {
		register,
		setValue,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<FormData>();
	const navigate = useNavigate();
	const { cart, addItemToCart, removeItemFromCart, updateClientSecret } =
		useGlobalStore();
	const onSubmit = handleSubmit(async (data) => {
		try {
			const { address, city, email, name } = getValues();
			const orderDetails: OrderDetailsType = {
				deliveryAddress: {
					address,
					city,
				},
				user: {
					email,
					name,
				},
				orderItems: cart,
			};

			const response = await axios.post("/orders", {
				...orderDetails,
			});
			// console.log(response);
			updateClientSecret(response.data.clientSecret);
			navigate("/checkout/payment");
		} catch (error) {
			console.log(error);
		}
	});
	console.log(errors);
	const cartTotal = getCartTotal(cart);
	return (
		<div className="mt-[82px] mx-[50px]">
			<Text variant="heading-three" className="mb-7">
				Shipping address
			</Text>
			<div className="grid grid-cols-2 gap-8">
				<form className="max-w-xl">
					<div className="flex flex-col items-start space-y-3 mt-7">
						<label htmlFor="name" className="text-base font-semibold">
							Name
						</label>
						<input
							id="name"
							type="text"
							placeholder="Name"
							{...register("name", {
								required: true,
								maxLength: 20,
							})}
							className={clsx(
								"p-5 rounded-[18px] border border-silver w-full",
								{
									"focus:outline-red focus:ring-red": errors.name,
								}
							)}
						/>
						{errors.name && (
							<span className="flex space-x-1">
								<Icon name="exclamation-triangle" />
								<span className="text-red">Required field</span>
							</span>
						)}
					</div>
					<div className="flex flex-col items-start space-y-3 mt-7">
						<label htmlFor="email" className="text-base font-semibold">
							Email
						</label>
						<input
							id="email"
							type="text"
							placeholder="Email"
							{...register("email", {
								required: true,
								maxLength: 20,
							})}
							className={clsx(
								"p-5 rounded-[18px] border border-silver w-full",
								{
									"focus:outline-red focus:ring-red": errors.email,
								}
							)}
						/>
						{errors.email && (
							<span className="flex space-x-1">
								<Icon name="exclamation-triangle" />
								<span className="text-red">Required field</span>
							</span>
						)}
					</div>

					<div className="flex flex-col items-start mt-7">
						<label htmlFor="city" className="text-base font-semibold mb-3">
							City
						</label>
						<input
							id="city"
							type="text"
							placeholder="city"
							{...register("city", {
								required: true,
								maxLength: 20,
							})}
							className={clsx(
								"p-5 rounded-[18px] border border-silver w-full",
								{
									"focus:outline-red focus:ring-red": errors.city,
								}
							)}
						/>
						{errors.city && (
							<span className="flex space-x-1 mt-3">
								<Icon name="exclamation-triangle" />
								<span className="text-red">Required field</span>
							</span>
						)}
					</div>

					<div className="flex flex-col items-start mt-7 w-full">
						<label htmlFor="address" className="text-base font-semibold mb-3">
							Address
						</label>
						<input
							id="address"
							type="text"
							placeholder="Address"
							{...register("address", {
								required: true,
								maxLength: 56,
							})}
							className={clsx(
								"p-5 rounded-[18px] border border-silver w-full",
								{
									"focus:outline-red focus:ring-red": errors.address,
								}
							)}
						/>
						{errors.address && (
							<span className="flex space-x-1 mt-3">
								<Icon name="exclamation-triangle" />
								<span className="text-red">Required field</span>
							</span>
						)}
					</div>
					<div className="flex justify-end mt-7">
						<Button onClick={onSubmit}>CONTINUE TO PAYMENT</Button>
					</div>
				</form>
				<div className="space-y-7">
					{cart.map((cartItem) => {
						return (
							<div className="flex items-start" key={cartItem.id}>
								<img
									src={cartItem.image}
									width={150}
									height={150}
									className="w-[150px] h-[150px] rounded-[18px] mr-[46px]"
									alt=""
								/>

								<div className="flex justify-between flex-1">
									<Text variant="subheading-three">{cartItem.name}</Text>
									<Text variant="subheading-three">
										$ {cartItem.price} X {cartItem.quantity}
									</Text>
								</div>
							</div>
						);
					})}
					<div className="mt-10 flex justify-between">
						<Text variant="body-three">Subtotal</Text>
						<Text variant="subheading-three">$ {cartTotal}</Text>
					</div>
					<div className="mt-10 flex justify-between">
						<Text variant="body-three">Shipping</Text>
						<Text variant="subheading-three">Free</Text>
					</div>
					<div className="mt-[46px] mb-10 h-[1.8px] bg-black"></div>
					<div className="mt-10 flex justify-between">
						<Text variant="body-three">Total</Text>
						<Text variant="subheading-three">$ {cartTotal}</Text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShippingAddress;
