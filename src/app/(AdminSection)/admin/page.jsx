import {Fragment} from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";


export default function Page() {
    return(
        <Fragment>
            <Container sx={{ height: "20vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }} >
                <Paper square={false} sx={{p: 2}} elevation={15}>
                    test
                </Paper>
                <Paper square={false} sx={{p: 2}} elevation={15}>
                    test
                </Paper>
                <Paper square={false} sx={{p: 2}} elevation={15}>
                    test
                </Paper>
            </Container>
        </Fragment>
    )
}