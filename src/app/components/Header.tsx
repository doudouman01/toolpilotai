import Link from "next/link";

const cats = [
  { name: "Reviews", href: "/category/reviews" },
  { name: "Comparisons", href: "/category/comparisons" },
  { name: "How-To", href: "/category/how-to" },
  { name: "Best Of", href: "/category/best-of" },
  { name: "Productivity", href: "/category/productivity" },
];

export default function Header() {
  return (
    <header style={{ background: "#0f172a", borderBottom: "1px solid #1e293b" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, background: "#3b82f6", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#fff" }}>T</div>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", letterSpacing: -0.5 }}>ToolPilot<span style={{ color: "#3b82f6" }}>AI</span></span>
          </Link>
          <nav style={{ display: "flex", gap: 24 }}>
            {cats.map((c) => (
              <Link key={c.href} href={c.href} style={{ fontSize: 13, fontWeight: 500, color: "#94a3b8", transition: "color 0.2s" }}>{c.name}</Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
