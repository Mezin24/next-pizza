import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  className?: string;
}
export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('max-w-[1280px] mx-auto', className)}>{children}</div>
  );
};
