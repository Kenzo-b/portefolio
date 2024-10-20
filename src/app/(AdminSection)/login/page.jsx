'use client'
import {Fragment, useState} from "react";
import * as React from "react";
import {Container, Paper, TextField, Stack, Divider, Button} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Page() {

    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('')

    return (
        <Fragment>
            <Container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Paper square={false} elevation={15} sx={{p: 3, m: 1}}>
                    <Stack component="form" sx={{py: 2,height: "40ch", width: "40ch"}} spacing={5}>
                        <Typography variant='h2' sx={{ color: 'primary.dark'}}>Login</Typography>
                        <Divider sx={{ borderColor: 'primary.dark'}}/>
                        <TextField id="pseudo"
                                   fullWidth
                                   label="Pseudo"
                                   variant="outlined"
                                   margin='normal'
                                   value={pseudo}
                                   onChange={e => setPseudo(e.target.value)}

                        />
                        <TextField id="password"
                                   fullWidth
                                   label="Password"
                                   variant="outlined"
                                   margin='normal'
                                   type="password"
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}
                        />
                        <Button variant='contained' sx={{py: 2, my: 2, color: "primary.contrastText"}}>connect</Button>
                    </Stack>
                </Paper>
            </Container>
        </Fragment>
    )
}