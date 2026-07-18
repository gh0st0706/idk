import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricky | Editorial Portfolio",
  description:
    "A calm editorial portfolio for Ricky, focused on AI systems, product craft, industrial design, and engineering detail.",
  openGraph: {
    title: "Ricky | Editorial Portfolio",
    description:
      "AI systems, product interfaces, diagnostics, and craftsmanship presented as a digital publication.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#151410" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
