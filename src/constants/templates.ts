export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <h1>Business letter</h1>
      <p>This is a business letter template.</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p>[Your Name]<br>
      [Your Address]<br>
      [City, State ZIP]</p>

      <p>[Date]</p>

      <p>[Recipient's Name]<br>
      [Company Name]<br>
      [Company Address]</p>

      <p>Dear [Recipient's Name],</p>

      <p>I am writing to express my interest in [position] at [company name].</p>

      <p>Sincerely,<br>
      [Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p>Subject: [Email Subject]</p>

      <p>Dear [Recipient],</p>

      <p>I hope this email finds you well.</p>

      <p>[Email Body]</p>

      <p>Best regards,<br>
      [Your Name]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Project Overview</h2>
      <p>Brief description of the proposed project.</p>

      <h2>Scope of Work</h2>
      <p>Detailed breakdown of project deliverables and requirements.</p>

      <h2>Timeline</h2>
      <p>Project milestones and delivery schedules</p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Contact Information]</p>

      <h2>Professional Summary</h2>
      <p>Brief overview of your professional background and key strengths.</p>

      <h2>Work Experience</h2>
      <p>[Company Name] - [Position]<br>
      [Date Range]</p>

      <h2>Education</h2>
      <p>[Degree] - [Institution]<br>
      [Graduation Year]</p>

      <h2>Skills</h2>
      <p>List of relevant skills</p>
    `,
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>Brief description of the proposed sofware development project.</p>

      <h2>Scope of Work</h2>
      <p>Detailed breakdown of project deliverables and requirements.</p>

      <h2>Timeline</h2>
      <p>Project milestones and delivery schedules</p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `,
  },
];
