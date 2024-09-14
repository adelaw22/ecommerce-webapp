import Image from "next/image"
import { Button } from "./ui/button"
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { CartItemProps } from "@/types/global";

const CartItem =({ removeFromCart, incrementQuantity, decrementQuantity, cart }: CartItemProps)=>{

    console.log(cart)

    return(
        <div>
            {cart.map((item)=>(
                <div className="flex mb-8" key={item.id}>
                    <Image src={item.thumbnail} width={150} height={200} alt={`Image of ${item.title}`}/>    

                    <div className='flex justify-between w-[90%]'>
                        <div className='content-center'>
                            <h3 className='font-semibold text-[20px] mb-8'>{item.title}</h3>
                            <div className="">
                                <Button onClick={()=>decrementQuantity(item.id)}><FaMinus/></Button>
                                <span className='mx-3'>{item.quantity}</span>
                                <Button onClick={()=>incrementQuantity(item.id)}><FaPlus/></Button>
                            </div>
                        </div>

                        <div className='content-center'>
                            <Button className='mb-8' onClick={()=>removeFromCart(item.id)}><IoTrashBin /></Button>
                            <h3 className='text-[18px]'>${item.price}</h3>
                        </div>

                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default CartItem