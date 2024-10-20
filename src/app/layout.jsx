import {Fragment} from "react";
import {NavBar} from "@/component/navComponant/NavBar";
import {Inter} from "next/font/google";
import {theme} from "@/assets/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Folio - Briche Kenzo",
    description: "This is my folio"
};

export default function rootLayout({children}) {
    return (
        <html>
            <body className={inter.className}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}