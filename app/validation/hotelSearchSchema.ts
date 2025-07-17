// validation/hotelSearchSchema.ts
import { z } from "zod";

export const hotelSearchSchema = z.object({
  location: z.string().min(1, "Location is required"),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  guests: z.string().min(1, "Guest count is required"),
});

export type HotelSearchFormData = z.infer<typeof hotelSearchSchema>;
