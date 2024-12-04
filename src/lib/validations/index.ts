import * as z from "zod";

// ============================================================
// USER
// ============================================================

export const signUpValidation = z
  .object({
    firstname: z.string().min(1, { message: "First name is required" }),
    lastname: z.string().min(1, { message: "Last name is required" }),
    email: z.string().min(1, { message: "Email name is required" }),
    password: z.string().min(1, { message: "Password is required" }),
    confirmpass: z.string().min(1, { message: "Confirm password is required" }),
    isagree: z.boolean().default(false).refine((value) => value === true, {
        message: "You must agree to the terms and conditions"}),
  }).refine((data) => data.password === data.confirmpass, {message: "Passwords are not identical", path: ["confirmpass"]});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});
