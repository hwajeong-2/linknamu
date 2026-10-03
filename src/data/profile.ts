export type Profile = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로. 비워 두면 이름 첫 글자로 아바타를 표시합니다. */
  avatarUrl?: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export const profile: Profile = {
  name: "홍길동",
  bio: "웹 개발자 · 기록하고 공유하는 걸 좋아합니다",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/",
    description: "작업 중인 프로젝트",
  },
  {
    id: "blog",
    title: "블로그",
    url: "https://velog.io/",
    description: "개발 기록과 회고",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://instagram.com/",
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://youtube.com/",
    description: "튜토리얼 영상",
  },
];
