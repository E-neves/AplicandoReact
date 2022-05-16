import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='color1 '>
          <Tabs centered indicatorColor="secondary" onChange={handleChange} >
            <Tab label="+ Postagens" value="1" className="tst" />
            <Tab label="Galeria!" value="2" className="tst"  />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='txtTP'>ESSE TEXTO ESTA NA "TABPOSTAGEM.TSX" DEVE SER EDITADO COM UM TEXTO DE RESUMO SOBRE A VIDA DA AUTORA. AINDA ESTOU BUSCANDO INSPIRAÇÕES PARA CRIAR ESSE TEXTO... NÃO ME JULGUE </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;