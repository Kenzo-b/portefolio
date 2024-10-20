'use client'
///Next Import
import { useRouter } from 'next/navigation'

///React Import
import {Fragment} from "react";

///MUI Import
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';

///Project Import
import {useSideBar} from "@/hooks/useSideBar";
import {ListItemIcon} from "@mui/material";


export default function SideBar() {

    const router = useRouter();

    const routes = [
        {name: "folio", path: "/folio", icon: <AssignmentIndRoundedIcon/>},
        {name: "contact", path: "/contact", icon: <ContactPageRoundedIcon/>},
        {name: "about", path: "/about", icon: <ArticleRoundedIcon/>}
    ]

    const links = []

    for (let route of routes) {
        links.push(
            <ListItem key={route.name}>
                <ListItemButton>
                    <ListItemIcon>
                        {route.icon}
                    </ListItemIcon>
                    <ListItemText primary={route.name} onClick={() => router.push(route.path)} />
                </ListItemButton>
            </ListItem>
        )
        router.prefetch(route.path)
    }

    const {open, toggleSideBar} = useSideBar();

    return (
        <Fragment>
            <Drawer open={open} onClose={toggleSideBar}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleSideBar}>
                    <List>
                        {links}
                    </List>
                </Box>
            </Drawer>
        </Fragment>
    );
}