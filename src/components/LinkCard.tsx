import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 active:translate-y-0"
    >
      <div className="min-w-0">
        <p className="truncate font-semibold text-zinc-900">{link.title}</p>
        {link.description && (
          <p className="mt-0.5 truncate text-sm text-zinc-500">
            {link.description}
          </p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <span className="text-xs tabular-nums text-zinc-400">
          {count.toLocaleString("ko-KR")}회
        </span>
        <span
          aria-hidden
          className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-emerald-600"
        >
          →
        </span>
      </div>
    </a>
  );
}
