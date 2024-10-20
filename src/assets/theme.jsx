'use client'
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const primaryBase = '#8700ff';
const primaryMain = alpha(primaryBase, 0.7);
const secondaryBase = '#c499ff';
const secondaryMain = alpha(secondaryBase, 0.7);

export const theme = createTheme({
    palette: {
        primary: {
            main: primaryMain,
            light: alpha(primaryBase, 0.5),
            dark: alpha(primaryBase, 0.9),
            contrastText: getContrastRatio(primaryMain, '#291b40') > 4.5 ? '#c499ff' : "#fff"
        },
        secondary: {
            main: secondaryBase,
            light: alpha(secondaryBase, 0.5),
            dark: alpha(secondaryBase, 0.9),
            contrastText: getContrastRatio(secondaryMain, '#291b40') > 4.5 ? secondaryBase : primaryBase
        },
        background: {
            default: '#291b40',
            paper: '#493c5a',
        },
    },
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    color: secondaryMain, // Default text color
                    fontSize: '16px',
                    textTransform: 'none',
                    minWidth: 120,
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        bottom: '-5px',
                        height: '4px',
                        width: '100%',
                        backgroundColor: secondaryMain, // Bar color under tab
                        borderRadius: '2px',
                        transform: 'translateX(-50%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        boxShadow: `0 0 10px ${secondaryMain}, 0 0 20px ${alpha(secondaryBase, 0.9)}`, // Neon effect for bar
                    },
                    '&.Mui-selected': {
                        color: secondaryMain, // Color when selected
                        textShadow: `0 0 10px #fff, 0 0 20px ${alpha(primaryBase, 0.5)}`, // Neon text shadow
                        '&::after': {
                            opacity: 1, // Show neon bar when selected
                        },
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: alpha(primaryBase, 0.5), // primary.light equivalent
                    color: '#fff',
                    boxShadow: '0 0 20px 10px rgba(135, 0, 255, 0.7), 0 0 50px 20px rgba(135, 0, 255, 0.5)',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 1)',
                    border: 0,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                },
            },
        },
    },
});