'use client'

///MUI Import
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

///Project Import
import {useSideBar} from "@/hooks/useSideBar";


export function SideBarBtn() {

    const {toggleSideBar} = useSideBar()

    return (
        <IconButton color="inherit"
                    aria-label="open drawer"
                    onClick={toggleSideBar}
                    edge="start"
                    sx={{ mr: 2 }}>
            <MenuIcon />
        </IconButton>
    )
}