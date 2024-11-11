import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import ThemeToggle from "~/components/ThemeToggle";

export const meta: MetaFunction = () => {
  return [
    { title: "Melvin Vivas - Tech Content Creator & AI Developer" },
    { name: "description", content: "Tech content creator sharing insights about AI and development" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-primary-100 dark:border-gray-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
          <Link to="/" className="text-2xl font-bold text-primary-900 dark:text-white">MV</Link>
          <div className="flex items-center gap-6">
            <Link to="/blog" className="text-primary-700 hover:text-primary-900 dark:text-gray-300 dark:hover:text-white">
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I'm Melvin Vivas
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-primary-800 dark:text-gray-300">
              Tech content creator on Twitter/X. I build AI-powered applications and share my journey in tech.
              Available for content creation and collaborations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://x.com/messages/compose?recipient_id=donvito"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-primary-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact for Content Creation
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center justify-center rounded-full bg-white p-3 text-primary-600 shadow-md transition hover:bg-primary-50 hover:text-primary-700 dark:bg-gray-800 dark:text-primary-400 dark:hover:bg-gray-700 dark:hover:text-primary-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-full bg-primary-100/50 blur-3xl dark:bg-primary-900/30" />
            <div className="relative aspect-square w-[400px] mx-auto">
              <img
                src="https://avatars.githubusercontent.com/u/890270?s=400&u=e0b1aac65d7b1b74a7cdd7c9005f2af3e140a0ab&v=4"
                alt="Melvin Vivas"
                className="h-full w-full rounded-full object-cover ring-4 ring-white/10 dark:ring-gray-800/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary-900 dark:text-white">
            Services
          </h2>
          <p className="mt-4 text-center text-lg text-primary-800 dark:text-gray-300">
            Expert tech content creation and AI development services
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-primary-50 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="mb-4 inline-block rounded-lg bg-primary-100 p-3 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-primary-800 dark:text-gray-300">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-primary-700 dark:text-gray-300">
                      <svg className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary-900 dark:text-white">
            Featured Content
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredContent.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-primary-800 dark:text-gray-300">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary-100 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-primary-600 dark:text-gray-400">
            © {new Date().getFullYear()} Melvin Vivas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    title: "Tech Content Creation",
    description: "Engaging technical content that resonates with developers and tech enthusiasts.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    features: [
      "Technical blog posts",
      "Social media content",
      "Tutorial creation",
      "Developer advocacy",
    ],
  },
  {
    title: "AI Development",
    description: "Custom AI solutions and integrations for your applications.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "AI model integration",
      "Custom AI solutions",
      "LLM fine-tuning",
      "AI-powered features",
    ],
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance on web development and AI implementation.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Architecture review",
      "Tech stack selection",
      "Performance optimization",
      "Best practices guidance",
    ],
  },
];

const socialLinks = [
  {
    href: "https://x.com/donvito",
    label: "Twitter/X",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    href: "https://github.com/donvito",
    label: "GitHub",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/melvinvivas/",
    label: "LinkedIn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const featuredContent = [
  {
    title: "Building AI-Powered Apps",
    description: "Learn how to integrate AI capabilities into your applications using modern tools and frameworks.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/building-resilient-uis",
  },
  {
    title: "Content Creation Tips",
    description: "Best practices for creating engaging technical content and building your audience.",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/web-fundamentals",
  },
  {
    title: "Web Development Journey",
    description: "Insights and experiences from my journey in web development and tech.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/getting-started-with-remix",
  },
];