import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EducationSection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button Container */}
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

      {/* Main Education Section */}
      <section className="space-y-6 bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-5xl mx-auto mt-6">
        <h2 className="text-5xl font-semibold text-blue-600 justify-center items-center flex">
          Education section
        </h2>
        <div className="space-y-6">
          {/* Bachelor of Technology */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm flex flex-col gap-2">
            <h3 className="text-3xl font-semibold text-blue-700">
              Bachelor of Technology (B.Tech)
            </h3>
            <p className="text-gray-700">
              <span className="font-bold">College:</span> Acropolis Institute of
              Technology and Research, Indore
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Course:</span> Computer Science and
              Engineering
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Specialization:</span> Artificial
              Intelligence & Machine Learning (AI & ML)
            </p>
            <p className="text-gray-700">
              <span className="font-bold">University:</span> Rajiv Gandhi
              Proudyogiki Vishwavidyalaya (RGPV)
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Duration:</span> 2020 – 2024
            </p>
            <p className="text-gray-700">
              <span className="font-bold">CGPA:</span> 8.3 / 10
            </p>
          </div>

          {/* Class 12 Education */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700">
              Higher Secondary Education (Class 12th)
            </h3>
            <p className="text-gray-700">
              <span className="font-bold">Board:</span> Central Board of
              Secondary Education (CBSE)
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Session:</span> 2018 – 2019
            </p>
          </div>

          {/* Class 10 Education */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700">
              Secondary Education (Class 10th)
            </h3>
            <p className="text-gray-700">
              <span className="font-bold">Board:</span> Central Board of
              Secondary Education (CBSE)
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Session:</span> 2017 – 2018
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
