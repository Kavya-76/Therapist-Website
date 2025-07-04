"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Please tell us a bit more (at least 10 characters)"),
  preferredTime: z
    .string()
    .min(3, "Please specify your preferred contact time"),
  agreeToContact: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted to submit this form",
  }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: "",
      agreeToContact: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast("Message sent! Thank you for reaching out. Dr. Blake will get back to you within one business day.",
  );
    form.reset();
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FEFEFE]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4 text-center" data-aos="fade">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8" data-aos="fade">
            Simply fill out the brief fields below and Dr. Serena will be in touch
            with you soon, usually within one business day. This form is safe,
            private, and completely free.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-aos="fade">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="(555) 234-5678"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      What brings you here?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="How can I help you?"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Preferred time to reach you
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <p className="text-sm text-gray-500 mt-1">
                      Let us know when you&apos;re typically available for a call or
                      consultation
                    </p>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreeToContact"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-gray-700 font-normal">
                        I agree to be contacted via phone, email, or text
                        message
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 text-lg font-medium"
              >
                Submit
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By clicking submit you consent to receive texts and emails from
                Dr. Serena Blake
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
