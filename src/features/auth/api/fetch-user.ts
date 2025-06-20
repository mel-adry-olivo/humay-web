import { getSupabaseClient } from "@/app/supabase";
import { User, userSchema } from "@/lib/schemas/user";
import { Result } from "@/lib/types";

export async function fetchUserWithRoles(username: string): Promise<Result<User>> {
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.rpc("fetch_user_by_username", {
    arg: username
  });

  if (error) {
    console.error("Supabase error:", error);
    return { data: null, error: error };
  }

  const result = userSchema.safeParse(data);

  if (!result.success) {
    console.error("User not found");
    return { data: null, error: new Error("User not found") };
  }

  return { data: result.data, error: null };
}
