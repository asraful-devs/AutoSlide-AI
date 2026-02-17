import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Workspace from './pages/workspace/Workspace';
import Project from './pages/workspace/project/Project';

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    {
        path: '/workspace',
        element: <Workspace />,
        children: [
            // Add nested routes here if needed
            { path: 'project/:projectId?', element: <Project /> },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
