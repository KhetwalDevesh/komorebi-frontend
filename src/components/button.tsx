import React, { ReactNode } from "react";
import clsx from "clsx";

type Size = "small" | "large";
type Variant = "primary" | "secondary";

const sizes: Record<Size, string> = {
	large:
		"py-5 px-20 rounded-[18px] bg-violet-blue hover:bg-periwinkle hover:text-raisin-black duration-700 transition-all text-white uppercase text-base font-semibold text",
	small:
		"px-[18px] py-5 rounded-[18px] bg-violet-blue hover:bg-periwinkle hover:text-raisin-black duration-700 transition-all text-white uppercase text-base font-semibold",
};

// const variants: Record<Variant, string> = {
// 	primary: "bg-violet-blue text-white",
// 	secondary: "bg-periwinkle text-raisin-black",
// };

// type Person = {
// 	username: string;
// 	email: string;
// 	isLoggedIn: boolean;
// };

// const person: Person = {
// 	username: "",
// 	email: "",
// 	isLoggedIn: false,
// };

type ButtonProps = {
	children?: ReactNode | ReactNode[];
	size?: Size;
	variant?: Variant;
} & JSX.IntrinsicElements["button"];

const Button = ({
	children,
	size = "small",
	variant = "primary",
	disabled,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			className={clsx(
				sizes[size],
				{
					"bg-silver hover:bg-silver hover:text-white cursor-not-allowed":
						disabled,
				},
				className
			)}
			disabled={disabled}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
