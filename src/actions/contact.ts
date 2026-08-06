"use server";

import { createClient } from "@supabase/supabase-js";
import { contactMessageSchema, type ContactMessageInput } from "@/lib/contact-schema";
import { createSupabaseFetch } from "@/integrations/supabase/fetch";
import { resolveSupabaseConfig } from "@/integrations/supabase/env";
import type { Database } from "@/integrations/types";

export type ContactActionResult =
  | { ok: true }
  | { ok: false; error: string };

function createContactSupabaseClient() {
  const { url, key } = resolveSupabaseConfig("server");

  return createClient<Database>(url, key, {
    global: {
      fetch: createSupabaseFetch(key),
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function submitContactMessage(input: ContactMessageInput): Promise<ContactActionResult> {
  const parsed = contactMessageSchema.safeParse(input);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Invalid form data";
    return { ok: false, error: firstIssue };
  }

  try {
    const supabase = createContactSupabaseClient();
    const { error } = await supabase.from("contact_messages").insert(parsed.data);

    if (error) {
      console.error("[contact] Supabase insert failed:", error);
      return {
        ok: false,
        error: "Could not send your message. Please try again in a moment.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("[contact] Unexpected submission error:", error);
    const message =
      error instanceof Error && error.message.includes("Missing Supabase environment variable")
        ? "Contact form is temporarily unavailable. Please email me directly."
        : "Something went wrong while sending your message. Please try again.";

    return { ok: false, error: message };
  }
}
