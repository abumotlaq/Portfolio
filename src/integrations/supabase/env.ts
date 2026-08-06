type SupabaseRuntime = "browser" | "server";

function missingEnvMessage(names: string[]): string {
  return `Missing Supabase environment variable(s): ${names.join(", ")}.`;
}

export function getSupabaseUrl(): string | undefined {
  return process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
}

export function getSupabaseAnonKey(): string | undefined {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_PUBLISHABLE_KEY;
}

export function getSupabaseServiceRoleKey(): string | undefined {
  return process.env.SUPABASE_SERVICE_ROLE_KEY;
}

export function resolveSupabaseConfig(runtime: SupabaseRuntime = "browser") {
  const url = getSupabaseUrl();
  const serviceRoleKey = runtime === "server" ? getSupabaseServiceRoleKey() : undefined;
  const anonKey = getSupabaseAnonKey();
  const key = serviceRoleKey ?? anonKey;

  const missing: string[] = [];
  if (!url) {
    missing.push("SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL");
  }
  if (!key) {
    missing.push(
      runtime === "server"
        ? "SUPABASE_SERVICE_ROLE_KEY, SUPABASE_PUBLISHABLE_KEY, or NEXT_PUBLIC_SUPABASE_ANON_KEY"
        : "NEXT_PUBLIC_SUPABASE_ANON_KEY or SUPABASE_PUBLISHABLE_KEY",
    );
  }

  if (missing.length > 0) {
    throw new Error(missingEnvMessage(missing));
  }

  return { url: url!, key: key! };
}
