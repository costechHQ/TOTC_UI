import { z } from "zod";

// ================= LOGIN SCHEMA =================
export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),

  rememberMe: z.boolean(),
});

export type LoginFormData = z.infer<typeof loginSchema>;


// ================= SIGNUP SCHEMA =================
export const signupSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .min(3, "Username must be at least 3 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address format"),

    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Points the error flag directly at the confirmPassword input field
  });

export type SignupFormData = z.infer<typeof signupSchema>;
