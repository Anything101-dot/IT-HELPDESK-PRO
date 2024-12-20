// import { Box, Button, TextField } from '@mui/material'
// import React from 'react'

// const SignupComponent = () => {
//     return (

//         <Box>


//             <br></br>

//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Name"

//                 />

//             </div>

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

//                 <br></br>

//                 <div>
//                     <TextField
//                         required
//                         id="outlined-required"
//                         label="PhoneNo"

//                     />
//                 </div>

//                 <br></br>
//                 <Button color="inherit" style={{ color: 'black', background: 'skyblue' }}>Register</Button>

//             </div>
//         </Box>



//     )
// }

// export default SignupComponent


// import { Box, Button, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignupComponent = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [phoneNo, setPhoneNo] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleRegister = async () => {
//         try {
//             const response = await axios.post('https://localhost:7228/api/Task/register', {

//                 name: name,
//                 password: password
//             });
//             // Assuming the API returns a status code of 200 on successful registration
//             if (response.status === 200) {
//                 navigate('/login'); // Navigate to home page or a success page on successful registration
//             }
//         } catch (err) {
//             setError('Registration failed. Please try again.');
//         }
//     };

//     return (
//         <Box>
//             <br />
//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </div>
//             <br />
//             <div>
//                 {/* <TextField
//                     required
//                     id="outlined-required"
//                     label="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 /> */}
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
//                 <br />
//                 <div>
//                     {/* <TextField
//                         required
//                         id="outlined-required"
//                         label="PhoneNo"
//                         value={phoneNo}
//                         onChange={(e) => setPhoneNo(e.target.value)}
//                     /> */}
//                 </div>
//                 <br />
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <Button
//                     color="inherit"
//                     style={{ color: 'black', background: 'skyblue' }}
//                     onClick={handleRegister}
//                 >
//                     Register
//                 </Button>
//             </div>
//         </Box>
//     );
// }

// export default SignupComponent;
//=========================================================================


// import { Box, Button, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignupComponent = () => {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [post_Id, setPost_Id] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleRegister = async () => {
//         try {
//             const response = await axios.post('https://localhost:7228/api/Task/register', {
//                 name: name,
//                 password: password,
//                 post_Id: post_Id
//             });
//             // Assuming the API returns a status code of 200 on successful registration
//             if (response.status === 200) {
//                 navigate('/login'); // Navigate to login page on successful registration
//             }
//         } catch (err) {
//             setError('Registration failed. Please try again.');
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
//             <Typography variant="h4" component="h1" gutterBottom>
//                 Registration
//             </Typography>
//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <br />
//                 <TextField
//                     id="outlined-password-input"
//                     label="Password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     sx={{ mt: 2 }}
//                 />
//                 <br />
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="PostID "
//                     value={post_Id}
//                     onChange={(e) => setPost_Id(e.target.value)}
//                 />



//             </div>
//             <br />
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <Button
//                 color="inherit"
//                 style={{ color: 'black', background: 'skyblue' }}
//                 onClick={handleRegister}
//             >
//                 Register
//             </Button>
//         </Box>
//     );
// }

// export default SignupComponent;



// import { Box, Button, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     typography: {
//         fontFamily: 'Arial, sans-serif', // Change this to your desired font
//         h4: {
//             fontWeight: 'bold',
//         },
//         body1: {
//             fontSize: '1rem',
//         },
//         button: {
//             fontSize: '0.875rem',
//         },
//     },
// });

// const SignupComponent = () => {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [post_Id, setPost_Id] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleRegister = async () => {
//         try {
//             const response = await axios.post('https://localhost:7228/api/Task/register', {
//                 name: name,
//                 password: password,
//                 post_Id: post_Id
//             });
//             if (response.status === 200) {
//                 navigate('/login');
//             }
//         } catch (err) {
//             setError('Registration failed. Please try again.');
//         }
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     height: '100vh',
//                     textAlign: 'center',
//                     backgroundColor: '#f5f5f5',
//                     padding: '20px',
//                     borderRadius: '10px',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 }}
//             >
//                 <Typography variant="h4" component="h1" gutterBottom>
//                     Registration
//                 </Typography>
//                 <div>
//                     <TextField
//                         required
//                         id="outlined-required"
//                         label="Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         margin="normal"
//                         fullWidth
//                         sx={{ mt: 2 }}
//                     />
//                     <TextField
//                         id="outlined-password-input"
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         margin="normal"
//                         fullWidth
//                         sx={{ mt: 2 }}
//                     />
//                     <TextField
//                         required
//                         id="outlined-required"
//                         label="Post ID"
//                         value={post_Id}
//                         onChange={(e) => setPost_Id(e.target.value)}
//                         margin="normal"
//                         fullWidth
//                         sx={{ mt: 2 }}
//                     />
//                 </div>
//                 {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
//                 <Button
//                     color="primary"
//                     variant="contained"
//                     onClick={handleRegister}
//                     sx={{ mt: 3, backgroundColor: 'skyblue', color: 'black', '&:hover': { backgroundColor: '#87ceeb' } }}
//                 >
//                     Register
//                 </Button>
//             </Box>
//         </ThemeProvider>
//     );
// }

// export default SignupComponent;



import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Arial, sans-serif', // Change this to your desired font
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
                        margin="normal"
                        fullWidth
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


