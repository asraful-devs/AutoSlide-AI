import { Outlet } from 'react-router-dom';
import Navbar from '../components/custom/Navbar';

const Layout = () => {
    return (
        <div className='min-h-screen'>
            <div className='mx-auto max-w-7xl px-6'>
                <Navbar />
                <main className='py-8'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
