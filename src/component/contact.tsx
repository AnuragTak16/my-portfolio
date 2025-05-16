import { Mail, Phone, Github, Linkedin, Link, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button */}
      <div className="flex pt-6 px-8 md:px-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-gray-200 text-black px-6 py-2 rounded-full shadow-md hover:bg-blue-300 transition duration-300"
          aria-label="Go back to home"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      {/* Contact Section */}
      <section className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-10 mt-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Get in Touch
        </h2>

        <div className="space-y-8">
          {/* Email Card */}
          <div className="flex items-center space-x-5 bg-blue-50 p-5 rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer">
            <Mail className="text-blue-600" size={32} />
            <a
              href="mailto:anuragtak16@gmail.com"
              className="text-lg font-medium text-blue-800 hover:underline"
            >
              anuragtak16@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="flex items-center space-x-5 bg-blue-50 p-5 rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer">
            <Phone className="text-blue-600" size={32} />
            <span className="text-lg font-medium text-blue-800">
              +91-9340392268
            </span>
          </div>

          <div className="flex justify-center items-center">
            <a href="image/Resume.pdf" download>
              <button className="bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                click to Download Resume
              </button>
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">
              Find me on
            </h3>
            <div className="flex justify-center space-x-10 text-gray-700">
              <a
                href="https://www.linkedin.com/in/anurag-tak-974929234/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition-colors shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/anuragtak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors shadow-md"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://leetcode.com/anuragtak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-yellow-100 hover:bg-yellow-500 hover:text-white transition-colors shadow-md"
                aria-label="LeetCode"
              >
                <Link size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
