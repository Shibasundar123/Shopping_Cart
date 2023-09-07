import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4 h-[350px] ">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-xl font-semibold mb-4">Your Cart</div>
            <div className="mb-4">
              <div className="text-gray-600">Summary</div>
              <p className="text-sm">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="text-lg font-semibold mb-4 text-green-400">
              Total Amount: ${totalAmount}
            </div>

            <Link to={"/checkout"}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Checkout Now
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
