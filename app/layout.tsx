import "./globals.css";

export const metadata = {
  title: "BaseNest Prototype",
  description: "Airbnb-style prototype for BaseNest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">{children}</body>
    </html>
  );
}
