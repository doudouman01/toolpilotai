import { posts, getPost, getCategoryBySlug } from "@/content/posts";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const cat = getCategoryBySlug(post.categorySlug);

  const related = posts.filter((p) => p.slug !== post.slug && p.categorySlug === post.categorySlug).slice(0, 2);
  const otherPosts = related.length < 2 ? [...related, ...posts.filter((p) => p.slug !== post.slug && p.categorySlug !== post.categorySlug).slice(0, 2 - related.length)] : related;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "ToolPilotAI", url: "https://toolpilotai.co" },
    publisher: { "@type": "Organization", name: "ToolPilotAI", url: "https://toolpilotai.co" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://toolpilotai.co/blog/${post.slug}` },
  };

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 60px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 24 }}>
        <Link href="/" style={{ color: "#3b82f6" }}>Home</Link>
        {" › "}
        <Link href={`/category/${post.categorySlug}`} style={{ color: "#3b82f6" }}>{post.category}</Link>
        {" › "}
        <span style={{ color: "#64748b" }}>{post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}</span>
      </div>

      {/* Article header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: cat?.color || "#3b82f6", background: "#eff6ff", padding: "3px 10px", borderRadius: 4 }}>{post.category}</span>
          <span style={{ fontSize: 13, color: "#94a3b8" }}>{post.date}</span>
          <span style={{ fontSize: 13, color: "#94a3b8" }}>·</span>
          <span style={{ fontSize: 13, color: "#94a3b8" }}>{post.readTime}</span>
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", lineHeight: 1.2, marginBottom: 12 }}>{post.title}</h1>
        <p style={{ fontSize: 17, color: "#64748b", lineHeight: 1.6 }}>{post.description}</p>
      </div>

      {/* Ad slot - top */}
      <div style={{ background: "#f1f5f9", border: "1px dashed #cbd5e1", borderRadius: 8, padding: "12px", textAlign: "center", marginBottom: 32, fontSize: 12, color: "#94a3b8" }}>Ad Slot — Header</div>

      {/* Article content */}
      <article
        style={{ fontSize: 16, lineHeight: 1.8, color: "#334155" }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <style>{`
        article h2 { font-size: 22px; font-weight: 700; color: #0f172a; margin-top: 36px; margin-bottom: 12px; line-height: 1.3; }
        article h3 { font-size: 18px; font-weight: 600; color: #1e293b; margin-top: 28px; margin-bottom: 8px; }
        article p { margin-bottom: 16px; }
        article ul, article ol { padding-left: 24px; margin-bottom: 16px; }
        article li { margin-bottom: 6px; }
        article strong { color: #0f172a; }
        article a { color: #3b82f6; text-decoration: underline; }
        article .rating { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px; margin-top: 24px; font-size: 15px; line-height: 1.7; }
      `}</style>

      {/* Ad slot - bottom */}
      <div style={{ background: "#f1f5f9", border: "1px dashed #cbd5e1", borderRadius: 8, padding: "12px", textAlign: "center", marginTop: 32, marginBottom: 32, fontSize: 12, color: "#94a3b8" }}>Ad Slot — Footer</div>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section style={{ borderTop: "1px solid #e2e8f0", paddingTop: 32 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Read Next</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ padding: "16px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#3b82f6" }}>{p.category}</span>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", marginTop: 4, lineHeight: 1.3 }}>{p.title}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
