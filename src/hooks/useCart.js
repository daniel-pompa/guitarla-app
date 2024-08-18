import { useEffect, useMemo, useState } from 'react';
import { guitarData } from '../data/data';

/**
 * Custom hook to manage the shopping cart.
 *
 * This hook provides functionality to add, remove, and update items in the cart,
 * as well as manage cart persistence with localStorage and compute derived cart states.
 *
 * @returns {Object} The cart management functions and state.
 * @returns {Array} data - The list of available guitar data.
 * @returns {Array} cart - The current items in the shopping cart.
 * @returns {Function} addToCart - Function to add an item to the cart.
 * @returns {Function} removeFromCart - Function to remove an item from the cart.
 * @returns {Function} increaseQuantity - Function to increase the quantity of an item in the cart.
 * @returns {Function} decreaseQuantity - Function to decrease the quantity of an item in the cart.
 * @returns {Function} clearCart - Function to remove all items from the cart.
 * @returns {boolean} isEmpty - Boolean indicating if the cart is empty.
 * @returns {number} calculateCartTotal - Total price of all items in the cart.
 */
export const useCart = () => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data, setData] = useState([]);
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEM_QUANTITY = 5;
  const MIN_ITEM_QUANTITY = 1;

  useEffect(() => {
    setData(guitarData);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  /**
   * Adds an item to the shopping cart.
   * If the item already exists in the cart, it increments the quantity of that item.
   * If the item is not in the cart, it adds it to the cart with an initial quantity of 1.
   *
   * @param {Object} item - The item to add to the cart.
   * @param {number} item.id - The unique identifier for the item.
   * @param {number} [item.quantity] - The quantity of the item.
   *
   * @returns {void}
   */
  const addToCart = item => {
    const itemInCart = cart.findIndex(cartItem => cartItem.id === item.id);

    if (itemInCart >= 0) {
      if (cart[itemInCart].quantity >= MAX_ITEM_QUANTITY) return;
      const updatedCart = [...cart];
      updatedCart[itemInCart].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  };

  /**
   * Removes an item from the shopping cart by its ID.
   *
   * This function filters out the item with the specified ID from the current cart and updates the cart state with the remaining items.
   *
   * @param {number|string} id - The ID of the item to be removed from the cart.
   * @returns {void} This function does not return a value.
   */
  const removeFromCart = id => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  /**
   * Increases the quantity of an item in the cart by one.
   *
   * @param {number|string} id - The unique identifier of the item to increase the quantity of.
   * @returns {void}
   */
  const increaseQuantity = id => {
    const itemInCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEM_QUANTITY) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(itemInCart);
  };

  /**
   * Decreases the quantity of an item in the cart by one.
   *
   * @param {number|string} id - The unique identifier of the item to decrease the quantity of.
   */
  const decreaseQuantity = id => {
    const itemInCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEM_QUANTITY) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(itemInCart);
  };

  /** Removes all items from the cart. */
  const clearCart = () => {
    setCart([]);
  };

  // Derived state: Check if the cart is empty
  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  // Derived state: Calculate the total price of all items in the cart
  const calculateCartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    calculateCartTotal,
  };
};
