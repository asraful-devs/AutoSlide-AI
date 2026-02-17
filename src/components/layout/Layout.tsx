import { Outlet } from 'react-router-dom';
import Navbar from '../custom/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
