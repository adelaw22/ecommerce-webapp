export interface Product {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    price: number;
    rating: number;
}

export interface ProductContextType {
    products: Product[];
    loading: boolean;
    error: string | null;
}
export interface ProductCardProps {
    productItem: Product;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    totalCost: number;
    totalItems: number;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
}

export interface CartItemProps{
    cart: CartItem[];
    removeFromCart: (id: number) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
}