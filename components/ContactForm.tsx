"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitContactFormMutation } from "@/services/formApi";
import {
  contactFormSchema,
  ContactFormSchema,
} from "@/app/validation/formSchema";

export default function ContactForm() {
  const [submitContactForm, { isLoading }] = useSubmitContactFormMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    console.log("Form submitted:", data);
    try {
      await submitContactForm(data).unwrap();
      reset();
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  return (
    <section className=" py-12">
      <div className="container-custom mx-auto px-4">
        <div className="bg-gradient-to-b from-[#010020]/75 to-[#055469]/75  shadow-lg rounded-xl p-8">
          <h2 className="text-[32px] leading-[40px] md:text-[64px] md:leading-[80px] font-semibold text-center text-white pb-8">
            {/* Mobile Text */}
            <span className="block md:hidden">What We Offer</span>

            {/* Desktop Text */}
            <span className="hidden md:block">Get in touch with us</span>
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 px-4 md:px-16"
          >
            {/* Row 1 - Name and Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <input
                  {...register("name")}
                  placeholder="Name*"
                  className="w-full px-2 md:px-4 py-2 bg-slate-500/50 text-white placeholder-gray-300 border border-slate-500 rounded "
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("service")}
                  placeholder="Service"
                  className="w-full px-2 md:px-4 py-2 bg-slate-500/50 text-white placeholder-gray-300 border border-slate-500 rounded "
                />
                {errors.service && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2 - Phone and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone*"
                  className="w-full px-2 md:px-4 py-2 bg-slate-500/50 text-white placeholder-gray-300 border border-slate-500 rounded "
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                  className="w-full px-2 md:px-4 py-2 bg-slate-500/50 text-white placeholder-gray-300 border border-slate-500 rounded "
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3 -  Travel Date and Number of Travelers */}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <input
                  {...register("travelers")}
                  type="number"
                  placeholder="No of Travelers"
                  className="w-full px-2 md:px-4 py-2 bg-slate-500/50 text-white placeholder-gray-300 border border-slate-500 rounded "
                />
              </div>
              <div>
                <input
                  {...register("travelDate")}
                  type="date"
                  placeholder="Travel Date"
                  className="w-full px-2 md:px-4 py-2 bg-slate-500/50 text-white placeholder-gray-300 border border-slate-500 rounded [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Row 4 - Destination and Additional Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <input
                  {...register("destination")}
                  placeholder="Destination"
                  className="w-full px-2 md:px-4 py-2 bg-slate-500/50 text-white placeholder-gray-300 border border-slate-500 rounded "
                />
              </div>

              <div>
                <textarea
                  {...register("note")}
                  placeholder="Additional Notes"
                  rows={1}
                  className="w-full px-2 md:px-4 py-2 bg-slate-500/50 text-white placeholder-gray-300 border border-slate-500 rounded resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center ">
              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-3 md:py-2 md:px-14 rounded-md text-sm "
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Your Query"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
