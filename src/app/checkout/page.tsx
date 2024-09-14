import CheckoutForm from '@/components/checkoutForm';
import SectionContainer from '@/components/SectionContainer' ;


const Checkout=()=>{
    return(
        <SectionContainer>
            <div className='flex justify-center mb-5'>
                <h3 className="text-[24px] font-semibold">Checkout Form</h3>
            </div>

           <CheckoutForm/>
        </SectionContainer>
    )
}

export default Checkout;