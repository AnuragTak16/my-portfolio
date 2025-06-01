import { Navbar } from "./navbar";

export const Portfolio = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="flex flex-col h-screen w-full overflow-auto">
      <Navbar />\{" "}
      <div className="flex flex-col md:flex-row flex-grow">
        {" "}
        <div className="w-full md:w-3/4 p-2">
          <div className="block md:hidden w-full h-64 relative mb-4">
            <img
              src="/image/img1.jpeg"
              alt="Mobile Cover"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="hidden md:grid grid-cols-3 grid-rows-4 gap-2 h-full">
            <img
              src="/image/img1.jpeg"
              className="object-cover w-full h-full rounded-lg row-span-2"
              alt=""
            />
            <img
              src="/image/img2.webp"
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
            <img
              src="/image/img3.jpeg"
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
            <img
              src="/image/img4.webp"
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
            <div className="bg-yellow-400 p-4 col-span-2 flex items-center justify-center rounded-lg text-blue-900 font-bold">
              You can't run from errors—debug them or repeat them.
            </div>
            <img
              src="/image/img6.webp"
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
            <img
              src="/image/img8.webp"
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
            <img
              src="/image/img9.webp"
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
            <img
              src="/image/img10.avif"
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
            <div className="bg-yellow-400 p-4 col-span-2 flex items-center justify-center rounded-lg text-blue-900 font-bold">
              Your mindset is the compiler—garbage in, garbage out.
            </div>
            <img
              src="/image/img11.webp"
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-center items-center px-4 md:px-8 text-center mt-4 md:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-500 mb-6 md:mb-20 tracking-widest">
            HERE IT IS MY PORTFOLIO
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold mb-4 md:mb-8 leading-none">
            {getGreeting()}
          </h2>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3">
            Hello, I'm Anurag Tak
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl mb-3">
            Full Stack Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-5 px-2 md:px-4">
            Passionate about creating beautiful, responsive web applications
            using modern technologies like React and Tailwind CSS.
          </p>
          <div className="border-t border-gray-200 pt-4 px-2 md:px-4">
            <p className="text-sm sm:text-base md:text-xl text-gray-500">
              I specialize in transforming designs into functional, elegant web
              experiences with clean code and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
