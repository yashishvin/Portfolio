import "./styles/Career.css";

const careerData = [
  {
    title: "Software Engineer",
    company: "Amazon Web Services (AWS) - Security Assurance",
    date: "2026 - Present",
    description: "Building and maintaining specialized tools designed to actively support, streamline, and automate comprehensive security audits across AWS infrastructure.",
    logo: `${import.meta.env.BASE_URL}images/aws-logo.jpeg`
  },
  {
    title: "Software Engineer Intern",
    company: "Amazon Web Services (AWS) - Fintech",
    date: "May 2025 - Aug 2025",
    description: "Helped build sophisticated AI agents powered by generative AI that autonomously streamlined workflows, significantly reducing revenue planning time for financial analysts.",
    logo: `${import.meta.env.BASE_URL}images/aws-logo.jpeg`
  },
  {
    title: "Software Engineer II",
    company: "Dematic Corporation",
    date: "2021 - 2024",
    description: "Developed robust warehouse management software algorithms. Played a pivotal role in optimizing supply chain efficiency, significantly accelerating logistics throughput and task management for end customers.",
    logo: `${import.meta.env.BASE_URL}images/dematic-logo.jpeg`
  }
];

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-timeline-modern">
          {careerData.map((job, index) => (
            <div className="career-card-wrapper" key={index}>
              <div className="career-date">
                <h3>{job.date}</h3>
              </div>
              <div className="career-timeline-node">
                <div className="career-dot-modern"></div>
                {index !== careerData.length - 1 && <div className="career-line"></div>}
              </div>
              <div className="career-card">
                <div className="career-card-header">
                  <div className="career-logo-container">
                    <img src={job.logo} alt={job.company} className="career-logo" />
                  </div>
                  <div className="career-role-info">
                    <h4>{job.title}</h4>
                    <h5>{job.company}</h5>
                  </div>
                </div>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
