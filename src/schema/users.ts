import { z } from 'zod';

// Define the regex pattern for the password requirement
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{10,}$/g;
const passwordLength = 10;

export const SignupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(
      passwordLength,
      `Password must be at least ${passwordLength} characters long`
    )
    .refine(
      (val) => passwordRegex.test(val ?? ''),
      'Password must include at least one uppercase letter, one lowercase letter, and one special character'
    ),
});
