import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export function NavBar ({titleLabel, onClickIconBtn, open}) {


    return (
        <Box sx={{ flexGrow: 1 , display: 'flex' }}>
            <AppBar position="fixed" open={open}>
                <Toolbar variant="dense">
                    <IconButton color="inherit"
                                aria-label="open drawer"
                                onClick={onClickIconBtn}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        {titleLabel}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}