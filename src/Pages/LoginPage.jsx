import { Container, Box, Paper, TextField, Button, Typography, InputAdornment, IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from '../Services/Supabase';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErroMessage] = useState("Something wen't wrong");

    const navigate = useNavigate();

    const login = async () => {

        if(email === "" || password === ""){
            setIsError(true);
            setErroMessage("Please fill in the fields");
            return
        }

        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if (error !== null) {
            setIsError(true);
            setErroMessage(error.message);
            return
        }

        if (data !== null) {
            navigate("/dashboard");
        }
    }

    return (
        <>
            <Box sx={{ alignContent: 'center', height: '100vh' }}>
                <Container maxWidth="xs" component={Paper} sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ p: 1 }}align="center">Login Window</Typography>
                    {
                        isError &&
                        <Box>
                            <Typography color="red" align="center">{errorMessage}</Typography>
                        </Box>
                    }
                    <Box sx={{ p: 1 }}>
                        <TextField type="email" fullWidth label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            required
                            fullWidth
                            label="Password"
                            variant="outlined"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Button size="large" onClick={login} fullWidth variant="contained" endIcon={<LoginIcon />}>Login</Button>
                    </Box>
                
                    <Box sx={{ p: 1 }}>
                        <Link to="/signup">
                            <Typography align="center">Create an account</Typography>
                        </Link>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
