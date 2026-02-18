import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
    return (
        <header className='flex items-center justify-between py-4'>
            <Link to='/' className='text-xl font-semibold tracking-tight'>
                AutoSlide AI
            </Link>

            <nav className='flex items-center gap-6'>
                <Link
                    to='/'
                    className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                    Home
                </Link>
                <Link
                    to='/workspace'
                    className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                    Workspace
                </Link>
                <ModeToggle />
            </nav>
        </header>
    );
};

export default Navbar;
