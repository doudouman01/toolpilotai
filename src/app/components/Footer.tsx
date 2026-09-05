import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", borderTop: "1px solid #1e293b", padding: "40px 20px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: 32 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>ToolPilot<span style={{ color: "#3b82f6" }}>AI</span></div>
            <p style={{ fontSize: 13, color: "#64748b", maxWidth: 280, lineHeight: 1.6 }}>Honest reviews, comparisons, and guides to help you find the best AI tools for your workflow.</p>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Categories</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
              <Link href="/category/reviews" style={{ fontSize: 13, color: "#64748b" }}>Reviews</Link>
              <Link href="/category/comparisons" style={{ fontSize: 13, color: "#64748b" }}>Comparisons</Link>
              <Link href="/category/how-to" style={{ fontSize: 13, color: "#64748b" }}>How-To Guides</Link>
              <Link href="/category/best-of" style={{ fontSize: 13, color: "#64748b" }}>Best Of</Link>
              <Link href="/category/productivity" style={{ fontSize: 13, color: "#64748b" }}>Productivity</Link>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Legal</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
              <Link href="/privacy" style={{ fontSize: 13, color: "#64748b" }}>Privacy Policy</Link>
              <Link href="/terms" style={{ fontSize: 13, color: "#64748b" }}>Terms of Service</Link>
              <Link href="/about" style={{ fontSize: 13, color: "#64748b" }}>About</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1e293b", paddingTop: 20, fontSize: 12, color: "#475569", textAlign: "center" }}>
          © {new Date().getFullYear()} ToolPilotAI — Find the right AI tool for every task.
        </div>
      </div>
    </footer>
  );
}
