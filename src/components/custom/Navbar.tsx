import logo from '../../assets/logo.jpg';
import { Button } from '../ui/button';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
            <img src={logo} alt='Logo' className='w-10 h-10' />
            <div className='flex space-x-2'>
                <Button>Sign In</Button>
                <Button variant='default'>Sign Up</Button>
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
