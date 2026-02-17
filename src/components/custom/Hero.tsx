import { Play } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
    return (
        <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-white'>
                Welcome to Auto Slide AI
            </h1>
            <p className='text-white mt-4 px-20'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                alias laboriosam molestiae. Placeat voluptate exercitationem
                doloremque adipisci, quibusdam facere nostrum incidunt suscipit
                voluptas reprehenderit id vitae error assumenda veniam delectus.
            </p>
            <div className='mt-6'>
                <Button>
                    Watch Video <Play />
                </Button>
                <Button>Get Started</Button>
            </div>
        </div>
    );
};

export default Hero;
