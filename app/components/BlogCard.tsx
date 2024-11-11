import { Link } from "@remix-run/react";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl dark:bg-gray-800">
      <Link to={post.slug} className="block">
        <div className="aspect-video overflow-hidden">
          <img
            src={post.coverImage}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <time className="text-sm text-primary-500 dark:text-primary-400">{post.date}</time>
          <h2 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
            {post.title}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
          <span className="mt-4 inline-block text-primary-600 dark:text-primary-400">Read more →</span>
        </div>
      </Link>
    </article>
  );
}