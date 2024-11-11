import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPost } from "~/lib/posts.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.post) {
    return [
      { title: "Post Not Found" },
      { name: "description", content: "The requested blog post was not found." },
    ];
  }

  return [
    { title: `${data.post.title} | Blog` },
    { name: "description", content: data.post.excerpt },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const post = await getPost(params.slug!);
  
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ post });
}

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={post.coverImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-3xl px-4 pb-16">
            <Link 
              to="/blog"
              className="mb-4 inline-block text-sm font-medium text-white/80 hover:text-white"
            >
              ← Back to blog
            </Link>
            <h1 className="text-4xl font-bold text-white">{post.title}</h1>
            <time className="mt-2 block text-lg text-white/80">{post.date}</time>
          </div>
        </div>
      </div>
      
      <article className="prose prose-lg mx-auto max-w-3xl px-4 py-12 dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}