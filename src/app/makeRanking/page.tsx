/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [isSending, setIsSending] = useState(false);
  return (
    <div className="w-screen h-screen bg-white">
      <label htmlFor="pass">パスワード:</label>
      <input
        type="password"
        id="pass"
        className="border border-black rounded outline-none"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <label htmlFor="username">ユーザー名:</label>
      <input
        type="text"
        id="username"
        className="border border-black rounded outline-none"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <label htmlFor="username">スコア:</label>
      <input
        type="number"
        id="username"
        className="border border-black rounded outline-none"
        onChange={(e) => {
          setScore(Number(e.target.value));
        }}
        min={0}
        max={9}
        defaultValue={0}
      />
      <br />
      <button
        onClick={async () => {
          if (isSending) return;
          if (password === "") {
            alert("パスワードを入力してください");
            return;
          }
          if (username === "") {
            alert("ユーザー名を入力してください");
            return;
          }
          setIsSending(true);
          try {
            await axios.post("/api/makeRanking", { password, username, score });
            alert("送信しました");
            setScore(0);
            setUsername("");
          } catch (e) {
            if ((e as any).response.data.error === "Invalid password") {
              alert("パスワードが違います");
            }
            setIsSending(false);
          }
          setIsSending(false);
        }}
        disabled={isSending}
        className="border bg-black text-white px-2 py-1 disabled:opacity-50"
      >
        送信
      </button>
    </div>
  );
}
