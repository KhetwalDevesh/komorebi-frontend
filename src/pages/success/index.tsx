import { useEffect } from "react";
import useGlobalStore from "../../store";

const Success = () => {
	const { emptyCart } = useGlobalStore();

	useEffect(() => {
		emptyCart();
	}, []);

	return (
		<div className="h-screen flex items-center justify-center">Success</div>
	);
};

export default Success;
