import { z } from "zod";

export const signInScehma = z.object({
  indentifier: z.string(),
  password: z.string()

});


