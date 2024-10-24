import { LimitChecker } from "@/modules/limitChecker";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import db from "@/modules/db";

const limitChecker = LimitChecker();
export async function GET() {
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
  const cachePath = path.resolve(`${process.env.IS_DEV === "true" ? "./tmp" : "/tmp"}/ranking.json`);
  if (!fs.existsSync(`${process.env.IS_DEV === "true" ? "./tmp" : "/tmp"}`)) {
    fs.mkdirSync(`${process.env.IS_DEV === "true" ? "./tmp" : "/tmp"}`);
  }
  if (fs.existsSync(cachePath)) {
    const json: { time: number, data: { id: string, username: string, score: number, time: string }[] } = JSON.parse(fs.readFileSync(cachePath, "utf-8"));
    const now = new Date().getTime();
    // 30秒更新.
    if (now - json.time < 30000) {
      return NextResponse.json({ ok: true, data: json.data });
    }
  }
  const sql = fs.readFileSync(path.resolve("./public") + "/sql/get.sql", "utf-8");
  const data = await db.any(sql);
  const json = { time: new Date().getTime(), data: data };
  fs.writeFileSync(cachePath, JSON.stringify(json));
  return NextResponse.json({ ok: true, data: data });
}