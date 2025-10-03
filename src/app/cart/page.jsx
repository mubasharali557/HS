"use client";
import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Remove from cart and update localStorage
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Total Price Calculation
  const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

  // WhatsApp order message
  const getWhatsAppLink = () => {
    const phone = "923001234567"; // <-- yahan apna WhatsApp number add karo (92 se start)
    const orderDetails = cart
      .map((item) => `${item.name} - Rs.${item.price}`)
      .join("\n");
    const message = `Hello, I want to place an order:\n\n${orderDetails}\n\nTotal: Rs.${totalPrice}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md border"
                    />
                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-gray-600">Rs. {item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>Rs. {totalPrice}</span>
              </div>

              {/* Checkout Button */}
              <button className="w-full mt-4 px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
                Proceed to Checkout
              </button>

              {/* WhatsApp Button */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
              >
                📲 Order via WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
