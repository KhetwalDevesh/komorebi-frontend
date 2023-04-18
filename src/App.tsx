import { useState } from "react";
import Text from "./components/text";
import Button from "./components/button";
import Icon from "./components/icons";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Cart from "./pages/cart";
import About from "./pages/about";
import Home from "./pages/home";
import Shop from "./pages/shop";
import ProductDetails from "./pages/ProductDetails";
import ShippingAddress from "./pages/ShippingAddress";
import Payment from "./pages/Payment";
import Success from "./pages/success";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
			{
				path: "/shop/:id",
				element: <ProductDetails />,
			},
			{
				path: "/checkout/shipping",
				element: <ShippingAddress />,
			},
			{
				path: "/checkout/payment",
				element: <Payment />,
			},
			{
				path: "/success",
				element: <Success />,
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;

{
	/* <Inspx>
				<Header />
				<img
					className="absolute -top-10 -z-10"
					src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1681360256/komorebi-development/komorebi-img1_zcqdeh.png"
					alt=""
				/>
			</Inspx> */
}
