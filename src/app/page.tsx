'use client'

// import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/productList";
import Link from "next/link";
import { useCartContext } from "@/contexts/cartContext";
import SectionContainer from '@/components/SectionContainer'


export default function Home() {
  const {totalItems, cart} = useCartContext()

  console.log(cart)

  return (
    <main>
      <SectionContainer>
          <div className='flex mb-5 justify-end'>
              <Button asChild >
            <Link href="/cart">{`Cart ${totalItems || 0}`}</Link>
          </Button>
          </div>
          

        <ProductList/>
      </SectionContainer>
    </main>
  );
}