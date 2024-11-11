import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import frontMatter from "front-matter";
import { marked } from "marked";
import { format } from "date-fns";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

const POSTS = [
  {
    slug: "getting-started-with-remix",
    title: "Getting Started with Remix",
    date: "March 25, 2024",
    excerpt: "Learn how to build modern web applications with Remix framework.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    content: `
# Getting Started with Remix

Remix is a full-stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience.

## Why Remix?

Remix provides an excellent developer experience while producing applications that naturally do the right thing for the web. It leverages web fundamentals that have been around for decades while providing modern UX capabilities.

## Key Features

* Nested routing with co-located data loading
* Built-in error handling and form validation
* Progressive enhancement by default
* Server-side rendering with client-side hydration

## Getting Started

To create a new Remix project, you can use the following command:

\`\`\`bash
npx create-remix@latest
\`\`\`

This will set up a new Remix project with everything you need to start building your application.
    `,
  },
  {
    slug: "web-fundamentals",
    title: "Web Fundamentals Every Developer Should Know",
    date: "March 24, 2024",
    excerpt: "Essential concepts for building better websites with strong foundations.",
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=2000",
    content: `
# Web Fundamentals Every Developer Should Know

Understanding web fundamentals is crucial for building better websites. These core concepts form the foundation of modern web development.

## HTML Semantics

Using semantic HTML elements helps improve accessibility, SEO, and maintainability. Choose elements that accurately describe their content's meaning.

## Progressive Enhancement

Start with a solid HTML foundation and layer on CSS and JavaScript. This ensures your site works for everyone, regardless of their device or connection speed.

## Performance Considerations

* Minimize HTTP requests
* Optimize images and assets
* Use appropriate caching strategies
* Implement lazy loading where appropriate

## Accessibility

Make your websites accessible to everyone by following WCAG guidelines, using proper ARIA attributes, and ensuring keyboard navigation works correctly.
    `,
  },
  {
    slug: "building-resilient-uis",
    title: "Building Resilient User Interfaces",
    date: "March 23, 2024",
    excerpt: "Best practices for creating robust and maintainable UI components.",
    coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2000",
    content: `
# Building Resilient User Interfaces

Creating resilient user interfaces is essential for delivering reliable web applications that can handle various edge cases and user interactions gracefully.

## Error Boundaries

Implement error boundaries to catch and handle runtime errors gracefully, preventing entire application crashes and providing meaningful feedback to users.

## Loading States

Design meaningful loading states that maintain layout stability and provide visual feedback during data fetching or processing operations.

## Offline Support

* Implement service workers for offline functionality
* Cache critical resources
* Handle network failures gracefully
* Sync data when connection is restored

## Form Handling

Build robust form handling with proper validation, error messages, and submission states. Always provide clear feedback and maintain data integrity.
    `,
  },
];

export async function getPost(slug: string): Promise<Post | null> {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  return {
    ...post,
    content: marked(post.content),
  };
}

export async function getAllPosts(): Promise<Post[]> {
  return POSTS.map((post) => ({
    ...post,
    content: marked(post.content),
  }));
}