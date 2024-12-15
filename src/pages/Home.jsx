import { Mail, MapPin } from "lucide-react";
import PortfolioCard from "../components/features/PortfolioCard";
import Timeline from "../components/features/Timeline";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Portfolio() {
  const projects = [
    {
      image: "/assets/holidaze.png",
      qr: "/assets/qr-holidaze.svg",
      title: "Holidaze | venues",
      description:
        "A venue booking platform. Customers can browse venues, search, view detailed information with availability calendars, and manage their bookings. Venue managers can create, update, and delete venues, as well as view and manage bookings for their listings.",
      icons: [
        "/assets/Logos/html5-original-dark.svg",
        "/assets/Logos/javascript-original-dark.svg",
        "/assets/Logos/react-original-dark.svg",
        "/assets/Logos/tailwindcss-plain-dark.svg",
      ],
      githubUrl: "https://github.com/Anne-Serine/holidaze_project-exam-2",
      livesiteUrl: "https://holidaze-a-s.netlify.app/",
    },
    {
      image: "/assets/nuuYuu.png",
      qr: "/assets/qr-nuuyuu.svg",
      title: "nuuYuu",
      description:
        "This eCommerce platform allows users to browse, search, and purchase products in a modern online store. Features include product listings, detailed product pages, cart management, and a checkout system with success confirmation.",
      icons: [
        "/assets/Logos/html5-original-dark.svg",
        "/assets/Logos/javascript-original-dark.svg",
        "/assets/Logos/react-original-dark.svg",
        "/assets/Logos/tailwindcss-plain-dark.svg",
      ],
      githubUrl: "https://github.com/Anne-Serine/JavaScript_Frameworks",
      livesiteUrl: "https://nuuyuu.netlify.app/",
    },
    {
      image: "/assets/crowsNest.png",
      qr: "/assets/qr-crowsNest.svg",
      title: "Crow's Nest",
      description:
        "An online auction platform where users can buy and sell items through bidding. Key features include user registration, login, and the ability to list, update, and delete items. Users can browse all listings, search by title or description, and view bid activity.",
      icons: [
        "/assets/Logos/html5-original-dark.svg",
        "/assets/Logos/javascript-original-dark.svg",
        "/assets/Logos/tailwindcss-plain-dark.svg",
      ],
      githubUrl: "https://github.com/Anne-Serine/Semester-Project-2_crowsNest",
      livesiteUrl: "https://euphonious-mochi-17b774.netlify.app/",
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <section className="container flex items-center justify-center overflow-hidden">
        <div>
          <h1 className="text-sm sm:text-2xl lg:text-4xl ml-10 md:ml-36">
            Code,
            <br /> Create,
            <br /> Innovate, <br />
            <span className="text-port-yellow">Welcome</span> to My
            <br /> Portfolio.
          </h1>
        </div>
        <img
          src="/assets/ASblackWhite1.svg"
          alt="portrait of the developer"
          className="max-w-[36rem] p-0 m-0 w-full -mr-4 sm:-mr-10"
        />
      </section>

      <section className="bg-port-gray py-10">
        <div id="about" className="container mx-auto px-4">
          <h2 className="mb-8 text-center sm:text-left text-port-yellow">About Me</h2>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Text Content */}
            <div className="max-w-xl w-full">
              <p className="text-lg leading-relaxed">
                After years in retail as an employee, store manager, and
                photographer, I wanted “something more.” Two years ago, I began
                studying Frontend Development at Noroff School of Technology and
                Digital Media, a full-time program I will complete in December
                2024.
              </p>
              <p className="text-lg mt-4 leading-relaxed">
                The program started with design fundamentals, providing a solid
                foundation in visual principles and user experience. I then
                advanced to HTML, CSS, and JavaScript, learning to build
                interactive and functional websites. Along the way, I have
                worked with APIs, explored CMS tools, and gained experience with
                frameworks like Bootstrap and Tailwind. Most recently, I have
                been learning React, which I truly enjoy.
              </p>
              <p className="text-lg mt-4 leading-relaxed">
                Through solo and team projects, I have developed interactive
                websites and apps that balance design and functionality. This
                journey has been exactly what I was looking for, and I am
                excited to start my career as a full-time web developer in 2025.
              </p>
            </div>

            <div className="flex flex-wrap w-full max-w-md lg:max-w-sm">
              <div className="pb-20 flex flex-col gap-3">
                <div className="flex gap-5">
                  <a href="https://www.linkedin.com/in/anne-serine-johannessen-587b4024a/"><img src="/assets/Logos/linkedin-plain-yellow.svg" className="size-9" alt="linkedin logo" /></a>
                  <a href="https://github.com/Anne-Serine"><img src="/assets/Logos/github-original-yellow.svg" className="size-9" alt="github logo" /></a>
                </div>
                <span className="flex gap-5 items-center font-bold"><MapPin size={20} /> Haugesund, Norway </span>
                <span className="flex gap-5 items-center font-bold"><Mail size={20} /> anneserinejoha@gmail.com </span>
              </div>
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-port-dark pt-10 pb-14">
        <div id="skills" className="container mx-auto">
          <h2 className="text-center mt-0 mb-10 text-port-yellow">Skills</h2>
          <div className="flex flex-wrap justify-center gap-5">
            <div className="flex flex-col items-center w-20">
              <img
                src="/assets/Logos/html5-original.svg"
                alt="html logo"
                className="pb-2 size-14"
              />
              HTML
            </div>
            <div className="flex flex-col items-center w-20">
              <img
                src="/assets/Logos/css3-original.svg"
                alt="css logo"
                className="pb-2 size-14"
              />
              CSS
            </div>
            <div className="flex flex-col items-center w-20">
              <img
                src="/assets/Logos/javascript-original.svg"
                alt="javascript logo"
                className="pb-2 size-14"
              />
              JavaScript
            </div>
            <div className="flex flex-col items-center w-20">
              <img
                src="/assets/Logos/vscode-original.svg"
                alt="vscode logo"
                className="pb-2 size-14"
              />
              VScode
            </div>
            <div className="flex flex-col items-center w-20">
              <img
                src="/assets/Logos/github-original.svg"
                alt="github logo"
                className="p-1 size-14 bg-port-light-gray rounded-full items-center"
              />
              GitHub
            </div>
            <div className="flex flex-col items-center w-20">
              <img
                src="/assets/Logos/figma-original.svg"
                alt="figma logo"
                className="pb-2 size-14"
              />
              Figma
            </div>
            <div className="flex flex-col items-center w-20">
              <img
                src="/assets/Logos/react-original.svg"
                alt="react logo"
                className="pb-2 size-14"
              />
              React
            </div>
            <div className="flex flex-col items-center w-20">
              <img
                src="/assets/Logos/bootstrap-plain.svg"
                alt="bootstrap logo"
                className="pb-2 size-14"
              />
              Bootstrap
            </div>
            <div className="flex flex-col items-center w-20">
              <img
                src="/assets/Logos/tailwindcss-plain.svg"
                alt="tailwind logo"
                className="pb-2 size-14"
              />
              Tailwind
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="mx-auto sm:mx-0 text-center sm:text-start text-port-yellow">My Projects</h2>
        <h3 className="mx-auto sm:mx-0 mb-10 text-center sm:text-start">Have a look at what I have created during my Frontend journey</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,_1fr))] gap-5 justify-items-center">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              icons={project.icons}
              qr={project.qr}
              githubUrl={project.githubUrl}
              livesiteUrl={project.livesiteUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
