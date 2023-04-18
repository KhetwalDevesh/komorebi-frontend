import React from "react";
import Logo from "./Logo";
import Text from "./text";
import Icon from "./icons";
import { Link } from "react-router-dom";
import { getCartLength } from "../helpers";
import useGlobalStore from "../store";

const Header = () => {
	const { cart } = useGlobalStore();
	const itemsInCart = getCartLength(cart);
	return (
		<header className="p-[22px] flex items-center justify-between rounded-[26px] my-[18px] mx-[50px] bg-[#f5f5f5]">
			<Link to={"/"}>
				<Logo />
			</Link>
			<div className="flex flex-row items-center space-x-[38px]">
				<Link to={"/shop"}>
					<Text variant="caption-one">Shop</Text>
				</Link>
				<Link to={"/about"}>
					<Text variant="caption-one">About</Text>
				</Link>
				<Link to={"/cart"} className="relative">
					<Icon name="cart-icon" />
					<span className="absolute -right-1 -top-1 bg-black text-white text-xs rounded-full w-[16px] h-[16px] flex items-center justify-center ">
						{itemsInCart}
					</span>
				</Link>
			</div>
		</header>
	);
};

export default Header;
