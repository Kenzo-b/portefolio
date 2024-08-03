import { Inter } from "next/font/google";
import {CssBaseline} from "@mui/material";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Folio - Briche Kenzo",
  description: "This is my folio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
