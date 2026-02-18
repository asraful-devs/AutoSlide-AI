import { Play } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { HeroVideoDialog } from '../../components/ui/hero-video-dialog';

const Hero = () => {
    return (
        <div className='space-y-12'>
            {/* Hero Text */}
            <div className='space-y-4 text-center pt-16'>
                <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
                    Create Slides with AI
                </h1>
                <p className='mx-auto max-w-xl text-muted-foreground'>
                    Transform your ideas into beautiful presentations instantly.
                    Powered by AI, designed for simplicity.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex items-center justify-center gap-3'>
                <Button
                    variant='outline'
                    size='sm'
                    onClick={() =>
                        document
                            .getElementById('hero-video')
                            ?.scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    <Play className='mr-1 h-4 w-4' />
                    Watch Demo
                </Button>
                <Button size='sm'>Get Started</Button>
            </div>

            {/* Video Section */}
            <div
                className='relative w-4xl mx-auto mt-12 aspect-video'
                id='hero-video'
            >
                <HeroVideoDialog
                    className='block dark:hidden'
                    animationStyle='from-center'
                    videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
                    thumbnailSrc='https://startup-template-sage.vercel.app/hero-light.png'
                    thumbnailAlt='Hero Video'
                />
                <HeroVideoDialog
                    className='hidden dark:block'
                    animationStyle='from-center'
                    videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
                    thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
                    thumbnailAlt='Hero Video'
                />
            </div>
        </div>
    );
};

export default Hero;
