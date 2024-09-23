import { SignupFormSchema, FormState } from "../lib/definitions";

export async function signup(state: FormState, formData: FormData) {
  const validatedData = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedData.success) {
    const errors = validatedData.error.flatten().fieldErrors;

    return {
      errors,
    };
  }
}
