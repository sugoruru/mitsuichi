"use client";
import { MdArrowForwardIos } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="h-10 bg-[#1c1c1c]"></div>
      <div className="mx-auto w-96 md:w-[90lvw] bg-white my-10">
        <div className="table w-96 md:w-[90lvw]">
          <div className="text-center my-auto py-[170px] table-cell">
            <p style={{ fontFamily: "title-font", lineHeight: "1" }} className="text-[3rem] lg:text-[6rem]">
              三一神社
            </p>
            <p style={{ fontFamily: "title-font", lineHeight: "1" }} className="text-[7rem] lg:text-[16rem] font-semibold">
              悪滅祭
            </p>
          </div>
        </div>
        <div className="text-center text-2xl lg:text-7xl font-bold text-[#222]">書き下ろし小説</div>
        <div className="text-center text-2xl lg:text-5xl font-bold text-[#222] mb-10">『真偽信仰』</div>
        <div className="text-center text-sm lg:text-2xl font-bold text-[#222]">
          <p>「三一神社悪滅祭 ストラックアウト」</p>
          <p>原作小説！</p>
          <p>期間限定で全編特別公開！</p>
        </div>
        <div className="flex justify-center">
          <Link href="/novel">
            <button className="text-center flex text-2xl lg:text-3xl font-bold text-white bg-[#5b9035] px-5 py-2 transition hover:bg-[#3b631e] rounded-full mt-10">
              小説はこちら
              <MdArrowForwardIos className="my-[0.3rem]" />
            </button>
          </Link>
        </div>
        <div className="mt-10 text-center text-5xl font-bold text-[#222]">ストラックアウトランキング</div>
        <div className="flex justify-center mt-5 pb-10">
          <div className="border-r border-black text-center text-2xl">
            <div className="border-b-2 border-black px-7 py-2 flex">
              <GiAchievement className="text-yellow-600" />
              1位
            </div>
            <div className="border-b-2 border-black px-7 py-2 flex">
              <GiAchievement className="text-zinc-400" />
              2位
            </div>
            <div className="border-b-2 border-black px-7 py-2 flex">
              <GiAchievement className="text-orange-700" />
              3位
            </div>
            <div className="border-b-2 border-black px-7 py-2 flex">
              <GiAchievement className="" />
              4位
            </div>
            <div className="border-b-2 border-black px-7 py-2 flex">
              <GiAchievement className="" />
              5位
            </div>
          </div>
          <div className="border-l-r border-black text-2xl">
            <div className="border-b-2 border-black px-7 py-2">アキラー（自由契約）</div>
            <div className="border-b-2 border-black px-7 py-2">植草</div>
            <div className="border-b-2 border-black px-7 py-2">しゅん</div>
            <div className="border-b-2 border-black px-7 py-2">アキラー</div>
            <div className="border-b-2 border-black px-7 py-2">村上頌樹(ノーコン)</div>
          </div>
          <div className="border-l border-black text-2xl">
            <div className="border-b-2 border-black px-7 py-2">34点</div>
            <div className="border-b-2 border-black px-7 py-2">30点</div>
            <div className="border-b-2 border-black px-7 py-2">28点</div>
            <div className="border-b-2 border-black px-7 py-2">28点</div>
            <div className="border-b-2 border-black px-7 py-2">28点</div>
          </div>
        </div>
      </div>
    </div>
  );
}
