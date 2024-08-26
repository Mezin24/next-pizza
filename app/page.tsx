import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='pb-14 mt-10'>
        <div className='flex gap-[60px]'>
          {/* Filters */}
          <div className='w-[250px]'>
            <Filters />
          </div>
          {/* Product List */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>Product List</div>
          </div>
        </div>
      </Container>
    </>
  );
}
