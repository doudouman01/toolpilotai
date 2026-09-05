import Link from "next/link";
import { posts, categories } from "@/content/posts";

export default function Home() {
  const featured = posts[0];
  const latest = posts.slice(1);

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", padding: "64px 20px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#3b82f6", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>AI Tools & Productivity</div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: "#f1f5f9", lineHeight: 1.2, marginBottom: 16 }}>Find the Right AI Tool<br />for Every Task</h1>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.6, maxWidth: 520, margin: "0 auto" }}>Honest reviews, head-to-head comparisons, and practical guides. No hype, no affiliate spam — just real recommendations from daily users.</p>
        </div>
      </section>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 20px 60px" }}>

        {/* Featured article */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>Featured</div>
          <Link href={`/blog/${featured.slug}`} style={{ display: "block", padding: "32px 28px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, transition: "box-shadow 0.2s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#3b82f6", background: "#eff6ff", padding: "3px 10px", borderRadius: 4 }}>{featured.category}</span>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>{featured.date}</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0f172a", lineHeight: 1.3, marginBottom: 8 }}>{featured.title}</h2>
            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.6 }}>{featured.description}</p>
            <div style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: "#3b82f6" }}>Read article →</div>
          </Link>
        </section>

        {/* Latest articles */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>Latest Articles</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {latest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "block", padding: "24px 22px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, transition: "box-shadow 0.2s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#3b82f6", background: "#eff6ff", padding: "2px 8px", borderRadius: 4 }}>{post.category}</span>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#0f172a", lineHeight: 1.3, marginBottom: 6 }}>{post.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{post.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>Browse by Category</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} style={{ display: "block", padding: "20px 18px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, textAlign: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: cat.color, margin: "0 auto 10px" }} />
                <div style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", marginBottom: 4 }}>{cat.name}</div>
                <div style={{ fontSize: 12, color: "#94a3b8" }}>{cat.description}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* About section for SEO */}
        <section style={{ marginTop: 64, maxWidth: 680 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>About ToolPilotAI</h2>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 12 }}>ToolPilotAI helps creators, entrepreneurs, and professionals navigate the rapidly growing world of AI tools. We test every tool we review, compare alternatives side by side, and publish practical guides based on real-world usage — not press releases.</p>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>Our mission is simple: save you time finding the right AI tool for your specific needs. Whether you need an AI writing assistant, a code generator, an image creator, or a productivity system, we have tested it and have an honest recommendation.</p>
        </section>
      </div>
    </main>
  );
}
