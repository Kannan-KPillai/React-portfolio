import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from '../assets/projects/project-5.jpeg'

export const HERO_CONTENT = `Driven by a deep passion for software development and continuous learning, I am a self-taught MERN stack developer dedicated to building scalable, efficient, and elegant solutions. With a relentless commitment to mastering new technologies, I thrive on solving complex problems and crafting seamless digital experiences.

I focus on writing clean, maintainable code that stands the test of time, ensuring projects remain adaptable and easy to scale. My goal is to contribute to the creation of innovative, high-performance systems that deliver real value while adhering to the highest coding standards.`;

export const ABOUT_TEXT = `As a dedicated and versatile full stack developer, I specialize in building dynamic, user-friendly web applications using a diverse range of technologies, including React.js, Node.js, Express.js, Git, RESTful APIs, and MongoDB. What started as a curiosity for how the web works has blossomed into a career fueled by a passion for continuous learning and problem-solving.

I thrive in collaborative, fast-paced environments, where I enjoy tackling complex challenges and delivering high-quality solutions that prioritize both performance and user experience. Beyond coding, I stay active by exploring the latest tech trends, contributing to open-source projects, and continuously honing my skills.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
     " I developed a sophisticated smartphone e-commerce website with a focus on user-friendly UI/UX design, powered by Node.js and MongoDB for a robust backend, and enhanced with Handlebars for a sleek frontend. The project, deployed on Amazon Web Services (AWS) using NGINX as both a proxy server and load balancer, integrates technologies such as Twilio, Ethereal Mail, RazorPay, Bootstrap, Chart.js, and Express.js, ensuring a smooth, scalable, and efficient online shopping experience, with version control managed through Git and GitHub",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB", "Express.js" ],
  },
  {
    title: "Rent a car webiste",
    image: project2,
    description:
      "I developed a multipurpose web application that allows users and car owners to efficiently rent and manage car rentals, featuring advanced search and filter options, seamless booking, and payment processing, along with a dedicated owner dashboard for managing vehicles and rental requests. The platform integrates technologies such as Cloudinary for cloud storage, JWT for authentication, and Ethereal for email verification, and is deployed on AWS using Node.js, Express, MongoDB, and Mongoose, with API reliability ensured through Postman testing.",
    technologies: ["HTML", "CSS", "React", "MongoDB", "Express.js", "Node.js"],
  },
  {
    title: "OLX clone ",
    image: project3,
    description:
      "Developed an OLX Clone website that replicates the essential features of the popular online classifieds platform, enabling users to post, browse, and manage ads seamlessly. This project emphasizes a user-friendly interface and efficient navigation, making it easy for users to buy and sell products. The repository is hosted on GitHub, ensuring proper version control and collaboration throughout the development process",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap", 'Git', ],
  },
  {
    title: "Netflix clone App",
    image: project4,
    description:
      "Developed a Netflix clone using React.js to replicate the core features of the popular streaming platform. This project showcases my ability to build a responsive and dynamic UI, integrating key functionalities such as video carousels, category-based content browsing, and a sleek, user-friendly interface. Leveraging React's component-based architecture, I ensured smooth navigation and efficient state management. The project also includes custom styling and uses third-party APIs for fetching content, simulating a real-world streaming experience.",
    technologies: [ "React.js", "JavaScript ", "Axios", "CSS3", "HTML5", "Git"],
  },
  {
    title: "Restaurant booking website",
    image: project5,
    description:
      "The restaurant booking website features a robust backend built with Node.js, Express, and MongoDB, organized into components for configuration, controllers, database interaction, error handling, models, and routing, while the frontend is designed for an engaging user experience using Vite, with organized static assets and application code for seamless navigation and booking functionality.",
    technologies: [ "React.js", "JavaScript", "Node.js","Vite","MongoDB", "Express.js", "Git"],
  },
];

export const CONTACT = {
  address: "Ballinstraße 4, 12359, Berlin, Germany",
  phoneNo: "+49 15560203499 ",
  email: "kannankpillai5@gmail.com",
};