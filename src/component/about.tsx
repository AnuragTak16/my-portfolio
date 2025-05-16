import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AboutMyself = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 md:p-12">
        <div className="flex  pt-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-gray-200 text-black px-6 py-2 rounded-full shadow-md hover:bg-blue-300 transition duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-8">
          <h1 className="text-4xl font-bold text-blue-700 text-center">
            About Myself
          </h1>

          <section className="space-y-4 bg-blue-50 shadow-sm p-4 rounded-lg">
            <p className="text-gray-700 text-xl">
              Hello, I’m Anurag. I believe full-stack development lets me
              combine creativity with logic to build meaningful digital
              solutions. My journey began with curiosity about how websites work
              and gradually progressed from static pages to dynamic
              applications. I enjoy collaborating with teams, learning
              continuously, and focusing on clean and efficient code. I approach
              challenges with a problem-solving mindset, always aiming to create
              user-friendly and accessible experiences. Currently, I’m working
              on real-world projects using technologies like React, Node.js,
              TypeScript, and cloud services, while exploring performance
              optimization and scalable web architectures. With strong
              communication and adaptability, I thrive in dynamic environments.
              Looking ahead, I aim to deepen my expertise, lead impactful
              projects, and contribute to innovative open-source communities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="flex text-2xl font-semibold text-blue-600 justify-center items-center">
              Beyond Tech
            </h2>
            <p className="text-gray-700 bg-blue-50 p-4 text-xl rounded-lg shadow-sm">
              Outside work, I play state-level badminton, enjoy old songs, and
              dream of building a better society through education and
              innovation. I am passionate about creating opportunities for
              underprivileged communities by providing access to quality
              education, healthcare, and basic necessities. My vision is to
              empower people to lead better lives and contribute positively to
              society, driving change through empathy and sustainable solutions.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
