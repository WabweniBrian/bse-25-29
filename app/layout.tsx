import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#EA3C12",
};

export const metadata: Metadata = {
  title: "Bloggie",
  manifest: "/manifest.json",
  description: "This is where you main meta description goes",
  keywords: [""], //Add keywords depending on the content of your blog
};

const thicccboi = localFont({
  src: [
    {
      path: "../public/fonts/THICCCBOI-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-thicccboi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={thicccboi.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="bloggie-theme"
        >
          {children}
          <Toaster
            toastOptions={{
              className: "bg-white dark:bg-gray-700 dark:text-gray-200",
              duration: 3000,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
