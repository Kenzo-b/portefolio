'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useState} from "react";
import {createPortal} from "react-dom";
import {Container} from "@mui/material";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



export default function NavTabs({currentTab, handleChange}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="overview" {...a11yProps(0)}/>
                    <Tab label="Projects" {...a11yProps(1)} />
                    <Tab label="Images" {...a11yProps(2)}/>
                </Tabs>
            </Box>
        </Box>
    );
}