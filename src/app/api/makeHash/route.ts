import { NextRequest, NextResponse } from "next/server";
import { LimitChecker } from "@/modules/limitChecker";
import { headers } from "next/headers";
import crypto from "crypto";

const limitChecker = LimitChecker();
export async function GET(req: NextRequest) {
  // ipの取得
  const headersList = headers();
  const ip = (await headersList).get("X-Forwarded-For");
  if (!ip) {
    return NextResponse.json({ ok: false, error: "not found your IP" }, { status: 400 });
  }
  // 毎分100requestの制限.
  try {
    await limitChecker.check(50, ip);
  } catch {
    return NextResponse.json({
      ok: false,
      error: "Too many requests",
    }, { status: 429 });
  }

  const pass = req.nextUrl.searchParams.get("pass");
  if (!pass) {
    return NextResponse.json({ ok: false, error: "Missing required key" }, { status: 400 });
  }
  const salt = process.env.salt;
  const salt_pass = pass + salt;
  let hash = salt_pass;
  for (let i = 0; i < 16; i++) {
    hash = crypto.createHash('sha256').update(hash).digest('hex');
  }
  return NextResponse.json({ ok: true, hash }, { status: 200 });
}
