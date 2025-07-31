export const AboutMyself = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-6 sm:px-6 md:px-12 '>
      {/* Main Content */}
      <div className='max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8 mt-10'>
        <h1 className='text-3xl sm:text-4xl font-bold text-blue-700 text-center'>
          About Myself
        </h1>

        <section className='space-y-3 bg-blue-50 shadow-sm p-4 rounded-lg'>
          <p className='text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed'>
            Hello, I’m Anurag. I believe full-stack development lets me combine
            creativity with logic to build meaningful digital solutions. My
            journey began with curiosity about how websites work and gradually
            progressed from static pages to dynamic applications. I enjoy
            collaborating with teams, learning continuously, and focusing on
            clean and efficient code. I approach challenges with a
            problem-solving mindset, always aiming to create user-friendly and
            accessible experiences.
            <br />
            <br />
            Currently, I’m working on real-world projects using technologies
            like React, Node.js, TypeScript, and cloud services, while exploring
            performance optimization and scalable web architectures. With strong
            communication and adaptability, I thrive in dynamic environments.
            Looking ahead, I aim to deepen my expertise, lead impactful
            projects, and contribute to innovative open-source communities.
          </p>
        </section>

        <section className='space-y-3'>
          <h2 className='text-xl sm:text-2xl font-semibold text-blue-600 text-center'>
            Beyond Tech
          </h2>
          <p className='text-gray-700 bg-blue-50 p-4 text-base sm:text-lg md:text-xl rounded-lg shadow-sm leading-relaxed'>
            Outside work, I play state-level badminton, enjoy old songs, and
            dream of building a better society through education and innovation.
            I am passionate about creating opportunities for underprivileged
            communities by providing access to quality education, healthcare,
            and basic necessities. My vision is to empower people to lead better
            lives and contribute positively to society, driving change through
            empathy and sustainable solutions.
          </p>
        </section>
      </div>
    </div>
  );
};
