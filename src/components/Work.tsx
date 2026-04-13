import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "ThaliBook",
              category: "Cloud-native platform",
              tools: "Spring Boot, Vite, AWS ECS, AWS S3",
              image: `${import.meta.env.BASE_URL}images/Thalibook.jpeg`,
              link: "https://github.com/gopinathsjsu/team-project-2024849-aviato",
              description: "A comprehensive restaurant booking platform that enables users to discover new dining experiences, rate their favorite restaurants, and seamlessly reserve tables."
            },
            {
              name: "Spartan Cove",
              category: "Real-time chat platform",
              tools: "MongoDB, Express, React, Node.js, AWS CloudWatch",
              image: `${import.meta.env.BASE_URL}images/SpartanCove.jpeg`,
              link: "https://github.com/yashishvin/RAYR_Spartan_Cove",
              description: "An exclusive real-time chat platform similar to WhatsApp, designed specifically for San Jose State University students to connect. It features an integrated AI chat buddy that provides instant information and assistance regarding campus life and resources."
            },
            {
              name: "Educo",
              category: "AI-powered learning platform",
              tools: "Self-evolving Agent Hackathon Winner",
              image: `${import.meta.env.BASE_URL}images/educo.jpeg`,
              link: "https://devpost.com/software/educo-b4z593",
              description: "An award-winning AI-powered learning platform from the Self Evolving Agent Hackathon. Users simply input their learning goals, and the system dynamically generates highly personalized podcasts, study materials, and interactive quizzes tailored exactly to their needs."
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div className="work-description">
                  <p>{project.description}</p>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
