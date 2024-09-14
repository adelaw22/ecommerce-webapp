// ProductList.tsx
import { useProductContext } from '@/contexts/productsContext';
import ProductCard from '@/components/productCard';
import { Product } from '@/types/global';

const ProductList: React.FC = () => {
    const { products }: { products: Product[] } = useProductContext();

    console.log(products);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((item: Product) => (
                <div key={item.id}>
                    <ProductCard productItem={item} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
