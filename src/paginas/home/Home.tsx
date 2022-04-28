import React from 'react';
import {Button, Box, Paper} from '@material-ui/core';
import './Home.css';


function Home(){
    return(
    <>
         <Paper>
             <Box p={2}>
                <Box display="flex" justifyContent="flex-end" >
                     <h1>TITULO </h1>
                 </Box>
                 <img src="https://thumbs.dreamstime.com/b/flores-de-canto-aqua-green-arch-floral-border-da-aquarela-do-quadro-das-cor-rosa-111389285.jpg" alt="IMAGEM DE FUNDO - FLORAL" style={{width: "100%", height: "100%"}} />
                 <Box display="flex" justifyContent="center" p={2}>
                     <Button variant="contained" color="primary"> TESTE 1</Button>
                     <Button variant="contained" color="secondary"> TESTE 2</Button>
                 </Box>
             </Box>
         </Paper>
    </>
    );
}

export default Home; 