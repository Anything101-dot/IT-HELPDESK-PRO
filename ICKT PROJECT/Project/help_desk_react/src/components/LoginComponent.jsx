// import { Box, Button, TextField } from '@mui/material'
// import React from 'react'

// const LoginComponent = () => {
//     return (
//         <Box>
//             <br></br>

//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Email"

//                 />

//                 <div>

//                     <br></br>
//                     <TextField
//                         id="outlined-password-input"
//                         label="Password"
//                         type="password"


//                     />
//                 </div>
//             </div>
//             <br></br>
//             <Button
//                 color="inherit" style={{ color: 'black', background: 'skyblue' }}>Login</Button>

//         </Box>

//     )
// }

// export default LoginComponent
//======================================================================================================================
//================working
// import { Box, Button, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginComponent = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('https://localhost:7228/api/Task/login', {
//                 name: username,
//                 password: password
//             });
//             // Assuming the API returns a status code of 200 on successful login
//             if (response.status === 200) {
//                 // navigate('/home'); // Navigate to home page on success

//                 const role = response.data.role;
//                 if (role === 'Admin') { navigate('/home'); }
//                 else if (role === 'Employee') { navigate('/addtask'); }
//                 else { navigate('/home'); }
//             }
//         } catch (err) {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <Box>
//             <br />
//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <div>
//                     <br />
//                     <TextField
//                         id="outlined-password-input"
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//             </div>
//             <br />
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <Button
//                 color="inherit"
//                 style={{ color: 'black', background: 'skyblue' }}
//                 onClick={handleLogin}
//             >
//                 Login
//             </Button>
//         </Box>
//     );
// };

// export default LoginComponent;

//======================================

// import { Box, Button, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginComponent = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('https://localhost:7228/api/Task/login', {
//                 name: username,
//                 password: password
//             });
//             // Assuming the API returns a status code of 200 on successful login
//             if (response.status === 200) {
//                 const role = response.data.role;
//                 if (role === 'Admin') { navigate('/home'); }
//                 else if (role === 'Employee') { navigate('/addtask'); }
//                 else { navigate('/updateassignee'); }
//             }
//         } catch (err) {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 height: '100vh',
//                 textAlign: 'center',
//             }}


//         >

//             <Typography variant="h4" component="h1" gutterBottom> Login </Typography>
//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <div>
//                     <br />
//                     <TextField
//                         id="outlined-password-input"
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//             </div>
//             <br />
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <Button
//                 color="inherit"
//                 style={{ color: 'black', background: 'skyblue' }}
//                 onClick={handleLogin}
//             >
//                 Login
//             </Button>
//         </Box>
//     );
// };

// export default LoginComponent;

// import { Box, Button, TextField, Typography, Paper } from '@mui/material';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../assets/Images/images1.jpg';

// const LoginComponent = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('https://localhost:7228/api/Task/login', {
//                 name: username,
//                 password: password
//             });
//             // Assuming the API returns a status code of 200 on successful login
//             if (response.status === 200) {
//                 const role = response.data.role;
//                 if (role === 'Admin') { navigate('/home'); }
//                 else if (role === 'Employee') { navigate('/addtask'); }
//                 else { navigate('/updateassignee'); }
//             }
//         } catch (err) {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 height: '100vh',
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: 'cover',
//                  backgroundPosition: 'center',
//                 //background: 'linear-gradient(to right,rgb(35, 74, 90), #2575fc)',
//                 textAlign: 'center',
//                 padding: 2,
//                 fontFamily: 'Poppins, sans-serif',
//             }}
//         >
//             <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, maxWidth: 400, width: '100%' }}>
//                 <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>Login</Typography>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     fullWidth
//                     margin="normal"
//                     sx={{ marginBottom: 2 }}
//                 />
//                 <TextField
//                     id="outlined-password-input"
//                     label="Password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     fullWidth
//                     margin="normal"
//                     sx={{ marginBottom: 2 }}
//                 />
//                 {error && <Typography color="error" variant="body2">{error}</Typography>}
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleLogin}
//                     sx={{ marginTop: 2, backgroundColor: '#2575fc', '&:hover': { backgroundColor: '#2575fc' } }}
//                 >
//                     Login
//                 </Button>
//             </Paper>
//         </Box>
//     );
// };

// export default LoginComponent;

import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Arial, sans-serif',
        h4: {
            fontWeight: 'bold',
        },
        body1: {
            fontSize: '1rem',
        },
        button: {
            fontSize: '0.875rem',
        },
    },
});

const SignupComponent = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [post_Id, setPost_Id] = useState('');
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const validatePassword = (password) => {
        if (password.length < 8) {
            return 'Password must be at least 8 characters long';
        } else if (!/[A-Z]/.test(password)) {
            return 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(password)) {
            return 'Password must contain at least one number';
        }
        return '';
    };

    const handleRegister = async () => {
        const passwordValidationResult = validatePassword(password);
        if (passwordValidationResult) {
            setPasswordError(passwordValidationResult);
            return;
        }
        
        try {
            const response = await axios.post('https://localhost:7228/api/Task/register', {
                name: name,
                password: password,
                post_Id: post_Id
            });
            if (response.status === 200) {
                navigate('/login');
            }
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    textAlign: 'center',
                    backgroundColor: '#f5f5f5',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Registration
                </Typography>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError(validatePassword(e.target.value));
                        }}
                        fullWidth
                        margin="normal"
                        sx={{ mt: 2, mb: 2 }}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Post ID"
                        value={post_Id}
                        onChange={(e) => setPost_Id(e.target.value)}
                        margin="normal"
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                </div>
                {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleRegister}
                    sx={{ mt: 3, backgroundColor: 'skyblue', color: 'black', '&:hover': { backgroundColor: '#87ceeb' } }}
                >
                    Register
                </Button>
            </Box>
        </ThemeProvider>
    );
}

export default SignupComponent;

