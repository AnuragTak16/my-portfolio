import { Navbar } from './navbar';

export const Portfolio = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className='flex flex-col md:flex-row h-screen w-full'>
      <div className='w-full md:w-3/4 bg-gray-100 p-1 relative overflow-hidden rounded-2xl'>
        <div className='sticky top-0 z-50 bg-gray-100 shadow-md'>
          <Navbar />
        </div>
        <div className='block md:hidden w-full h-64 relative z-0 mt-20'>
          <img
            src='/image/img3.jpeg'
            alt='Mobile Cover'
            className='w-full h-full object-cover rounded-2xl '
          />
        </div>

        <div className='hidden md:grid grid-cols-12 grid-rows-12 gap-1 h-full overflow-hidden mt-2'>
          <div className='col-span-4 row-span-6 relative'>
            <img
              src='/image/img1.jpeg'
              alt='Girl on boardwalk'
              className='absolute inset-0 w-full h-full object-cover rounded-2xl top-[-190px]'
            />
          </div>
          <div className='col-span-4 row-span-3 col-start-1 row-start-7 relative'>
            <img
              src='/image/img2.webp'
              alt='Ballet practice'
              className='absolute w-full h-full object-cover rounded-lg top-[50px]'
            />
          </div>
          <div className='col-span-4 row-span-3 col-start-1 row-start-7 relative'>
            <img
              src='/image/img3.jpeg'
              alt='Ballet practice'
              className='absolute w-full h-full object-cover rounded-lg top-[-190px]'
            />
          </div>
          <div className='col-span-4 row-span-3 col-start-1 row-start-10 relative'>
            <img
              src='/image/img4.webp'
              alt='Two girls in green'
              className='absolute w-full h-full object-cover rounded-lg top-[50px]'
            />
          </div>

          <div className='col-span-4 row-span-3 col-start-5 row-start-1'>
            <img
              src='/image/image5.avif'
              alt='Ballet shoes'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='col-span-4 row-span-3 col-start-5 row-start-4 bg-yellow-400 rounded-sm p-3 flex flex-col justify-center'>
            <div className='flex justify-center mb-1'>
              <img src='image/image 31.png' alt='bulb' />
            </div>
            <p className='text-base font-bold text-blue-900'>
              You can't run from errors—debug them or repeat them.
            </p>
          </div>
          <div className='col-span-4 row-span-4 col-start-5 row-start-7'>
            <img
              src='/image/img6.webp'
              alt='Girl in purple dress'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='col-span-4 row-span-2 col-start-5 row-start-11'>
            <img
              src='/image/img8.webp'
              alt='Girl dancing outside'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>

          <div className='col-span-4 row-span-3 col-start-9 row-start-1'>
            <img
              src='/image/img9.webp'
              alt='Ballet legs'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='col-span-4 row-span-4 col-start-9 row-start-4'>
            <img
              src='/image/img10.avif'
              alt='Dancing girl'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='col-span-4 row-span-3 col-start-9 row-start-8 bg-yellow-400 rounded-sm p-3 flex flex-col justify-center'>
            <div className='flex justify-center mb-1'>
              <img src='image/image 31.png' alt='bulb' />
            </div>
            <p className='text-base font-bold text-blue-900'>
              Your mindset is the compiler—garbage in, garbage out.
            </p>
          </div>
          <div className='col-span-4 row-span-2 col-start-9 row-start-11'>
            <img
              src='/image/img11.webp'
              alt='Kids portrait'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>
      </div>

      <div className='flex-grow flex flex-col justify-center items-center px-4 text-center mt-[-157px]'>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-bold text-yellow-500 mb-6 md:mb-20 tracking-wides mt-5'>
          HERE IT IS MY PORTFOLIO
        </h1>
        <h2 className='text-3xl sm:text-5xl md:text-8xl font-bold mb-4 md:mb-8 leading-none'>
          {getGreeting()}
        </h2>
        <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold mb-3'>
          Hello, I'm Anurag Tak
        </h2>
        <p className='text-lg sm:text-2xl md:text-3xl  mt-20'>
          Full Stack Developer
        </p>
        <p className='text-base sm:text-lg md:text-xl text-black-600 mt-5 px-2 md:px-4'>
          Passionate about creating beautiful, responsive web applications using
          modern technologies like React and Tailwind CSS.
        </p>
        <div className='border-t mt-5 border-gray-200 pt-4 px-2 md:px-4'>
          <p className='text-sm sm:text-base md:text-xl text-black-500 mt-5'>
            I specialize in transforming designs into functional, elegant web
            experiences with clean code and attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};
