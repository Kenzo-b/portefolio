///MUI Import
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AppBar} from "@mui/material";

///Project Import
import {SideBarBtn} from "@/component/navComponant/SideBarBtn";
import SideBar from "@/component/navComponant/SideBar";

export function NavBar ({titleLabel, children}) {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" color="inherit" component="div">
                        {titleLabel}
                    </Typography>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    )
}