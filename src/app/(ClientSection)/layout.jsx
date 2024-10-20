import {Fragment} from "react";
import {NavBar} from "@/component/navComponant/NavBar";
import {Inter} from "next/font/google";
import {theme} from "@/assets/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";





export default function ClientLayout({children}) {

    return (
        <Fragment>
            <NavBar titleLabel="Kenzo Briche"/>
            {children}
        </Fragment>
    )
}
