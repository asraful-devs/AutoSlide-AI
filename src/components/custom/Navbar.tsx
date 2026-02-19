import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
    const { user } = useUser();

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
                {!user ? (
                    <SignInButton mode='modal'>
                        <Button size='sm'>Sign In</Button>
                    </SignInButton>
                ) : (
                    <UserButton />
                )}

                <ModeToggle />
            </nav>
        </header>
    );
};

export default Navbar;
