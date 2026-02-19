import { ClerkProvider } from '@clerk/clerk-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './components/theme-provider';
import './index.css';
import Layout from './layout/Layout';
import Project from './page/workspace/Project/Project';
import Workspace from './page/workspace/Workspace';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <App /> },
            {
                path: '/workspace',
                element: <Workspace />,
                children: [
                    { path: 'project', element: <Project /> },
                    { path: 'project/:projectId', element: <Project /> },
                ],
            },
        ],
    },
]);

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file');
}

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <StrictMode>
                <div className=''>
                    <RouterProvider router={router} />
                </div>
            </StrictMode>
        </ClerkProvider>
    </ThemeProvider>
);
