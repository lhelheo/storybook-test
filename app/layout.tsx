import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Storybook Handel - Design System",
  description:
    "Uma aplicação web demonstrando nosso design system com Storybook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
