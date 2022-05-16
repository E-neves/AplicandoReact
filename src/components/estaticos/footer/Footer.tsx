import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Box, Grid } from "@material-ui/core";
import './Footer.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";


function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footeerComponent;

    if (token !== "") {
        footeerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className="box1">
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className="txt , tst ">Venha fazer parte das nossas redes sociais:</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/generationbrasil" target=" blank" rel="noopener noreferrer">
                            <FacebookIcon className="redes" />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="redes" />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="redes" />
                        </a>
                    </Box>
                </Box>
                <Box className="box2">
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className="txt , tst ">©2020 Copyright:</Typography>
                    </Box>
                    <Box >
                        <a  className="txt" target="_blank" href="https://brasil.generation.org">
                            <Typography variant="subtitle2" align="center" gutterBottom className="txt , tst ">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }

    return (
        <>
        {footeerComponent}

        </>
    )
}

export default Footer; 