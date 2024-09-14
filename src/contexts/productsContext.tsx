"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {Product, ProductContextType} from '@/types/global'



const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = (): ProductContextType => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                if (Array.isArray(data.products)) {
                    setProducts(data.products);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (error) {
                setError((error as Error).message || 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const value: ProductContextType = {
        products,
        loading,
        error,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
