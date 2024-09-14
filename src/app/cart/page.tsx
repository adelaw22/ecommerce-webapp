"use client"

import CartItem from "@/components/cartItem";
import { useCartContext } from "@/contexts/cartContext";
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import SectionContainer from '@/components/SectionContainer' ;



export default function Cart(){
    const { cart, totalCost, removeFromCart, incrementQuantity, decrementQuantity  } = useCartContext();
    return(
        
        <SectionContainer>
             <div className='flex justify-center mb-5'>
                <h3 className="text-[24px] font-semibold">Shopping cart</h3>
            </div>

            <CartItem removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} cart={cart} decrementQuantity={decrementQuantity} />

            <div className='flex justify-between my-6'>
                <h4 className="text-[24px] font-semibold">Total cost:</h4>
                <p className='text-[24px]'>${totalCost}</p>
            </div>

            <div className='flex justify-end'>
                <Button asChild>
                    <Link href='/checkout'>Checkout</Link>
                </Button>
            </div>
        </SectionContainer>
        
    )
}