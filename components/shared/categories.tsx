import React from 'react';
import { cn } from '@/lib/utils';

interface CategoriesProps {
  className?: string;
}

const cats = [
  'Пиццы',
  'Комбо',
  'Закуски',
  'Коктейли',
  'Кофе',
  'Напитки',
  'Десерты',
  'Десерты',
];
const activeIndex = 0;

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  return (
    <div className={cn('inline-flex bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map((cat, index) => (
        <a
          className={cn(
            'h-11 flex items-center font-bold p-5 rounded-2xl',
            activeIndex === index &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          key={index}
        >
          {cat}
        </a>
      ))}
    </div>
  );
};
