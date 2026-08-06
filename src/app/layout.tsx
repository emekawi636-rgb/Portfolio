import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Portfolio | Web Developer — C++ · JavaScript · HTML",
  description: "Award-winning Web Developer specializing in C++, JavaScript, and HTML. Building beautiful, performant digital experiences that push the boundaries of modern web development.",
  keywords: ["Web Developer", "C++", "JavaScript", "HTML", "Frontend Developer", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    title: "Portfolio | Web Developer",
    description: "Building Beautiful Digital Experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Web Developer",
    description: "Building Beautiful Digital Experiences",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Web Developer",
    jobTitle: "Web Developer",
    url: "https://yourdomain.com",
    sameAs: [
      "https://github.com/emekawi636-rgb",
    ],
    knowsAbout: ["C++", "JavaScript", "HTML", "CSS", "React", "Next.js", "TypeScript", "Node.js"],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased noise-overlay">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
