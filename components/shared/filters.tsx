import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filterCheckbox';
import { Input } from '../ui';

interface FiltersProps {
  className?: string;
}
export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text='Фильрация' size='sm' className='mb-5 font-bold' />
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex items-center gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type='number' placeholder='100' min={100} max={1000} />
        </div>
      </div>
    </div>
  );
};
