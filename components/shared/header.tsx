import Image from 'next/image';
import React from 'react';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { Container } from './container';

interface HeaderProps {
  className?: string;
}
export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex justify-between py-8 items-center'>
        {/* LEFT SIDE */}
        <div className='flex items-center gap-4'>
          <Image src='/logo.png' width={35} height={35} alt='logo' />
          <div>
            <h1 className='text-2xl font-bold uppercase'>Next pizza</h1>
            <p className='text-sm text-gray-400 leading-3'>
              вкуснее уже некуда
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-1'>
            <User size={15} />
            Войти
          </Button>
          <div>
            <Button className='group relative'>
              <b>520₽</b>
              <div className='w-[1px] h-full mx-3 bg-white/30'></div>
              <div className='flex items-center gap-1 group-hover:opacity-0 transition duration-300'>
                <ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className='w-5 absolute right-5 transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0' />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
