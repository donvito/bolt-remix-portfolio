import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlogHeader from "~/components/BlogHeader";
import BlogCard from "~/components/BlogCard";
import { getAllPosts } from "~/lib/posts.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | Melvin Vivas" },
    { name: "description", content: "Thoughts on AI, web development, and content creation" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const posts = await getAllPosts();
  return json({ posts });
}

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-[#fff1f2] dark:bg-gray-950">
      <BlogHeader />
      <main className="mx-auto max-w-3xl px-4 pb-16">
        <div className="grid gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}