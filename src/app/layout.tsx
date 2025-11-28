import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Blog - Projeto do curso do Otávio Miranda",
    template: "%s | The Blog",
  },
  description: "A descrição é aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-slate-900">
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
