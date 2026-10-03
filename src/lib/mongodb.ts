import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

// 개발 모드의 HMR로 모듈이 다시 로드돼도 연결을 하나만 유지합니다.
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
  }
  globalForMongo.mongoClientPromise ??= new MongoClient(uri).connect();
  return globalForMongo.mongoClientPromise;
}

type ClickDoc = { _id: string; count: number };

export async function getClicksCollection() {
  const client = await getClient();
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
