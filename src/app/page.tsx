import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-gradient-to-b from-emerald-50 to-zinc-100 px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <ProfileHeader profile={profile} />
        <section aria-label="링크 목록" className="mt-8">
          <LinkList links={links} />
        </section>
        <footer className="mt-12 text-center text-xs text-zinc-400">
          링크나무
        </footer>
      </div>
    </main>
  );
}
