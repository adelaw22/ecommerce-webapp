"use client"

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartContextType, CartItem } from '@/types/global';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};

// Provider component
interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Add product to the cart
    const addToCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Remove product from the cart
    const removeFromCart = (id: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    // Increment the quantity of a product
    const incrementQuantity = (id: number) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrement the quantity of a product
    const decrementQuantity = (id: number) => {
        setCart(prevCart =>
            prevCart
                .map(item =>
                    item.id === id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    // total cost of all items in the cart
    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    //Total number of items in the cart
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const value: CartContextType = {
        cart,
        totalCost,
        totalItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
