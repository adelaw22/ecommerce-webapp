import { z } from 'zod';

export const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  cardNumber: z.string().min(16, "Card number must be at least 16 digits"),
});

export type CheckoutFormSchema = z.infer<typeof checkoutSchema>;
