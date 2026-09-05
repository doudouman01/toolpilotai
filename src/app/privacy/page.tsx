import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy", description: "ToolPilotAI privacy policy." };
export default function Privacy() {
  const s = { page: { maxWidth: 680, margin: "0 auto", padding: "40px 20px 60px" } as const, h1: { fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 4 } as const, sub: { fontSize: 13, color: "#94a3b8", marginBottom: 32 } as const, h2: { fontSize: 18, fontWeight: 600, color: "#0f172a", marginTop: 28, marginBottom: 8 } as const, p: { fontSize: 14, color: "#475569", lineHeight: 1.8, marginBottom: 12 } as const };
  return (
    <main style={s.page}>
      <h1 style={s.h1}>Privacy Policy</h1>
      <p style={s.sub}>Last updated: September 2026</p>
      <p style={s.p}>ToolPilotAI operates the website toolpilotai.co. This page explains how we handle your information.</p>
      <h2 style={s.h2}>Information We Collect</h2>
      <p style={s.p}>We do not collect personal information directly. Third-party services such as Google Analytics and advertising partners may collect anonymized usage data and use cookies.</p>
      <h2 style={s.h2}>Affiliate Links</h2>
      <p style={s.p}>Some articles contain affiliate links. When you click these links and make a purchase, we may earn a commission at no extra cost to you.</p>
      <h2 style={s.h2}>Contact</h2>
      <p style={s.p}>Questions about this policy? Contact us at privacy@toolpilotai.co</p>
    </main>
  );
}
