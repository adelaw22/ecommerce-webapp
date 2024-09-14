'use client'
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema, CheckoutFormSchema } from '@/schemas/checkoutSchema';
import { useFormContext } from '@/contexts/formContext';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from '@/components/ui/button'


const CheckoutForm = () => {
  const { formData, setFormData } = useFormContext();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<CheckoutFormSchema> = (data) => {
    setFormData(data);
    alert("Checkout successful!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <Label>Name</Label>
        <Input {...register('name')} placeholder="Enter your name" />
        {errors.name && <span className='text-[red]'>{errors.name.message}</span>}
      </div>

      <div className='mb-4'>
        <Label>Email</Label>
        <Input {...register('email')} placeholder="Enter your email" />
        {errors.email && <span className='text-[red]'>{errors.email.message}</span>}
      </div>

      <div className='mb-4'>
        <Label>Address</Label>
        <Input {...register('address')} placeholder="Enter your address" />
        {errors.address && <span className='text-[red]'>{errors.address.message}</span>}
      </div>

      <div className='mb-4'>
        <Label>Card Number</Label>
        <Input {...register('cardNumber')} placeholder="Enter card number" />
        {errors.cardNumber && <span className='text-[red]'>{errors.cardNumber.message}</span>}
      </div>

      <Button type="submit">Make payment</Button>
    </form>
  );
};

export default CheckoutForm;
