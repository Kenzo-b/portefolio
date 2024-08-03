import {Fragment} from "react";
import {NavBar} from "@/component/NavBar";


export default function ClientLayout({children}) {

    return (
        <Fragment>
            <NavBar titleLabel="Kenzo Briche"/>
            {children}
        </Fragment>
    )
}