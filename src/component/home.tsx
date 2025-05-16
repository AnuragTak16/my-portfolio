import { Navbar } from "./navbar";
export const Portfolio = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left side - Image Collage */}
      <div className="w-full md:w-3/4 bg-gray-100 p-1 relative overflow-hidden rounded-2xl">
        <Navbar />
        <div className="grid grid-cols-12 grid-rows-12 gap-1 h-full overflow-hidden">
          {/* First column */}
          <div className="col-span-4 row-span-6 relative">
            <img
              src="/image/img1.jpeg"
              alt="Girl on boardwalk"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl top-[-190px]"
            />
          </div>

          <div className="col-span-4 row-span-3 col-start-1 row-start-7 relative">
            <img
              src="/image/img2.webp"
              alt="Ballet practice"
              className="absolute w-full h-full object-cover rounded-lg top-[50px]"
            />
          </div>

          <div className="col-span-4 row-span-3 col-start-1 row-start-7 relative">
            <img
              src="/image/img3.jpeg"
              alt="Ballet practice"
              className="absolute w-full h-full object-cover rounded-lg top-[-190px]"
            />
          </div>

          <div className="col-span-4 row-span-3 col-start-1 row-start-10 relative">
            <img
              src="/image/img4.webp"
              alt="Two girls in green"
              className="absolute w-full h-full object-cover rounded-lg top-[50px]"
            />
          </div>

          {/* Second column */}
          <div className="col-span-4 row-span-3 col-start-5 row-start-1">
            <img
              src="/image/image5.avif"
              alt="Ballet shoes"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="col-span-4 row-span-3 col-start-5 row-start-4 bg-yellow-400 rounded-sm p-3 flex flex-col justify-center">
            <div className="flex justify-center mb-1">
              <img src="image/image 31.png" alt="bulb" />
            </div>
            <p className="text-base font-bold text-blue-900">
              You can't run from errors—debug them or repeat them.
            </p>
          </div>

          <div className="col-span-4 row-span-4 col-start-5 row-start-7  top-10 ">
            <img
              src="/image/img6.webp"
              alt="Girl in purple dress"
              className="w-full h-full object-cover rounded-lg a"
            />
          </div>

          <div className="col-span-4 row-span-2 col-start-5 row-start-11">
            <img
              src="/image/img8.webp"
              alt="Girl dancing outside"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Third column */}
          <div className="col-span-4 row-span-3 col-start-9 row-start-1">
            <img
              src="/image/img9.webp"
              alt="Ballet legs"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="col-span-4 row-span-4 col-start-9 row-start-4">
            <img
              src="/image/img10.avif"
              alt="Dancing girl"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Yellow box with text */}
          <div className="col-span-4 row-span-3 col-start-9 row-start-8 bg-yellow-400 rounded-sm p-3 flex flex-col justify-center">
            <div className="flex justify-center mb-1">
              <img src="image/image 31.png" alt="" />
            </div>
            <p className="text-base font-bold text-blue-900">
              Your mindset is the compiler—garbage in, garbage out.
            </p>
          </div>

          <div className="col-span-4 row-span-2 col-start-9 row-start-11">
            <img
              src="/image/img11.webp"
              alt="Kids portrait"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Right side - Personal Introduction */}

      <div className="flex-grow flex flex-col justify-center items-center px-8 text-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-20 tracking-widest">
          HERE IT IS MY PORTFOLIO
        </h1>
        <h2 className="text-8xl font-bold mb-8 leading-none whitespace-nowrap">
          {getGreeting()}
        </h2>
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Hello, I'm Anurag Tak
        </h2>
        <p className="text-3xl mb-4">Full Stack Developer</p>
        <p className="text-gray-600 mb-6 px-4 text-xl">
          Passionate about creating beautiful, responsive web applications using
          modern technologies like React and Tailwind CSS.
        </p>
        <div className="border-t border-gray-200 pt-6 px-4">
          <p className="text-gray-500 text-xl">
            I specialize in transforming designs into functional, elegant web
            experiences with clean code and attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

{
  /* Contact Button */
}
{
  /* <div className="w-full">
<button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md transition duration-300">
  GET IN TOUCH
</button>
</div> */
}

{
  /* Footer text */
}
{
  /* <div className="mt-6 text-center text-sm text-gray-500">
<p>View my portfolio for more examples of my work</p>
</div> */
}
