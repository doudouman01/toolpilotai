import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service", description: "ToolPilotAI terms of service." };
export default function Terms() {
  const s = { page: { maxWidth: 680, margin: "0 auto", padding: "40px 20px 60px" } as const, h1: { fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 4 } as const, sub: { fontSize: 13, color: "#94a3b8", marginBottom: 32 } as const, h2: { fontSize: 18, fontWeight: 600, color: "#0f172a", marginTop: 28, marginBottom: 8 } as const, p: { fontSize: 14, color: "#475569", lineHeight: 1.8, marginBottom: 12 } as const };
  return (
    <main style={s.page}>
      <h1 style={s.h1}>Terms of Service</h1>
      <p style={s.sub}>Last updated: September 2026</p>
      <p style={s.p}>By using ToolPilotAI (toolpilotai.co), you agree to these terms.</p>
      <h2 style={s.h2}>Content</h2>
      <p style={s.p}>Our reviews and recommendations are based on our testing and opinions. They are provided for informational purposes only. We do not guarantee that any tool will meet your specific needs. Always evaluate tools yourself before purchasing.</p>
      <h2 style={s.h2}>Affiliate Disclosure</h2>
      <p style={s.p}>ToolPilotAI participates in affiliate programs. We earn commissions from qualifying purchases made through links on our site. This does not affect the price you pay or our editorial independence.</p>
      <h2 style={s.h2}>Intellectual Property</h2>
      <p style={s.p}>All content on ToolPilotAI is protected by copyright. You may not reproduce, distribute, or create derivative works without permission.</p>
      <h2 style={s.h2}>Limitation of Liability</h2>
      <p style={s.p}>ToolPilotAI is not liable for any damages arising from your use of our content or recommendations. Use all information at your own discretion.</p>
      <h2 style={s.h2}>Contact</h2>
      <p style={s.p}>Questions? Contact us at legal@toolpilotai.co</p>
    </main>
  );
}
