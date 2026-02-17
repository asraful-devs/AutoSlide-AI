import { Outlet } from 'react-router-dom';

const Workspace = () => {
    return (
        <div>
            <h1>Workspace</h1>

            <Outlet />
        </div>
    );
};

export default Workspace;
