'use client'
import * as React from "react";
import {Fragment, useState} from "react";
import {Container, Paper} from "@mui/material";
import NavTabs from "@/component/navComponant/NavTabs";
import Box from "@mui/material/Box";
import {NavBar} from "@/component/navComponant/NavBar";

export default function AdminLayout({children, overview, images, projects}) {
    const [currentTab, setCurrentTab] = useState(0);
    const handleChange = (e, newValue) => {
        setCurrentTab(newValue);
    }

    return (
        <Fragment>
            <Box>
                <NavBar titleLabel="Kenzo Briche">
                    <Paper elevation={20} square={true} >
                        <NavTabs currentTab={currentTab} handleChange={handleChange} />
                    </Paper>
                </NavBar>
            </Box>
            <Container sx={{ height: "20vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }} id="slot-view">
                <Box sx={{ width: "100%", p: 2 }} >
                    {children}
                </Box>
                {  currentTab === 0 && (
                    <Box sx={{ width: "100%", p: 2 }}>
                        {overview}
                    </Box>)}
                {currentTab === 1 && (
                    <Box sx={{ width: "100%", p: 2 }}>
                        {images}
                    </Box>)}
                {currentTab === 2 && (
                    <Box sx={{ width: "100%", p: 2 }}>
                        {projects}
                    </Box>)}
            </Container>
        </Fragment>
    )
}
