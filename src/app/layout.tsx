import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui";

const roboto = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
    title: "Kanban desk",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body className={roboto.className} suppressHydrationWarning={true}>
                <div className="relative flex flex-col w-full h-screen overflow-x-scroll scrollbar-thin bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
