export const Courses = [
  {
    id: 1,
    name: "Web Development Fundamentals",
    instructor: "Jane Smith",
    description:
      "Learn the basics of web development, including HTML, CSS, and JavaScript.",
    enrollmentStatus: "Open",
    duration: "4 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    url: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*M4bxiCIjcTK-2Xr6.jpeg",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: "HTML syntax, tags, and basic structure.",
      },
      {
        week: 2,
        topic: "Styling with CSS",
        content: "CSS selectors, properties, and basic styling techniques.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 2,
    name: "JavaScript Basics",
    instructor: "John Doe",
    description: "Learn the fundamentals of JavaScript programming language.",
    enrollmentStatus: "Open",
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    prerequisites: ["Basic understanding of HTML and CSS"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to JavaScript",
        content: "Variables, data types, and basic operators.",
      },
      {
        week: 2,
        topic: "Control Flow",
        content: "Conditional statements and loops.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 3,
    name: "React Masterclass",
    instructor: "Emily Brown",
    description:
      "Master React.js and build modern, interactive web applications.",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    schedule: "Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "React Basics",
        content: "Introduction to React components and JSX.",
      },
      {
        week: 2,
        topic: "State Management",
        content: "Managing component state using useState and useEffect hooks.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 4,
    name: "Python for Beginners",
    instructor: "Michael Johnson",
    description: "Learn Python programming language from scratch.",
    enrollmentStatus: "Open",
    duration: "10 weeks",
    schedule: "Saturdays, 9:00 AM - 11:00 AM",
    location: "Online",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Python",
        content: "Python syntax, variables, and basic data types.",
      },
      {
        week: 2,
        topic: "Control Structures",
        content: "Conditional statements and loops in Python.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 5,
    name: "Database Fundamentals",
    instructor: "Alexandra Miller",
    description: "Explore the basics of databases, SQL, and database design.",
    enrollmentStatus: "Closed",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    url: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Databases",
        content:
          "Overview of databases, relational vs. non-relational databases.",
      },
      {
        week: 2,
        topic: "SQL Basics",
        content:
          "Introduction to SQL, querying databases with SELECT statement.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 6,
    name: "Data Science Essentials",
    instructor: "David Wilson",
    description: "Learn essential concepts and techniques of data science.",
    enrollmentStatus: "Open",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    url: "https://cdn.iconscout.com/icon/free/png-256/data-science-46-1170621.png",
    prerequisites: ["Basic knowledge of statistics and programming"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science, data exploration techniques.",
      },
      {
        week: 2,
        topic: "Data Analysis with Python",
        content: "Data manipulation and analysis using Python libraries.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 7,
    name: "Mobile App Development with Flutter",
    instructor: "Mark Thompson",
    description:
      "Build cross-platform mobile apps using the Flutter framework.",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "Online",
    url: "https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png",
    prerequisites: ["Basic knowledge of programming"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Flutter",
        content:
          "Setting up Flutter development environment, building your first app.",
      },
      {
        week: 2,
        topic: "Widgets and Layouts",
        content: "Understanding Flutter widgets and layout techniques.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 8,
    name: "Machine Learning Fundamentals",
    instructor: "Sophia Lee",
    description:
      "Explore the fundamentals of machine learning and predictive analytics.",
    enrollmentStatus: "Open",
    duration: "10 weeks",
    schedule: "Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    url: "https://cdn.iconscout.com/icon/free/png-256/machine-learning-2038790-1720085.png",
    prerequisites: ["Basic knowledge of Python"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content:
          "Overview of machine learning concepts, supervised vs. unsupervised learning.",
      },
      {
        week: 2,
        topic: "Linear Regression",
        content: "Understanding linear regression and its applications.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 9,
    name: "Cybersecurity Essentials",
    instructor: "Robert Johnson",
    description: "Learn essential cybersecurity concepts and best practices.",
    enrollmentStatus: "Open",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 8:00 PM - 10:00 PM",
    location: "Online",
    url: "https://cdn.iconscout.com/icon/free/png-256/cyber-security-2038879-1720093.png",
    prerequisites: ["Basic knowledge of networking"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content: "Overview of cybersecurity threats and vulnerabilities.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Understanding network security principles and protocols.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 10,
    name: "Artificial Intelligence Basics",
    instructor: "Sarah Clark",
    description:
      "Explore the basics of artificial intelligence and its applications.",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    url: "https://t4.ftcdn.net/jpg/03/97/02/07/360_F_397020794_LXE0WLqWxcbhIf2UwXfRtLJwjw8aX5Wj.jpg",
    prerequisites: ["Basic knowledge of programming and mathematics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Artificial Intelligence",
        content: "Overview of AI concepts, history, and applications.",
      },
      {
        week: 2,
        topic: "Machine Learning Fundamentals",
        content: "Introduction to machine learning algorithms and techniques.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 11,
    name: "Blockchain Fundamentals",
    instructor: "Daniel Brown",
    description:
      "Learn the fundamentals of blockchain technology and cryptocurrencies.",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    schedule: "Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    url: "https://cdn.slidesharecdn.com/ss_thumbnails/blockchainbyamanthakur-220325164814-thumbnail.jpg?width=560&fit=bounds",
    prerequisites: ["Basic knowledge of computer science"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Blockchain",
        content: "Overview of blockchain technology, decentralized networks.",
      },
      {
        week: 2,
        topic: "Bitcoin and Cryptocurrencies",
        content: "Understanding Bitcoin, cryptocurrencies, and wallets.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 12,
    name: "Cloud Computing Basics",
    instructor: "Emily White",
    description: "Explore the basics of cloud computing and cloud services.",
    enrollmentStatus: "Open",
    duration: "6 weeks",
    schedule: "Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    url: "https://img.freepik.com/free-vector/cloud-computing-logo-design-data-storage-network-technology-logotype_126523-2784.jpg",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cloud Computing",
        content: "Overview of cloud computing, types of cloud services.",
      },
      {
        week: 2,
        topic: "Cloud Service Models",
        content: "Understanding IaaS, PaaS, and SaaS models.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 13,
    name: "UX/UI Design Fundamentals",
    instructor: "Olivia Johnson",
    description:
      "Learn the basics of user experience (UX) and user interface (UI) design.",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    schedule: "Fridays, 7:00 PM - 9:00 PM",
    location: "Online",
    url: "https://seahawkmedia.com/wp-content/uploads/2023/08/UI-UX.jpg",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to UX/UI Design",
        content: "Overview of UX/UI design principles and processes.",
      },
      {
        week: 2,
        topic: "Wireframing and Prototyping",
        content: "Creating wireframes and prototypes for digital products.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 14,
    name: "Digital Marketing Essentials",
    instructor: "David Moore",
    description: "Learn essential digital marketing concepts and strategies.",
    enrollmentStatus: "Open",
    duration: "6 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "Online",
    url: "https://s.tmimgcdn.com/scr/800x500/204900/digital-marketing-d-letter-logo-template_204936-original.jpg",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content: "Overview of digital marketing channels and strategies.",
      },
      {
        week: 2,
        topic: "Search Engine Optimization (SEO)",
        content: "Understanding SEO techniques to improve website visibility.",
      },
      // Additional syllabus items...
    ],
  },
  {
    id: 15,
    name: "iOS App Development",
    instructor: "Christopher Taylor",
    description:
      "Learn to develop iOS apps using Swift programming language and Xcode IDE.",
    enrollmentStatus: "Open",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    url: "https://www.armia.com/project/img/ios.png",
    prerequisites: ["Basic knowledge of programming"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to iOS Development",
        content: "Setting up Xcode, creating your first iOS app.",
      },
      {
        week: 2,
        topic: "Swift Programming Basics",
        content: "Syntax, data types, and basic Swift programming concepts.",
      },
      // Additional syllabus items...
    ],
  },
];
