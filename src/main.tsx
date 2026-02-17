import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './components/layout/Layout';
import { ThemeProvider } from './hooks/theme-provider';
import './index.css';
import Workspace from './pages/workspace/Workspace';
import Project from './pages/workspace/project/Project';

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

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <StrictMode>
            <div className='min-h-screen bg-background text-foreground'>
                <RouterProvider router={router} />
            </div>
        </StrictMode>
    </ThemeProvider>
);
