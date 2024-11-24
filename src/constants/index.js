import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate MERN stack developer with a knack for crafting robust and scalable web applications. I have my skills in front-end technologies like React, as well as back-end technologies like Node.js, MongoDB, and ExpressJS. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile MERN stack developer with a passion for creating efficient and user-friendly web applications.  My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "A Blog App with MERN Stack",
    image: project1,
    description:
      "Explore a powerful Blog application built with the MERN stack (MongoDB, Express, React, Node.js), featuring JWT-based user authentication for secure access and Redux for efficient state management. ",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    link:"https://mern-blogee.onrender.com/",
  },
  {
    title: "React Free Scribe Translator",
    image: project2,
    description:
      "The React Free Scribe Translation Project is an innovative tool designed to capture audio recordings and provide real-time translations.",
    technologies: ["React", "ML"],
    link:"https://frescri.netlify.app/",
  },
  {
    title: " React Responsive Edusity Website",
    image: project3,
    description:
      "This project aims to develop a React-based, responsive website for Edusity, an educational platform offering various degree programs.",
    technologies: ["React", "Bootstrap"],
    link:"https://edusu.netlify.app/",
  },
  {
    title: "Recipe App with API Integration",
    image: project4,
    description:
      "This project involves developing a Recipe App that allows users to discover recipes from a variety of online sources. The app will integrate with external APIs to fetch recipes, ingredient details, and mores.",
    technologies: ["HTML", "CSS", "Javascript"],
    link:"https://recipesu.netlify.app/",
  },
];

export const CONTACT = {
  phoneNo: "+91-9743243581",
  email: "surajraikar16@gmail.com",
};
