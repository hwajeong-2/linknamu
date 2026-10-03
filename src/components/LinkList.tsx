"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { counts: Record<string, number> }) => {
        // 조회 중에 발생한 클릭이 덮어써지지 않도록 큰 값을 유지합니다.
        setCounts((prev) => {
          const next = { ...data.counts };
          for (const [id, count] of Object.entries(prev)) {
            next[id] = Math.max(next[id] ?? 0, count);
          }
          return next;
        });
      })
      .catch((error) => console.error("클릭 수 조회 실패:", error));
  }, []);

  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // 링크가 새 탭에서 열리는 동안에도 요청이 끝까지 전송되도록 keepalive를 사용합니다.
    fetch(`/api/clicks/${encodeURIComponent(id)}`, {
      method: "POST",
      keepalive: true,
    }).catch((error) => console.error("클릭 수 집계 실패:", error));
  }

  return (
    <ul className="flex flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
