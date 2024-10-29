/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/getRanking").then((res) => {
      if (res.data.ok) {
        setData(res.data.data);
      }
    });
  }, []);
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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ユーザー名</th>
            <th>スコア</th>
            <th>時間</th>
            <th>削除</th>
          </tr>
          {data.map((d: any, i: number) => {
            return (
              <tr key={`table-${i}`}>
                <td>{d.id}</td>
                <td>{d.username}</td>
                <td>{d.score}</td>
                <td>{d.time}</td>
                <td>
                  {d.time != "2024-10-24T07:58:10.379Z" && (
                    <button
                      onClick={() => {
                        if (!password) {
                          alert("パスワードを入力してください");
                          return;
                        }
                        const ok = confirm("削除しますか？");
                        if (!ok) return;
                        axios
                          .post("/api/deleteRanking", {
                            id: d.id,
                            password: password,
                          })
                          .then((res) => {
                            if (res.data.ok) {
                              setData(data.filter((e: any) => e.id !== d.id));
                            }
                          });
                      }}
                    >
                      削除
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}
