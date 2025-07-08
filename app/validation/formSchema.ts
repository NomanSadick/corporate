import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  service: z.string().min(1, 'Service is required'),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email').optional(),
  destination: z.string().optional(),
  travelers: z.coerce.number().optional(),
  travelDate: z.string().optional(),
  note: z.string().optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
