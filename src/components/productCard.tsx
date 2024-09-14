// ProductCard.tsx
import Image from 'next/image';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ProductCardProps } from '@/types/global';
import { useCartContext } from '@/contexts/cartContext';

const ProductCard: React.FC<ProductCardProps> = ({ productItem}) => {
    const {addToCart} = useCartContext()

    return (
        <Card className='p-3'>
            <Image className='mx-auto' src={productItem.thumbnail} width={250} height={200} alt={`Image of ${productItem.title}`} />

            <div className='flex justify-between my-2'>
                <h4 className='text-[20px] max-w-[60%]'>{productItem.title}</h4>
                <div className="rating">
                    {productItem.rating ? `Rating: ${productItem.rating}` : 'No rating available'}
                </div>
            </div>

            <p>{productItem.description}</p>
            
            <div className='flex justify-between my-3'>
                <Button variant={'outline'}>${productItem.price}</Button>
                <Button onClick={()=>addToCart(productItem)}>ADD TO CART</Button>
            </div>
        </Card>
    );
};

export default ProductCard;
