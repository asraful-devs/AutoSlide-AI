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

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <StrictMode>
            <div className=''>
                <RouterProvider router={router} />
            </div>
        </StrictMode>
    </ThemeProvider>
);
