import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xpyilzprpomzultikekk.supabase.co/rest/v1/";
const supabaseAnonKey = "sb_publishable_R0tmuL3xh3obJQqJ_Yl5Vw_O8dqze3p";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Next.js environment variables for Supabase: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
