import { LimitChecker } from "@/modules/limitChecker";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import db from "@/modules/db";
import fs from "fs";
import path from "path";

const limitChecker = LimitChecker();
export async function POST(req: NextRequest) {
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
  const required = ["password", "username", "score"];
  const body = await req.json();
  for (const key of required) {
    if (!(key in body)) {
      return NextResponse.json({ ok: false, error: "Missing required key" }, { status: 400 });
    }
  }
  const salt = process.env.salt;
  const salt_pass = body["password"] + salt;
  let hash = salt_pass;
  for (let i = 0; i < 16; i++) {
    hash = crypto.createHash('sha256').update(hash).digest('hex');
  }
  if (hash !== process.env.pass) {
    return NextResponse.json({ ok: false, error: "Invalid password" }, { status: 400 });
  }
  const sql = fs.readFileSync(path.resolve("./public") + "/sql/create.sql", "utf-8");
  await db.query(sql, [body["username"], body["score"]]);
  return NextResponse.json({ ok: true });
}