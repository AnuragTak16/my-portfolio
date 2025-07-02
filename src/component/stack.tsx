import { useState } from 'react';
import {
  Code,
  ArrowRight,
  Zap,
  Layout,
  Server,
  BrainCircuit,
  Terminal,
} from 'lucide-react';

export const TechStackShowcase = () => {
  const [activeStack, setActiveStack] = useState('frontend');

  const stacks = {
    frontend: {
      title: 'Frontend',
      icon: <Layout className='w-8 h-8 text-indigo-600' />,
      color: 'bg-blue-100',
      ringColorClass: 'ring-indigo-600',
      items: [
        { name: 'HTML', description: 'Structure of web pages' },
        { name: 'CSS', description: 'Styling language' },
        { name: 'JavaScript', description: 'Client-side scripting' },
        { name: 'React.js', description: 'UI component library' },
      ],
    },
    backend: {
      title: 'Backend',
      icon: <Server className='w-8 h-8 text-emerald-600' />,
      color: 'bg-blue-100',
      ringColorClass: 'ring-emerald-600',
      items: [
        { name: 'Node.js', description: 'JavaScript runtime' },
        { name: 'Express.js', description: 'Web framework for Node.js' },
        { name: 'MongoDB', description: 'NoSQL database' },
        { name: 'REST API', description: 'API architecture style' },
      ],
    },
    programming: {
      title: 'Languages',
      icon: <Terminal className='w-8 h-8 text-amber-600' />,
      color: 'bg-blue-100',
      ringColorClass: 'ring-amber-600',
      items: [
        { name: 'JavaScript', description: 'Web development' },
        { name: 'Python', description: 'Versatile programming' },
        { name: 'C++', description: 'System programming' },
        { name: 'TypeScript', description: 'Typed JavaScript' },
      ],
    },
    datascience: {
      title: 'Data & ML',
      icon: <BrainCircuit className='w-8 h-8 text-rose-600' />,
      color: 'bg-blue-100',
      ringColorClass: 'ring-rose-600',
      items: [
        { name: 'Python', description: 'ML foundation' },
        { name: 'Machine Learning', description: 'AI algorithms' },
        { name: 'Data Analysis', description: 'Insights from data' },
        { name: 'MongoDB', description: 'Data storage' },
      ],
    },
  };

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 p-6 font-sans'>
      <div className='flex pt-6'></div>
      <div className='max-w-6xl mx-auto'>
        <header className='mb-12 text-center'>
          <h1 className='text-2xl md:text-5xl font-bold mt-8 mb-2 bg-clip-text  text-blue-600'>
            My Technology Stack
          </h1>
          <p className='text-gray-600 text-lg'>
            Full-Stack Development & Data Science
          </p>
        </header>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
          {Object.entries(stacks).map(([key, stack]) => (
            <button
              key={key}
              onClick={() => setActiveStack(key)}
              aria-current={activeStack === key ? 'true' : undefined}
              className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center justify-center shadow-sm ${
                activeStack === key
                  ? `${stack.color} bg-opacity-10 ring-2 ring-opacity-60 ${stack.ringColorClass}`
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className='mb-2'>{stack.icon}</div>
              <span className='font-medium'>{stack.title}</span>
            </button>
          ))}
        </div>

        <div className='relative'>
          {Object.entries(stacks).map(([key, stack]) => (
            <div
              key={key}
              className={`transition-all duration-500 ${
                activeStack === key
                  ? 'opacity-100 scale-100 relative'
                  : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className='flex items-center mb-6'>
                {stack.icon}
                <h2 className='text-2xl font-bold ml-3'>{stack.title} Stack</h2>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {stack.items.map((item, index) => (
                  <div
                    key={index}
                    className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 group'
                  >
                    <div className='flex items-center mb-4'>
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${stack.color} bg-opacity-15`}
                      >
                        <Code
                          className={`w-5 h-5 text-current text-opacity-90`}
                        />
                      </div>
                      <h3 className='text-xl font-semibold ml-3 text-gray-800'>
                        {item.name}
                      </h3>
                      <ArrowRight className='w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 text-gray-500' />
                    </div>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16'>
          <div className='flex items-center mb-4'>
            <Zap className='w-5 h-5 text-amber-500 mr-2' />
            <h3 className='text-lg font-medium text-gray-800'>
              Experience Level
            </h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
            <div className='space-y-2'>
              <p className='text-sm text-gray-600'>HTML/CSS</p>
              <div className='bg-gray-100 rounded-full h-3 w-full'>
                <div
                  className='bg-indigo-500 h-3 rounded-full'
                  style={{ width: '95%' }}
                ></div>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-gray-600'>JavaScript/React</p>
              <div className='bg-gray-100 rounded-full h-3 w-full'>
                <div
                  className='bg-indigo-500 h-3 rounded-full'
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-gray-600'>Node/Express</p>
              <div className='bg-gray-100 rounded-full h-3 w-full'>
                <div
                  className='bg-emerald-500 h-3 rounded-full'
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-gray-600'>Python/ML</p>
              <div className='bg-gray-100 rounded-full h-3 w-full'>
                <div
                  className='bg-rose-500 h-3 rounded-full'
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='space-y-2'>
              <p className='text-sm text-gray-600'>MongoDB</p>
              <div className='bg-gray-100 rounded-full h-3 w-full'>
                <div
                  className='bg-emerald-500 h-3 rounded-full'
                  style={{ width: '78%' }}
                ></div>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-gray-600'>C++</p>
              <div className='bg-gray-100 rounded-full h-3 w-full'>
                <div
                  className='bg-amber-500 h-3 rounded-full'
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-gray-600'>Data Analysis</p>
              <div className='bg-gray-100 rounded-full h-3 w-full'>
                <div
                  className='bg-rose-500 h-3 rounded-full'
                  style={{ width: '82%' }}
                ></div>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-gray-600'>Overall</p>
              <div className='bg-gray-100 rounded-full h-3 w-full'>
                <div
                  className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-3 rounded-full'
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
