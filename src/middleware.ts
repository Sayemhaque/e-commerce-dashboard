import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    const urlObject = new URL(request.url);
    const loginUrl = new URL("/login", urlObject.origin);
    loginUrl.searchParams.append(
      "redirect",
      decodeURIComponent(urlObject.pathname)
    );
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/profile"],
};
