interface IProduct {
	_id: string;
	name: string;
	image: string;
	description: string;
	price: number;
}

interface ICartItem {
	id: string;
	name: string;
	image: string;
	price: number;
	quantity: number;
	product: string;
}

type RawCartItem = Pick<ICartItem, "image" | "name" | "product" | "price">;
