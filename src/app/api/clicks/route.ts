import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks
      .find({ _id: { $in: links.map((link) => link.id) } })
      .toArray();

    const counts: Record<string, number> = {};
    for (const doc of docs) counts[doc._id] = doc.count;

    return Response.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
