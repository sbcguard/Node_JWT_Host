import { z } from 'zod';

// Define the regex pattern for the password requirement
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{10,}$/g;
const passwordLength = 10;
// Define the regex pattern for detecting email-like strings
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Define the regex pattern to disallow special characters and spaces
const noSpecialCharsOrSpacesRegex = /^[a-zA-Z0-9]*$/;

export const SignupSchema = z.object({
  name: z
    .string()
    .min(8, { message: 'User name must be at least 8 characters long' })
    .max(20, { message: 'User name cannot exceed 20 characters' })
    .refine((name) => !emailRegex.test(name), {
      message: 'User name cannot be an email address.',
    })
    .refine((name) => noSpecialCharsOrSpacesRegex.test(name), {
      message: 'User name cannot contain special characters or spaces.',
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(passwordLength, {
      message: `Password must be at least ${passwordLength} characters long`,
    })
    .refine((val) => passwordRegex.test(val ?? ''), {
      message:
        'Password must include at least one uppercase letter, one lowercase letter, and one special character',
    }),
});
