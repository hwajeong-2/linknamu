import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {profile.avatarUrl ? (
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          width={96}
          height={96}
          priority
          className="h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-md"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-600 text-3xl font-bold text-white ring-4 ring-white shadow-md"
        >
          {profile.name.charAt(0)}
        </div>
      )}
      <h1 className="mt-4 text-2xl font-bold text-zinc-900">{profile.name}</h1>
      <p className="mt-2 max-w-xs text-sm text-zinc-600">{profile.bio}</p>
    </header>
  );
}
