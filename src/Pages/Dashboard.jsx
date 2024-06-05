import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));



const defaultTheme = createTheme();

export default function Dashboard() {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/", { state: { value: "value" } });
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar>
                    <Toolbar
                        sx={{
                            pr: '24px', 
                            backgroundColor: "#4caf50",
                        }}
                    >
                       
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
                            
                        >
                            <HomeIcon sx={{ mr: 1}} />
                           Home
                        </Typography>
                        <IconButton 
                            color="inherit"  
                            onClick={logout} 
                            sx={{fontSize: '15px', padding: '2px 4px', minWidth: 'unset' }}>Logout</IconButton>
                    </Toolbar>
                </AppBar>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        mt: 8, 
                    }}
                >
                    <Typography variant="body2" color="green" align='center' padding={15}>
                        <h1>WELCOME TO RAIHANIE'S WEBSITE</h1>
                    </Typography>
                </Box>
               
            </Box>
        </ThemeProvider>
    );
}