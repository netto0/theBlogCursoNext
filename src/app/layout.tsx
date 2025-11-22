import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "The Blog",
  description: "Descrição página",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Container>
        <Header />
        <body>{children}</body>
        <h1 className="text-6xl">Footer</h1>
      </Container>
    </html>
  );
}
