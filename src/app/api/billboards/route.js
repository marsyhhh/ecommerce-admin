import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const billboards = await prismadb.billboard.findMany()

    return NextResponse.json(billboards)
  } catch (error) {
    console.log("[BILLBOARDS_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
