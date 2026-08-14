import React, { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from 'next/link';
import { useRouter } from "next/router";


import { signupSchema, type SignupFormData } from "@/schemas/authSchema";

const Signup = () => {
     const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    try{
    console.log("Validated data:", data);

     await new Promise((resolve) => setTimeout(resolve, 1500)); 
      await router.push("/"); 
    } catch (error) {
      console.error("Signup submission failed:", error);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFFFFF] p-4 sm:p-6 lg:p-8">
      <div className="grid w-full max-w-250 overflow-hidden rounded-4xl bg-white shadow-xl lg:grid-cols-2">
        
        {/* ================= LEFT IMAGE ================= */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/signup.png"
            alt="Student"
            fill
            quality={100}
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay at bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="flex flex-col items-center justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-16">
          <div className="w-full max-w-sm">
            {/* Welcome text */}
            <p className="text-center text-xs font-medium text-[#696984]">
              Welcome to TOTC
            </p>

            {/* Toggle (Swapped active styling to Register) */}
            <div className="mx-auto mt-4 flex w-fit items-center rounded-full bg-[#49BBBD]/15 p-1">
              <Link
              href="/login">
              <button className="rounded-full px-7 py-2 text-xs font-semibold text-[#49BBBD] transition hover:bg-white/50">
                Login
              </button>
              </Link>
              <Link
              href="/signup" >
              <button className="rounded-full bg-[#49BBBD] px-7 py-2 text-xs font-semibold text-white shadow-sm transition">
                Register
              </button>
              </Link>
            </div>

            {/* Subtitle */}
            <p className="mt-5 text-center text-[11px] leading-relaxed text-[#696984] sm:text-xs">
              Mr. Cletus made us design this to showcase proficiency in Front-end Engineering.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block text-xs font-semibold text-[#2F327D]">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  {...register("username")}
                  className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#2F327D] placeholder:text-gray-400 outline-none transition focus:ring-2 ${
                    errors.username
                      ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                      : "border-gray-200 focus:border-[#49BBBD] focus:ring-[#49BBBD]/20"
                  }`}
                />
                {errors.username && (
                  <p className="mt-1 text-[11px] font-medium text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#2F327D]">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#2F327D] placeholder:text-gray-400 outline-none transition focus:ring-2 ${
                    errors.email
                      ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                      : "border-gray-200 focus:border-[#49BBBD] focus:ring-[#49BBBD]/20"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] font-medium text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-xs font-semibold text-[#2F327D]">
                  Password
                </label>
                <div className="relative mt-1.5">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    {...register("password")}
                    className={`w-full rounded-xl border bg-white px-4 py-2.5 pr-10 text-sm text-[#2F327D] placeholder:text-gray-400 outline-none transition focus:ring-2 ${
                      errors.password
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                        : "border-gray-200 focus:border-[#49BBBD] focus:ring-[#49BBBD]/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#49BBBD]"
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-[11px] font-medium text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-semibold text-[#2F327D]">
                  Confirm Password
                </label>
                <div className="relative mt-1.5">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your Password"
                    {...register("confirmPassword")}
                    className={`w-full rounded-xl border bg-white px-4 py-2.5 pr-10 text-sm text-[#2F327D] placeholder:text-gray-400 outline-none transition focus:ring-2 ${
                      errors.confirmPassword
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                        : "border-gray-200 focus:border-[#49BBBD] focus:ring-[#49BBBD]/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#49BBBD]"
                  >
                    {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-[11px] font-medium text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#49BBBD] py-2.5 mt-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#3aa8aa] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating account..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
