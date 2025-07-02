import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EducationSection = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-6 sm:px-6 md:px-12'>
      <div className='mb-6'>
        <button
          onClick={() => navigate('/')}
          className='flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-blue-200 transition'
          aria-label='Go back to home'
        >
          <ArrowLeft className='w-4 h-4 sm:w-5 sm:h-5' />
          <span className='text-sm sm:text-base'>Back</span>
        </button>
      </div>

      <section className='space-y-6 bg-white shadow-xl rounded-2xl p-4 sm:p-8 md:p-12 max-w-5xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold text-blue-600 text-center'>
          Education
        </h2>

        <div className='bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm space-y-2'>
          <h3 className='text-xl sm:text-2xl font-semibold text-blue-700'>
            Bachelor of Technology (B.Tech)
          </h3>
          <p className='text-gray-700'>
            <span className='font-bold'>College:</span> Acropolis Institute of
            Technology and Research, Indore
          </p>
          <p className='text-gray-700'>
            <span className='font-medium'>Course:</span> Computer Science and
            Engineering
          </p>
          <p className='text-gray-700'>
            <span className='font-medium'>Specialization:</span> Artificial
            Intelligence & Machine Learning (AI & ML)
          </p>
          <p className='text-gray-700'>
            <span className='font-bold'>University:</span> Rajiv Gandhi
            Proudyogiki Vishwavidyalaya (RGPV)
          </p>
          <p className='text-gray-700'>
            <span className='font-bold'>Duration:</span> 2020 – 2024
          </p>
          <p className='text-gray-700'>
            <span className='font-bold'>CGPA:</span> 8.3 / 10
          </p>
        </div>

        <div className='bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm space-y-1'>
          <h3 className='text-lg sm:text-xl font-semibold text-blue-700'>
            Higher Secondary Education (Class 12th)
          </h3>
          <p className='text-gray-700'>
            <span className='font-bold'>Board:</span> Central Board of Secondary
            Education (CBSE)
          </p>
          <p className='text-gray-700'>
            <span className='font-bold'>Session:</span> 2018 – 2019
          </p>
        </div>

        <div className='bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm space-y-1'>
          <h3 className='text-lg sm:text-xl font-semibold text-blue-700'>
            Secondary Education (Class 10th)
          </h3>
          <p className='text-gray-700'>
            <span className='font-bold'>Board:</span> Central Board of Secondary
            Education (CBSE)
          </p>
          <p className='text-gray-700'>
            <span className='font-bold'>Session:</span> 2017 – 2018
          </p>
        </div>
      </section>
    </div>
  );
};
