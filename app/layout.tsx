import type { Metadata } from "next";
import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  display: "swap",

  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Yadav | Portfolio",
  description: "Full Stack Engineer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Shiva Yadav",
    "Shiva Yadav Portfolio",
    "Shiva Yadav Full Stack Engineer",
    "Shiva Yadav React Developer",
    "Shiva Yadav Developer",
    "Shiva Yadav Jhansi",
    "Portfolio",
    "Next.js Portfolio",
    "Dev Axioms",
    "Axiomite UI",
    "Meraki AI",
  ],
  icons: {
    icon: "/images/logo.svg",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    title: "Shiva Yadav | Portfolio",
    description:
      "Full Stack Engineer specializing in React, Next.js, and modern web technologies.",
    url: "https://shivayadav.me",
    siteName: "Shiva Yadav Portfolio",
    images: [
      {
        url: "/images/opengrapgh-image.png",
        width: 1200,
        height: 630,
        alt: "Shiva Yadav Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Yadav | Portfolio",
    images: ["/images/opengrapgh-image.png"],
    site:"shivayadav.me",
    description:
      "Frontend developer specializing in React, Next.js, and modern web technologies.",
    creator: "@Shivay1256",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} ${geistSans.variable} ${workSans.variable} antialiased`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-[48rem] flex flex-col w-full min-h-screen relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
