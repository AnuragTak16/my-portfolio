import { useState, type SetStateAction } from "react";
import {
  Code,
  Layers,
  Users,
  AlertTriangle,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Project = () => {
  const [activeProject, setActiveProject] = useState(1);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "College Administrative System (CAS)",
      overview:
        "The College Administrative System is a web-based application developed to streamline and automate core academic and administrative operations in educational institutions. By digitizing traditional processes, this system minimizes paperwork, reduces manual errors, and enables eco-friendly and efficient management. It provides role-based dashboards and modules tailored to Admins, Faculty, and Students.",
      stack: ["React", "HTML", "php", "MongoDB", "Tailwind CSS"],
      contribution:
        "I designed a responsive and interactive UI tailored for different user roles and developed backend logic to handle CRUD operations within student and faculty modules. Secure authentication and role-based access control were implemented to ensure data protection and controlled access. A MySQL database was integrated for robust data handling, reinforced with strong validations, along with performance optimization to ensure smooth and efficient application functionality.",
      challenges: [
        "To address the challenge of synchronizing data between different user roles in real-time, I implemented AJAX for asynchronous communication and optimized database queries to ensure faster data load and refresh. Simultaneously, to support future scalability and ease of feature addition, I designed a modular MVC architecture with reusable components, enabling efficient code management and extension.",
      ],

      screenshots: [
        // "Screenshot of homepage showing featured products",
        // "Product detail page with add to cart functionality",
        // "Shopping cart and checkout interface",
      ],
    },
    {
      id: 2,
      title: "Face Pay Authentication System",
      overview:
        "Face Pay is a secure, AI-powered web application designed to facilitate large-scale financial transactions by replacing traditional OTP and call-based verifications with real-time facial recognition. This approach enhances transaction security, eliminates common authentication vulnerabilities, and provides a seamless user experience. The system leverages advanced machine learning algorithms to ensure accurate and efficient facial recognition, making it a reliable solution for modern financial transactions.",
      stack: [
        "React",
        "Firebase",
        "Tailwind CSS",
        "Chart.js ",
        "OpenCV",
        "FaceNet APIs",
        "Camera Integration",
      ],
      contribution:
        "I designed and implemented secure login and transaction workflows, integrated facial recognition libraries for real-time identity verification, and developed intuitive UI components for both transaction and verification modules. Additionally, I connected Firebase to efficiently manage user facial data and activity logs, and conducted unit testing to ensure high recognition accuracy while minimizing false positives.",
      challenges:
        "To address the challenge of achieving accurate facial recognition under varying light conditions, I implemented image preprocessing techniques along with facial landmark detection to enhance recognition accuracy. Additionally, to maintain fast processing speed without compromising security, I optimized the facial recognition pipeline using efficient facial embeddings for quicker and more reliable verification",
      screenshots: [
        // "Dashboard with task overview and statistics",
        // "Task detail view with comments section",
        // "Analytics page showing productivity metrics",
      ],
    },
    {
      id: 3,
      title: "E-Commerce Store Management System",
      overview:
        "This is a full-stack web application designed to manage an online store efficiently. It provides features for product management, cart and wishlist handling, and real-time updates using modern front-end and back-end technologies. The system allows admins to add, update, or delete products, and users to browse, wishlist, and add items to the cart for purchase.",
      stack: ["React", "Rtk Query", "Node.js", "MONGODB", "Express.js"],
      contribution:
        "I built interactive and responsive front-end pages using ReactJS and React Router, and designed RESTful APIs with Express.js to handle all CRUD operations. MongoDB was integrated to manage product data and user carts/wishlists, while the front-end was connected to the back-end using Fetch and Axios to enable real-time updates. Additionally, I implemented effective state management and a component-based architecture to ensure scalability and maintainability of the application.",
      challenges:
        "To efficiently manage multiple API states such as loading, error, and success, I utilized RTK Query’s built-in selectors and hooks, which provided a clean and scalable approach to state handling. Additionally, to ensure seamless synchronization between frontend views and backend data, I leveraged RTK Query’s auto-refetch and cache invalidation features, allowing the UI to stay consistently updated with the latest data.",
      // screenshots: [
      //   // "Main dashboard showing accounts overview",
      //   // "Content calendar with scheduled posts",
      //   // "Engagement analytics with visualization charts",
      // ],
    },
    // {
    //   id: 4,
    //   title: "Health & Fitness Tracker",
    //   overview:
    //     "A mobile-first application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    //   stack: ["React Native", "Express.js", "MongoDB", "TensorFlow.js"],
    //   contribution:
    //     "Developed the workout tracking module, implemented data visualization for progress tracking, and built recommendation engine.",
    //   challenges:
    //     "Creating accurate recommendation algorithms and ensuring data privacy for sensitive health information.",
    //   screenshots: [
    //     "Personalized dashboard with health metrics",
    //     "Workout tracking interface with animations",
    //     "Nutrition logging and weekly overview",
    //   ],
    // },
  ];

  const handleProjectClick = (id: SetStateAction<number>) => {
    setActiveProject(id);
  };

  const activeProjectData = projects.find(
    (project) => project.id === activeProject
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6 font-sans">
      <div className="flex  pt-6">
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-blue-200 transition"
            aria-label="Go back to home"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Back</span>
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">My Projects</h1>

        <div className="flex flex-wrap gap-4 mb-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`px-6 py-4 rounded-lg transition-all flex items-center gap-2 ${
                activeProject === project.id
                  ? "bg-blue-100 border-l-4 border-blue-500 shadow-md"
                  : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span className="font-medium text-gray-700">{project.title}</span>
              <ChevronRight
                size={16}
                className={`transition-transform ${
                  activeProject === project.id ? "rotate-90" : ""
                }`}
              />
            </button>
          ))}
        </div>

        {activeProjectData && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all">
            <div className="bg-blue-50 p-6 border-b border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800">
                {activeProjectData.title}
              </h2>
            </div>

            <div className="p-6">
              <div className="space-y-8">
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                    <Layers size={20} className="text-blue-500" />
                    Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activeProjectData.overview}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                    <Code size={20} className="text-blue-500" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectData.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                    <Users size={20} className="text-blue-500" />
                    My Contribution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activeProjectData.contribution}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                    <AlertTriangle size={20} className="text-blue-500" />
                    Challenges
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activeProjectData.challenges}
                  </p>
                </div>

                <div className="mb-4">
                  {/* <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                    <Image size={20} className="text-blue-500" />
                    Screenshots
                  </h3> */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeProjectData.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center aspect-video"
                      >
                        <div className="bg-gray-200 w-full h-32 rounded flex items-center justify-center">
                          <Image size={32} className="text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center">
                          {screenshot}
                        </p>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// function TabButton({
//   icon,
//   label,
//   active,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   active: boolean;
// }) {
//   return (
//     <button
//       className={`px-4 py-2 flex items-center gap-2 text-sm font-medium border-b-2 transition-colors ${
//         active
//           ? "border-blue-500 text-blue-600"
//           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//       }`}
//     >
//       {icon}
//       {label}
//     </button>
//   );
// }
