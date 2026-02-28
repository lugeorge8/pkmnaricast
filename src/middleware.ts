import { NextRequest } from "next/server";
import { createSupabaseMiddlewareClient } from "@/lib/supabase/middleware";

export async function middleware(req: NextRequest) {
  // Protect investor routes
  if (!req.nextUrl.pathname.startsWith("/investor")) return;

  const { supabase, res } = createSupabaseMiddlewareClient(req);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", req.nextUrl.pathname);
    return Response.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ["/investor/:path*"],
};
