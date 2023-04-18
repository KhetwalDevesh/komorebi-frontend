import ArrowDown from "./arrow-down";
import ArrowSmallRight from "./arrow-small-right";
import CartIcon from "./cart-icon";
import ExclamationTriangle from "./exclamation-triangle";
import MinusSmall from "./minus-small";
import PlusSmall from "./plus-small";
import Trash from "./trash";
import Xmark from "./x-mark";

type IconName =
	| "arrow-down"
	| "arrow-small-right"
	| "cart-icon"
	| "exclamation-triangle"
	| "minus-small"
	| "plus-small"
	| "trash"
	| "x-mark";

type IconsType = {
	[K in IconName]: JSX.Element;
};

const Icons: IconsType = {
	"arrow-down": <ArrowDown />,
	"arrow-small-right": <ArrowSmallRight />,
	"cart-icon": <CartIcon />,
	"exclamation-triangle": <ExclamationTriangle />,
	"minus-small": <MinusSmall />,
	"plus-small": <PlusSmall />,
	trash: <Trash />,
	"x-mark": <Xmark />,
};

type IconProps = {
	name: keyof typeof Icons;
};

const Icon = ({ name }: IconProps) => {
	return Icons[name];
};

export default Icon;
