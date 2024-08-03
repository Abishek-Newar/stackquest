import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import  getOrCreateDatabase from "./models/server/dbSetup"
import  getOrCreateStorage from "./models/server/storage.collection"

export function middleware(request: NextRequest) {
    return NextResponse.next()
}

export const config = {
    //match all request paths except fo rthe ones that starts with
    // -api
    //_next/static
    //_next/image
    //favicon.com
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
}