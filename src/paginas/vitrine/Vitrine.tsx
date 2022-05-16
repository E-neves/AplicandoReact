import React from 'react';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import './Vitrine.css';

function Vitrine(): JSX.Element {


    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='fund' >
                <Grid alignItems='center' xs={6} >
                    <Box>
                        <Box>
                            <h2 className="txt1SA , tst ">Foi preciso 4 anos de experiencia com teleatendimento para que eu entendesse que hotelaria
                                era o meu lugar no mundo. Mas bastou 1 pandemia e um momento de preocupação financeira para que eu entendesse que o
                                mundo é muito grande e eu posso ocupar muitos espaços.
                                Prazer, meu nome é ESMERALDA NEVES, tenho 23 anos e se gostaria de me conheçer melhor, embarque comigo nessa jornada! .</h2>
                        </Box>
                        <Box>
                            <a href='/login' >
                                <Typography variant='subtitle1' gutterBottom align='center' className='txt1 , tst '>DESEJA CONHEÇER MEU BLOG ? CLIQUE AQUI !</Typography>
                            </a>
                        </Box>
                    </Box>

                </Grid>
                <Grid xs={6} className="in">
                </Grid>
            </Grid>
        </>
    );

}



export default Vitrine;
