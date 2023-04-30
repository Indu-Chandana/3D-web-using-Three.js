import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  solidity,
  docker,
  // meta,
  // starbucks,
  // tesla,
  itex,
  // shopify,
  threejs,
  web3,
  ShapeUp,
  metaverse,
  aiChatbot,
  Memories,
  amazon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "iTexphere Solutions",
    icon: itex,
    iconBg: "#050816",
    date: "January 2023 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "UI optimized for different screen sizes and resolutions, ensuring that the app looks great on all devices.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "iTexphere Solutions",
    icon: itex,
    iconBg: "#050816",
    date: "May 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Work with senior engineers to help design applications, including creating specifications and defining system requirements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Testing software applications to ensure they meet quality standards and perform as expected",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "iTexphere Solutions",
    icon: itex,
    iconBg: "#050816",
    date: "Aug 2021 - May 2022",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Development, Customization, and maintenance of WordPress websites",
      "Researching industry trends, technologies, and best practices",
      "Contribute to discussions on project progress, challenges, and solutions.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: itex,
  //   iconBg: "#050816",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Web3.0 Blockchain-App",
    description:
      "Blockchain Cryptocurrency app. Design, connected to the blockchain, metamask pairing, interaction with smart contracts, sending Ethereum through the blockchain network, writing solidity code.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: web3,
    source_code_link: "https://krypt-indu.netlify.app",
    github_link: "https://github.com/Indu-Chandana/Web3.0-Blockchain-Application"
  },
  {
    name: "ShapeUp",
    description:
      "With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples, pull related videos from youtube, and much more...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "muiV5",
        color: "pink-text-gradient",
      },
    ],
    image: ShapeUp,
    source_code_link: "https://fit-indu.netlify.app/",
    github_link: "https://github.com/Indu-Chandana/Fitness-Exercises-App-With-APIs"
  },
  {
    name: "METAVERSE",
    description:
      "Transform a Figma design into a fully functioning website using Next13, Framer Motion, and Tailwind CSS. React project Architecture and Clean code best practices.",
    tags: [
      {
        name: "nextjs_13",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://metaversus-ui.vercel.app/",
    github_link: "https://github.com/Indu-Chandana/Metaversus-Ui"
  },
  {
    name: "Codex-AI",
    description:
      "communication with advanced GPT3 model API, and most importantly, the ability to ask the AI for help regarding JS or any other language, giving it code and translating it to another programming language.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI APIs",
        color: "pink-text-gradient",
      },
    ],
    image: aiChatbot,
    source_code_link: "https://codex-ai-build-indu.vercel.app/",
    github_link: "https://github.com/Indu-Chandana/Codex-AI-Build-Indu"
  },
  {
    name: "Memories with MERN",
    description:
      "Memories is an app for adding, updating, deleting, and liking memories.Users can also view each other's memories, creating a community of shared experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: Memories,
    source_code_link: "https://indu-memo.netlify.app/",
    github_link: "https://github.com/Indu-Chandana/social-media-MERN-application"
  },
  {
    name: "Amazon Clone",
    description:
      "List out items in a beautiful responsive website. Add items to basket supported by Redux state management. User can pay their order by stripe.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://amazon-clone-omega-six.vercel.app/",
    github_link: "https://github.com/Indu-Chandana/Full-stack-Amazon-clone"
  },
];

export { services, technologies, experiences, testimonials, projects };