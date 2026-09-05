import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ToolPilotAI",
  description: "Learn about ToolPilotAI — who we are, how we test AI tools, and our editorial standards.",
};

export default function About() {
  const s = {
    page: { maxWidth: 680, margin: "0 auto", padding: "40px 20px 60px" } as const,
    h1: { fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 16 } as const,
    h2: { fontSize: 20, fontWeight: 700, color: "#0f172a", marginTop: 32, marginBottom: 8 } as const,
    p: { fontSize: 15, color: "#475569", lineHeight: 1.8, marginBottom: 16 } as const,
  };

  return (
    <main style={s.page}>
      <h1 style={s.h1}>About ToolPilotAI</h1>
      <p style={s.p}>ToolPilotAI is an independent publication focused on AI tools and productivity. We help creators, entrepreneurs, developers, and professionals find the right AI tools for their specific needs.</p>

      <h2 style={s.h2}>How We Test</h2>
      <p style={s.p}>Every tool we review is tested hands-on in real workflows — not just demoed for screenshots. We use AI tools daily for writing, coding, research, and business operations. Our reviews reflect weeks or months of actual usage, not a 15-minute trial.</p>

      <h2 style={s.h2}>Editorial Independence</h2>
      <p style={s.p}>Some of our articles contain affiliate links, which means we may earn a commission if you purchase through our links at no extra cost to you. This never influences our recommendations. We recommend tools we genuinely use and believe in, and we clearly disclose affiliate relationships.</p>

      <h2 style={s.h2}>Our Mission</h2>
      <p style={s.p}>The AI tool landscape is overwhelming. Hundreds of new tools launch every month, most with inflated marketing claims. Our mission is to cut through the noise and give you honest, practical guidance so you can spend less time evaluating tools and more time doing great work.</p>

      <h2 style={s.h2}>Contact</h2>
      <p style={s.p}>Have a question, suggestion, or want to submit a tool for review? Reach us at contact@toolpilotai.co</p>
    </main>
  );
}
