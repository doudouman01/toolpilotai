import Link from "next/link";
import { categories, getPostsByCategory, getCategoryBySlug } from "@/content/posts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return { title: `${cat.name} — AI Tool ${cat.name}`, description: cat.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();
  const catPosts = getPostsByCategory(slug);

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px 60px" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color }} />
          <h1 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a" }}>{cat.name}</h1>
        </div>
        <p style={{ fontSize: 15, color: "#64748b" }}>{cat.description}</p>
      </div>

      {catPosts.length === 0 ? (
        <p style={{ fontSize: 14, color: "#94a3b8" }}>No articles in this category yet. Check back soon!</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
          {catPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "block", padding: "24px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.date}</span>
                <span style={{ fontSize: 12, color: "#94a3b8" }}>·</span>
                <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "#0f172a", lineHeight: 1.3, marginBottom: 6 }}>{post.title}</h2>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.5 }}>{post.description}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
