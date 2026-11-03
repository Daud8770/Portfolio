import hotelioImg from "../assets/Hotelio.png";
import ecomzyImg from "../assets/EcomozyShoping.png";
import portfolioImg from "../assets/portfolio.png";

export const projectsData = [
  {
    id: 1,
    title: "Hotelio - Hotel Booking App",
    description: "Luxury hotel aur resort booking platform with destination search aur dashboard.",
    image: hotelioImg,
    tech: ["React", "Tailwind CSS", "Clerk", "React Router"],
    liveLink: "https://hotelio-hazel.vercel.app/",
    githubLink: "https://github.com/Daud8770/Hotelio.git"
  },
  {
    id: 2,
    title: "Ecomzy - Shopping Cart App",
    description: "E-commerce store with dynamic cart aur Redux state management.",
    image: ecomzyImg,
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "React Router"],
    liveLink: "https://shop-sphere-phi-silk.vercel.app/",
    githubLink: "https://github.com/Daud8770/ShopSphere.git"
  },
  {
    id: 3,
    title: "Personal Developer Portfolio",
    description: "Modern dark-themed portfolio website with interactive animations aur responsive UI.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "Lucide Icons"],
    liveLink: "https://portfolio-seven-murex-de3zlj71fo.vercel.app/",
    githubLink: "https://github.com/Daud8770/portfolio"
  }
];