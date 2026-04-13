import "./styles/TechStack.css";
import { 
  SiPython, SiCplusplus, SiJavascript, SiKotlin,
  SiFastapi, SiFlask, SiDjango, SiSpringboot, SiNodedotjs, SiExpress,
  SiPostgresql, SiMongodb,
  SiDocker, SiKubernetes, SiAnsible, SiJenkins,
  SiPytorch, SiKeras
} from "react-icons/si";
import { FaJava, FaDatabase, FaAws, FaBrain, FaRobot, FaCubes } from "react-icons/fa";

const techSkills = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Kotlin", icon: <SiKotlin /> }
    ]
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "DynamoDB", icon: <FaAws /> },
      { name: "SQL/NoSQL (Indexing, Caching)", icon: <FaDatabase /> }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (EKS, EC2, S3, IAM, Secrets Manager)", icon: <FaAws /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Jenkins", icon: <SiJenkins /> }
    ]
  },
  {
    category: "ML / Agentic AI",
    skills: [
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "LangChain", icon: <FaCubes /> },
      { name: "LangGraph", icon: <FaRobot /> },
      { name: "Strands SDK", icon: <FaBrain /> },
      { name: "Google ADK", icon: <FaRobot /> },
      { name: "Mem0", icon: <FaDatabase /> }
    ]
  }
];

const TechStack = () => {
  return (
    <div className="techstack-section" id="techstack">
      <div className="techstack-container section-container">
        <h2>
          My <span>Tech Stack</span>
        </h2>
        <div className="techstack-grid">
          {techSkills.map((section, index) => (
            <div className="tech-card" key={index}>
              <h3>{section.category}</h3>
              <div className="tech-tags">
                {section.skills.map((skill, i) => (
                  <span className="tech-tag" key={i}>
                    <span className="tech-icon">{skill.icon}</span>
                    <span className="tech-name">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
