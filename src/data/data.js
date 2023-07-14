const jobs = [
  {
    id: 1,
    companySite: "https://example.com/scoot",
    company: "Scoot",
    logo: "./assets/logos/scoot.svg",
    position: "Senior Software Engineer",
    postedAt: "5h ago",
    contract: "Full Time",
    location: "United Kingdom",
    desc: "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
    requirements: {
      reqTitle:
        "The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.",

      reqItem: [
        "5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.",
        "Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.",
        "Extremely data-driven.",
        "Ability to debug complex systems."
      ],
    },

    responsibility: {
      resTitle:
        "We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.",

      resItem: [
        "This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.",
        "Translate the product roadmap into engineering requirements and own the engineering roadmap",
        "Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.",
        "Collaborate with product, design, and external engineering teammates as needed."
      ],
    },
  },
  {
    id: 2,
    companySite: "#",
    company: "Blogr",
    logo: "./assets/logos/blogr.svg",
    position: "Haskell and PureScript Dev",
    postedAt: "20h ago",
    contract: "Part Time",
    location: "United Kingdom",
    desc: "Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.",
    requirements: {
      reqTitle:
        "We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).",

      reqItem: [
        "You have a knack for UI design",
        "Have Haskell or Purescript knowledge/hacking under your belt.",
        "An experienced engineer familiar with automated testing and deployment.",
        "Experienced with functional programming and domain-driven design or simply interested and capable of learning on the job."
      ],
    },

    responsibility: {
      resTitle:
        "The role is more frontend-focused where you will be tasked to build browser-based UIs for Haskell applications.",

      resItem: [
        "Build up our tech stack around Haskell and introduce best practices",
        "Contribute to the design of our conversational engine and the architecture supporting it",
        "Design new UIs, working closely with users, stakeholders and the backend team.",
        "Maximize robustness, performance, and scalability of solutions",
      ],
    },
  },
  {
    id: 3,
    companySite: "#",
    company: "Vector",
    logo: "./assets/logos/vector.svg",
    position: "Midlevel Back End Engineer",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Russia",
    desc: "We are looking for a Mid-level Back End Engineer to join our growing software engineering organization. The right person will help move our platform to the next level. You’ll be working as part of a skilled, collaborative team to jointly design and implement high visibility applications.",
    requirements: {
      reqTitle:
        "As our ideal candidate, you have previous experience in Ruby on Rails and are eager to continue to develop professionally. You work well in an agile environment, and collaborate well with other Software Engineers, Test Automation Engineers, Product Managers, and Designers. You thrive in a fast-paced environment, and are able to adapt when needed.",

      reqItem: [
        "Active participation on a software development team designing, coding, testing, and releasing functionality to our customers",
        "Close collaboration with other engineers and product managers to become a valued member of an autonomous, cross-functional team",
        "Operational responsibility for the services that are owned by your team, potentially including taking part in an on-call rotation",
      ],
    },

    responsibility: {
      resTitle:
        "This is an IDEAL job if you already have a few years of software engineering experience under your belt, and you want to be part of a small, intensely skilled team, who feel total ownership of their work, and can’t imagine a day without learning & coding. You will play a crucial role in the Vector platform and everything you do will matter.",

      resItem: [
        "Design, code, deploy, and test applications according to the user stories/requirements and industry best practices.",
        "Follow industry standard software lifecycle process when developing software",
        "Conduct code-review with other developers",
        "Assist in development and peer review of plans, technical solutions, and related documentation."
      ],
    },
  },
  {
    id: 4,
    companySite: "#",
    company: "Office Lite",
    logo: "./assets/logos/officelite.svg",
    position: "Senior Application Engineer",
    postedAt: "2d ago",
    contract: "Fulltime",
    location: "Japan",
    desc: "Office Lite is seeking a talented and enthusiastic Senior Application Engineer whose primary responsibility is software architecture and development for Office Lite systems. Additional responsibilities include participation in project time/task estimation, code and architecture reviews, providing support for junior developers, documentation of system architecture and a supporting role for all phases of the development life-cycle (project definition, process mapping, architecture, coding, acceptance testing, installation, turnover to support, etc.).",
    requirements: {
      reqTitle:
        "As a hands-on subject matter expert, you will use expert-level engineering knowledge to provide technical support and help translate customer requirements into exciting new product features. You will be working within multi-disciplinary teams to create pervasive simulation solutions, advance your industry knowledge, and grow the business impact.",

      reqItem: [
        "Expert Node.js proficiency in a production environment", 
        "Proficiency in developing REST APIs", 
        "Expert proficiency with relational databases (MySQL) and optimizing SQL queries", 
        "Extensive experience with microservices-based architecture in production", 
        "Experience with CircleCI, Jenkins or similar CI/CD applications",
      ],
    },

    responsibility: {
      resTitle:
        "You'll work alongside a skilled team of Senior Engineers across five countries participating in system design, architecture, maintenance, and refactoring decisions. You'll be working on new features and integrations and be active in code reviews and coordinating engineering efforts across teams and products.",

      resItem: [
        "Administering and configuring software", 
        "Identify opportunity and help to implement a monitoring solution for proactive and predictable operations.", 
        "Triaging problems with applications - identifying known errors and problem trends and finding permanent solutions through root cause analysis.",
        "Providing level 2 and 3 application support."
      ],
    },
  },
  {
    id: 5,
    companySite: "#",
    company: "Pod",
    logo: "./assets/logos/pod.svg",
    position: "Remote DevOps Engineer",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "Japan",
    desc: "Join our dynamic team in developing Pod’s core products and supporting infrastructure. Our software is currently written in Java, VB.Net, React Native, React JS and others. You will help lead new initiatives to build and improve the testing, staging and deployment solutions. You will interact with all development teams, development leadership and our hosting/IT staff to define requirements and goals for the Dev Ops Platform.",
    requirements: {
      reqTitle:
        "We are looking for talented and motivated engineers who can hit the ground running and take our products to the next level. The engineers who are building our platform across the stack are always willing to go the extra mile to deliver the highest quality software and client experiences. Ideally, you would have:",

      reqItem: [
        "Bachelor's degree preferred, strong preference for Computer Science field of study", 
        "Minimum of 5 years of relevant work experience", 
        "Hands-on experience with configuring and maintaining resources on AWS",
        "Experience and solid understanding to deploy and maintain container orchestration platforms such as ECS or Kubernetes",
        "Knowledge of networking fundamentals",
        "Expertise with cloud security, understand the principle of least privilege",
        "Strong written and verbal communication skills"
      ],
    },

    responsibility: {
      resTitle:
        "You will work closely with development teams to implement automation solutions using technologies like Amazon Web Services (AWS), Ansible, Jenkins, and Kubernetes to automatically build, test, integrate, and deploy complex, modern systems. You will leverage the full power of the cloud to configure highly resilient and scalable applications that support zero downtime. This position is open to a mid-level to senior professional depending on experience and background.",

      resItem: [
        "Configure and maintain resources on AWS", 
        "Maintain infrastructure as code using Terraform, CloudFormation, and/or Ansible", 
        "Responsible for production deployments using Jenkins, CodeDeploy, GitHub Actions", 
        "Manage security groups and access controls", 
        "Use ticket management system such as Jira and Confluence to manage work priorities", 
        "Ability to clearly articulate and communicate complex technical ideas to non-DevOps colleagues"
      ],
    },
  },
  {
    id: 6,
    companySite: "#",
    company: "Creative",
    logo: "./assets/logos/creative.svg",
    position: "Desktop Support Manager",
    postedAt: "4d ago",
    contract: "Part Time",
    location: "Germany",
    desc: "Creative is seeking a Desktop Support Manager responsible for managing and leading a high-performance team in a dynamic environment. The ideal candidate should have management experience, a strong technical skillset, exceptional client service skills and enjoy mentoring a team.",
    requirements: {
      reqTitle:
        "You are likely someone with a solid background in end-user support and troubleshooting, as this position involves dealing with a large, and often changing, number of day-to-day issues which arise in supporting the information technology requirements of our applications.",

      reqItem: [
        "Bachelor’s degree in IT or related field",
        "5+ years demonstrating strong technical skills supporting end users",
        "3+ years in a leadership capacity (Team Lead, Supervisor, or Manager)",
        "Experience using Professional Services Automation (PSA) tools or ticketing platforms such as ConnectWise, Autotask, ServiceNow, etc.",
        "Possess and demonstrate excellent interpersonal/communication skills"
      ],
    },

    responsibility: {
      resTitle:
        "This is an 80% management and 20% hands-on supervisory role where you will be responsible for the support of automation technologies and managing a team of support engineers in a 24x7 high-volume environment.",

      resItem: [
        "Lead, coach and manage service desk teams on a daily basis to improve customer service and efficiency",
        "Implement best practices and standardize service desk processes to provide exceptional “white glove” service and deliverable",
        "Oversee the work performed by the team to help prioritize open tickets and tasks",
        "Provide guidance and direction on technical issues",
        "Develop and maintain KPIs for measuring team performance and improving customer experience",
        "Provide status reports to management and collaborate on new initiatives and technical planning"
      ],
    },
  },
  {
    id: 7,
    companySite: "#",
    company: "Pomodoro",
    logo: "./assets/logos/pomodoro.svg",
    position: "iOS Engineer",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "United Kingdom",
    desc: "We are looking for thoughtful, well-rounded iOS engineer to join our team. We’re looking for someone to help build out the foundation of the app and infrastructure. If you are interested in taking part in building an application that millions of people use every day to increase their productivity, this is the perfect opportunity. You will play an important part in our mobile engineering practice, implementing new features, improving performance, and building beautiful user interfaces.",
    requirements: {
      reqTitle:
        "You are an experienced mobile engineer looking to make Pomodoro one of the best mobile experiences out there. You are someone who excels at customer-centric product development and has a passion for working on application architecture and design, and making smooth, delightful experiences. You care deeply about quality, are energized by partnership and collaboration, and you strive to enable others around you to excel.",

      reqItem: [
        "Strong programming skills in Objective-C and/or Swift",
        "Previous experience developing mobile applications on iOS",
        "Experience working closely across a variety of teams, including product management, design, and engineering",
        "Knowledge of core CS concepts such as common data structures and algorithms, profiling, and optimization"
      ],
    },

    responsibility: {
      resTitle:
        "You will be responsible for building infrastructure and abstractions to help us double our engineering velocity.  You will work at all layers of the stack and closely with partners across engineering, data science, research, product, and design. You will help our codebase stay ahead of the curve of the constantly evolving development ecosystem.",

      resItem: [
        "Design and develop UI components that make feature development faster, baking in consistency and accessibility to the designs",
        "Build frameworks and infrastructure to make product development faster, safer, and more consistent",
        "Improve the performance and stability of the mobile app",
        "Strive to keep the mobile codebase secure"
      ],
    },
  },
  {
    id: 8,
    companySite: "#",
    company: "Maker",
    logo: "./assets/logos/maker.svg",
    position: "Senior EJB Developer",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "United Kingdom",
    desc: "We are seeking an experienced EJB Developer who will join our fast-growing engineering team, working on mission-critical applications. Searching for a Senior Java Developer who thrives on working with enterprises in multiple industries with unique business challenges requiring sophisticated solution design.",
    requirements: {
      reqTitle:
        "The candidate must have work experience in all aspects of designing and constructing J2EE/EJB systems and developing system requirements and design specifications, and J2EE/EJB Coding for new and existing applications.",

      reqItem: [
        "Computer Science degree or equivalent",
        "Experience with EJB, J2EE,Tomcat, JBoss andrelational databases such as MySQL, MSSQL, Oracle",
        "At least three years of post-graduate experience",
        "Deep understanding of OO programming principals and commitment to clean, efficient, well documented code."
      ],
    },

    responsibility: {
      resTitle:
        "Job responsibilities will include developing scalable Java applications while providing expertise in the full software development lifecycle, from concept and design to testing.",

      resItem: [
        "Design and develop high-volume, low-latency applications that enhance Maker's core platform",
        "Create well designed, testable, efficient code",
        "Participate in all phases of the development lifecycle",
        "Investigate alternatives and technologies and present them for architectural review, in order to support continuous improvement"
      ],
    },
  },
  {
    id: 9,
    companySite: "#",
    company: "Coffeeroasters",
    logo: "./assets/logos/coffeeroasters.svg",
    position: "Senior Frontend Developer",
    postedAt: "1w ago",
    contract: "Part Time",
    location: "Singapore",
    desc: "We’re looking for an experienced Frontend Developer with an eye for Product Design along with a honed set of coding skills and who shares our values around technology. Most importantly, we’d like someone who is collaborative and can work closely with the rest of our team shaping product.",
    requirements: {
      reqTitle:
        "You will be responsible for executing high quality solutions for customers and contributing to the day-to-day technical excellence of a delivery team. You should have a deep understanding of Modern JavaScript, HTML and CSS, the software development life cycle, and possess the ability to implement and execute standard software architecture patterns.",

      reqItem: [
        "4+ years of experience of Frontend Development", 
        "Expertise with React required", 
        "Expertise with Next.js, Apollo, Typescript, and GraphQL preferred"
      ],
    },

    responsibility: {
      resTitle:
        "Beyond working closely with our team to build an exciting app, you’ll be leading Frontend development of our React/Next.js product. You’ll be coming up with UI/UX for the app and making architectural decisions for the frontend.",

      resItem: [
        "Use your thorough understanding of core client-side technologies to architect complex user interactions for desktop and mobile browsers using React", 
        "Create universal JS modules to be used on both the client and the server", 
        "Lead, direct and mentor more junior team members (including code review)", 
        "Cover your code with unit and integration tests written with Jest and Mocha", 
        "Take part in decision-making around major architectural choices of the front-end team"
      ],
    },
  },
  {
    id: 10,
    companySite: "#",
    company: "Mastercraft",
    logo: "./assets/logos/mastercraft.svg",
    position: "App & Website Designer",
    postedAt: "2w ago",
    contract: "Freelance",
    location: "United States",
    desc: "Mastercraft is looking for a UX/UI Designer to turn our software into easy-to-use products for our clients. Responsibilities include gathering user requirements, designing graphic elements and building software component",
    requirements: {
      reqTitle:
        "To be successful in this role, you should have experience with design software and wireframe tools preferably Figma. You should also have a portfolio of professional design projects that includes work with web/mobile applications.",

      reqItem: [
        "At least 3 years of experience in a related field.", 
        "Portfolio of design projects.",
        "Degree in Design, UX or relevant field.",
        "Experience with design process and systematic approach to organization, workflow"
      ],
    },

    responsibility: {
      resTitle:
        "You’ll create both functional and appealing features that address our clients’ needs and help us grow our customer base. We expect you to have experience with market/user research and stay current with most recent trends, tools, workflows.",

      resItem: [
        "Gather and evaluate user requirements in collaboration with UX/UI manager or stakeholders.", 
        "Illustrate design ideas using storyboards, process flows and sitemaps.", 
        "Develop UI mockups and prototypes that clearly illustrate how sites function and look like.", 
        "Create original graphic designs (eg. images, sketches and tables).", 
        "Identify and troubleshoot UX problems",
        "Conduct layout adjustments based on user feedback."
      ],
    },
  },
];

export default jobs;
