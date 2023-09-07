import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const truncateDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 20) {
    return words.slice(0, 20).join(" ") + " ...";
  }
  return description;
};

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="h-[250px] w-[350px] border-b-2 mt-2">
      <div className="flex gap-6">
        <div>
          <img
            src={item.image}
            alt={item.title}
            className="h-[150px] w-[200px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">{item.title}</h1>
          <h1 className="text-xs text-gray-700">
            {truncateDescription(item.description)}
          </h1>
          <div className="flex flex-row items-center justify-between">
            <p className="text-green-500">${item.price}</p>
            <div onClick={removeFromCart}>
              <AiFillDelete  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
 