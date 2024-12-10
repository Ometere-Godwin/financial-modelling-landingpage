"use client";

import { useRouter } from "next/navigation";
import { PostList } from "@/components/posts/post-list";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Dashboard</h1>
      <PostList />
    </div>
  );
}
