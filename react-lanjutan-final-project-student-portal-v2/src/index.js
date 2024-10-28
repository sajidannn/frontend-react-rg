import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.js';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </BrowserRouter>
);
