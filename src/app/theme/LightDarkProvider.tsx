"use client"

import { ThemeProvider } from "next-themes";

export function LightDarkProvider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider
            enableSystem={true}
            storageKey="theme"
            attribute="class"
        >
            {children}
        </ThemeProvider>
    )
}