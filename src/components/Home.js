import image from "../images/C1.png"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import ResponsiveAppBar from './ResponsiveAppBar';
import Slider from './Slider';
import Nav from './Nav';
import Category from './Category';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Saylani Discount App
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


function Home() {
    return (
        <div>
            {/* <ResponsiveAppBar/> */}
            <header>
                <Nav />
            </header>
            <main>
                <Slider/>

                <Category />
                <div className='container my-3'>
                    <div className='row'>
                    <span className='fw-bold my-3'>Products</span>
                        <div className='col-sm-3'></div>
                        <div className='col-sm-6'>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                        </div>
                        <div className='col-sm-3'></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Home;