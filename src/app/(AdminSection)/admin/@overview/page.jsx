import {Fragment} from "react";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";

export default function OverviewPage() {

    return (
        <Fragment>
            <Paper elevation={15} sx={{ p: 2}} square={false}>
                <Typography variant="h4" >test from page</Typography>
            </Paper>
        </Fragment>
    )
}