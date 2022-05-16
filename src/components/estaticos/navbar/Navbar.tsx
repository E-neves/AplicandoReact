import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" >
            <Toolbar variant="dense" className="fundo2">
                <Box className='cursor'>
                    
                    <Typography variant="h4" color="inherit" className="tst">
                        |Esmeralda Neves| 
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start" className="color" >
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor '>
                            <Typography variant="h5" color="inherit" className="tst" >
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/posts' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" color="inherit" className="tst">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/temas' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" color="inherit" className="tst" >
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/sobre' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" color="inherit" className="tst" >
                                Conheça a autora!
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/formularioTema' className='text-decorator-none' >
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className="tst" >
                               |Cadastrar tema|
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h5" color="inherit" className="log , tst " >
                            Logout
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>

        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;