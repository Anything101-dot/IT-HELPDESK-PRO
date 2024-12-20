// import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';

// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavbarComponent = () => {
//     return (


//         <Box sx={{ flexGrow: 1 }}>


//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                     >

//                     </IconButton>
//                     <Box sx={{ flexGrow: 1 }} />
//                     <Link to={'/login'}><Button color="inherit" style={{ color: "white" }}>Login</Button></Link>
//                     <Link to={'/signup'}><Button color="inherit" style={{ color: "white" }}>SignUp</Button></Link>
//                     {/* <Link to={'/home'}><Button color="inherit" style={{ color: "white" }}>Home</Button></Link> */}

//                     <Link to={'/logout'}><Button color="inherit" style={{ color: "white" }}>Logout</Button></Link>

//                 </Toolbar>
//             </AppBar>


//         </Box>
//     );
// }

// export default NavbarComponent; // Ensure this line exists

import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'dodgerblue' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* Menu Icon can be placed here */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       IT Help Desk Support
                    </Typography>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Login</Button>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Sign Up</Button>
                    </Link>
                    <Link to="/logout" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Logout</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavbarComponent;

