import React, { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginFormData } from "@/schemas/authSchema";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

   const onSubmit = async (data: LoginFormData) => {
    console.log("Validated data:", data);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFFFFF] p-4 sm:p-6 lg:p-8">
      <div className="grid w-full max-w-250 overflow-hidden rounded-4xl bg-white shadow-xl lg:grid-cols-2">
        
        <div className="relative hidden lg:block">
          <Image
            src="/images/student1.png"
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
              Welcome to lorem..!
            </p>

            {/* Toggle */}
            <div className="mx-auto mt-4 flex w-fit items-center rounded-full bg-[#49BBBD]/15 p-1">
              <button className="rounded-full bg-[#49BBBD] px-7 py-2 text-xs font-semibold text-white shadow-sm transition">
                Login
              </button>
              <button className="rounded-full px-7 py-2 text-xs font-semibold text-[#49BBBD] transition hover:bg-white/50">
                Register
              </button>
            </div>

            {/* Subtitle */}
            <p className="mt-5 text-center text-[11px] leading-relaxed text-[#696984] sm:text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            {/* Form */}
            <form
  onSubmit={handleSubmit(onSubmit)}
  className="mt-6 space-y-4"
>
              {/* User name */}
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

              {/* Password */}
             <div>
  <label
    htmlFor="password"
    className="block text-xs font-semibold text-[#2F327D]"
  >
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
      <FiEye size={18} />
    </button>
  </div>

  {errors.password && (
    <p className="mt-1 text-[11px] font-medium text-red-500">
      {errors.password.message}
    </p>
  )}
</div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    className="h-3.5 w-3.5 rounded border-gray-300 text-[#49BBBD] accent-[#49BBBD] focus:ring-[#49BBBD]"
                  />
                  <span className="text-[11px] font-medium text-[#696984]">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-[11px] font-medium text-[#696984] underline underline-offset-2 transition hover:text-[#49BBBD]"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit */}
             <button
  type="submit"
  disabled={isSubmitting}
  className="w-full rounded-full bg-[#49BBBD] py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#3aa8aa] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSubmitting ? "Logging in..." : "Login"}
</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;