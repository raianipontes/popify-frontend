import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import './index.css';

const theme = extendTheme({
    colors: {
        brand: {
            primary: '#180C34',
            secondary: '#2DD881',
        },
    },
    styles: {
        global: {
            body: {
                bg: '#180C34',
                color: 'white',
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
