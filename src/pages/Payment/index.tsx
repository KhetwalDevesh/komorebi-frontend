import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import React from "react";
import useGlobalStore from "../../store";
import CheckoutForm from "../../components/checkout-form";
import { Elements } from "@stripe/react-stripe-js";
import Text from "../../components/text";
import { getCartTotal } from "../../helpers";

// const stripePromise = loadStripe(
// 	"pk_test_51Mg6UGSCB333o0lIZra1AOi4Z2ED7CJHOp9ThNQJjSaBQjm5sLnWv3HXCrNVaAt9Waf947lhmFHxfFnpIeijrrIP002SFfhEao"
// );

const stripePromise = loadStripe(
	`${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`
);

console.log(import.meta);
console.log("stripePromise", JSON.stringify(stripePromise, null, 2));
const Payment = () => {
	const { cart, clientSecret } = useGlobalStore();

	const options: StripeElementsOptions = {
		clientSecret,
	};
	console.log("clientSecret", JSON.stringify(clientSecret, null, 2));
	const cartTotal = getCartTotal(cart);

	return (
		<div className="mx-[50px] my-[82px]">
			<div className="grid grid-cols-2 gap-40">
				<div className="max-w-2xl">
					{clientSecret && (
						<Elements options={options} stripe={stripePromise}>
							<CheckoutForm />
						</Elements>
					)}
				</div>
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

export default Payment;
