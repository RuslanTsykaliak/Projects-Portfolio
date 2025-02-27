const projectsData = [
  {
    projectName: "Interactive Knowledge Quiz",
    technologies: ["TypeScript", "Next.js", "localStorage"],
    description: "An interactive quiz application that tests users’ knowledge across various subjects with dynamic localStorage–based functionality.",
    websiteLink: "https://ruslans-test-of-knowledge.vercel.app/",
    youtubeLink: "https://www.youtube.com/watch?v=v4Ot4sUDY2g&feature=youtu.be",
    githubLink: "https://github.com/RuslanTsykaliak/test-of-knowledge"
  },
  {
    projectName: "Gradio Chatbot",
    technologies: ["Python", "Flask", "TensorFlow", "Gradio"],
    description: "A chatbot application leveraging Gradio and TensorFlow to deliver interactive AI conversations built with Python and Flask.",
    websiteLink: "https://huggingface.co/spaces/RuslanTsykaliak/gradio-chatbot",
    githubLink: "https://github.com/RuslanTsykaliak/gradio-chatbot"
  },
  {
    projectName: "Dynamic Shopping Cart",
    technologies: ["JavaScript", "HTML", "CSS", "Firebase", "Web Manifest"],
    description: "A dynamic shopping cart project that demonstrates front-end interactivity and Firebase integration.",
    websiteLink: "https://add-to-cart-ruslan-t.netlify.app/",
    githubLink: "https://github.com/RuslanTsykaliak/add-to-cart"
  },
  {
    projectName: "Rock Paper Scissors Game",
    technologies: ["JavaScript", "HTML", "CSS"],
    description: "A browser-based rock–paper–scissors game implemented in vanilla JavaScript, HTML, and CSS for fun, interactive play.",
    websiteLink: "https://comfy-gelato-3fa394.netlify.app/",
    githubLink: "https://github.com/RuslanTsykaliak/rock-paper-scissors-game"
  },
  {
    projectName: "Full Stack Developer Roadmap",
    technologies: ["JavaScript", "CSS", "HTML"],
    description: "A comprehensive roadmap outlining the essential skills and technologies for aspiring full-stack developers.",
    websiteLink: "https://my-full-stack-developer-roadmap.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/my-full-stack-developer-roadmap"
  },
  {
    projectName: "Reddit Clone",
    technologies: ["Next.js", "TypeScript", "Chakra UI", "Firebase", "Fontsource", "React Icons", "Recoil", "react-firebase-hooks", "Moment.js", "Nookies"],
    description: "A full-featured Reddit clone built with Next.js and TypeScript that replicates core social media functionalities such as posting and voting.",
    websiteLink: "https://reddit-clone-ruslan.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/reddit-clone"
  },
  {
    projectName: "ChatGPT React Interface",
    technologies: ["JavaScript", "HTML", "CSS", "React.js", "Vite.js", "Axios", "OpenAI"],
    description: "An interactive ChatGPT interface that integrates OpenAI’s API using React.js for a conversational AI experience.",
    websiteLink: "https://chatgpt-react-ivory.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/GTP/tree/main/ChatGPT-React"
  },
  {
    projectName: "AI Movie Pitch Generator",
    technologies: ["JavaScript", "HTML", "CSS", "React.js", "Vite.js", "OpenAI"],
    description: "A creative project that uses React.js and OpenAI to generate innovative movie pitch ideas with an intuitive interface.",
    websiteLink: "https://movie-pitch-eta.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/movie-pitch"
  },
  {
    projectName: "AI Image Generator with Dall-E API",
    technologies: ["JavaScript", "HTML", "CSS", "React.js", "Vite.js", "OpenAI"],
    description: "An engaging project that integrates the Dall-E API with React.js to produce visually creative, AI-generated art.",
    websiteLink: "https://dall-e-api-with-react.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/Dall-E-API-with-React"
  },
  {
    projectName: "Interactive JavaScript Game",
    technologies: ["JavaScript", "HTML", "CSS", "Canvas"],
    description: "An interactive browser game that employs the HTML Canvas and JavaScript to deliver dynamic visual gameplay.",
    websiteLink: "https://javascript-game-delta.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/javascript-game"
  },
  {
    projectName: "Web-Based Card Game",
    technologies: ["JavaScript", "HTML", "CSS"],
    description: "A fun and visually appealing card game built using core web technologies.",
    websiteLink: "https://card-game-js-2.netlify.app/",
    githubLink: "https://github.com/RuslanTsykaliak/card-game"
  },
  {
    projectName: "HTML CSS Portfolio Website",
    technologies: ["HTML", "SCSS", "JavaScript"],
    description: "A sleek portfolio website that showcases web design and development skills using HTML, SCSS, and JavaScript.",
    websiteLink: "https://html-css-portfolio-rt.vercel.app",
    githubLink: "https://github.com/RuslanTsykaliak/HTML-CSS-Portfolio"
  },
  {
    projectName: "Advanced JavaScript Game",
    technologies: ["JavaScript", "HTML", "CSS", "Canvas"],
    description: "A refined version of an interactive JavaScript game that leverages Canvas for dynamic gameplay visuals.",
    websiteLink: "https://javascript-game-2.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/javascript-game-2"
  },
  {
    projectName: "Simple To-Do Application",
    technologies: ["JavaScript", "HTML", "CSS", "JSON", "localStorage"],
    description: "A simple to-do application that uses localStorage to persist data and demonstrates core web development techniques.",
    websiteLink: "https://ruslan-to-do.netlify.app/",
    githubLink: "https://github.com/RuslanTsykaliak/to-do"
  },
  {
    projectName: "Rock Paper Scissors Web App",
    technologies: ["JavaScript", "CSS", "HTML", "Web Manifest"],
    description: "A second version of the classic rock–paper–scissors game featuring enhanced design and webmanifest support.",
    websiteLink: "https://rock-paper-scissors-webmanifest.netlify.app/",
    githubLink: "https://github.com/RuslanTsykaliak/rock-paper-scissors-game2"
  },
  {
    projectName: "Wikipedia Search Tool",
    technologies: ["TypeScript", "Next.js", "React-DOM", "TailwindCSS", "Wikipedia API"],
    description: "A powerful search tool that taps into the Wikipedia API and offers a sleek, TailwindCSS–styled interface.",
    websiteLink: "https://wiki-search-sooty.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/wiki-search"
  },
  {
    projectName: "Markdown Blog Platform",
    technologies: ["Next.js", "TypeScript", "React.js", "Remark"],
    description: "A markdown–driven blog platform built with Next.js and TypeScript, providing an easy-to-use content management experience.",
    websiteLink: "https://md-blog-rt.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/md-blog/"
  },
  {
    projectName: "Learning Management System",
    technologies: ["Next.js", "React.js", "Stripe", "Mux", "Prisma", "TailwindCSS", "MySQL"],
    description: "A comprehensive learning management system that integrates payment processing and media services for a complete educational solution.",
    websiteLink: "https://lsm-next-js-13.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/learning-management-system-next.js/"
  },
  {
    projectName: "Trello Task Management Clone",
    technologies: ["TypeScript", "Next.js", "Unsplash API", "Prisma", "TailwindCSS", "Clerk", "Shadcn UI"],
    description: "A Trello-inspired task management application that combines Next.js and TypeScript with multiple API integrations.",
    websiteLink: "https://trello-next14.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/trello-next14"
  },
  {
    projectName: "Sanity.io Blog",
    technologies: ["Next.js", "React.js", "Sanity.io", "TypeScript", "TailwindCSS"],
    description: "A modern blog platform that uses Sanity.io for content management paired with Next.js and TailwindCSS for a clean design.",
    websiteLink: "https://next-js-14-sanity-io-blog.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/next.js-sanity-io-blog"
  },
  {
    projectName: "Prisma Blog",
    technologies: ["Next.js", "React.js", "Firebase", "Prisma", "TailwindCSS", "TypeScript"],
    description: "A blog application that leverages Next.js with Prisma and Firebase to provide a robust content platform.",
    websiteLink: "https://next-js-blog-prisma.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/next-js-blog-prisma"
  },
  {
    projectName: "Fast To-Do App",
    technologies: ["Next.js", "TypeScript", "Prisma", "Radix UI", "Lucide-react", "React.js", "TailwindCSS"],
    description: "A fast and efficient to-do app that combines Next.js and Prisma with modern UI components for a smooth experience.",
    websiteLink: "https://fast-todo-mauve.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/fast-todo"
  },
  {
    projectName: "Kirimase To-Do App",
    technologies: ["TypeScript", "Next.js", "Prisma", "TailwindCSS", "Kirimase"],
    description: "A minimalist to-do application that integrates Prisma and TailwindCSS for a clean, responsive design.",
    websiteLink: "https://kirimase-todo.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/kirimase-todo"
  },
  {
    projectName: "MongoDB To-Do App",
    technologies: ["TypeScript", "Next.js", "MongoDB", "TailwindCSS"],
    description: "A modern to-do application that uses MongoDB and Next.js combined with TailwindCSS for a responsive user interface.",
    websiteLink: "https://ruslan-tsykaliak-todo-mongodb.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/todo-mongodb"
  },
  {
    projectName: "Full-Featured To-Do App",
    technologies: ["TypeScript", "TailwindCSS", "Clerk", "Prisma", "Radix UI", "React.js"],
    description: "A comprehensive to-do application featuring modern authentication and ORM techniques for efficient task management.",
    websiteLink: "https://ruslan-tsykaliak-todo.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/todo"
  },
  {
    projectName: "News Blog Platform",
    technologies: ["TypeScript", "MongoDB", "Next.js", "Cloudinary", "Prisma", "TailwindCSS", "Next Auth"],
    description: "A news blog platform that integrates cloud media services with Next.js and Prisma to deliver scalable content.",
    websiteLink: "https://next-js-14-news-blog.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/next.js-news-blog"
  },
  {
    projectName: "Personal Development Tips Feed",
    technologies: ["TypeScript", "Next.js", "Prisma", "TailwindCSS", "React.js"],
    description: "A social feed application built with Next.js and Prisma, designed to deliver personalized content and development tips.",
    websiteLink: "https://personal-development-tips.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/post-feed"
  },
  {
    projectName: "Angular cPanel Interface",
    technologies: ["Angular", "TypeScript", "HTML", "CSS"],
    description: "A control panel application built with Angular and TypeScript that offers a sleek, cPanel–optimized interface.",
    websiteLink: "https://angular-cpanel.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/angular-cpanel"
  },
  {
    projectName: "React Hooks Showcase",
    technologies: ["Next.js", "TypeScript", "React.js", "React Hooks"],
    description: "A repository dedicated to showcasing practical implementations of React hooks in modern web development.",
    websiteLink: "https://react-hooks-rt.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/react-hooks"
  },
  {
    projectName: "Timeboxing App",
    technologies: ["TypeScript", "React.js", "Next.js", "TailwindCSS"],
    description: "A time management tool built with Next.js and TailwindCSS that helps users optimize productivity through effective scheduling.",
    websiteLink: "https://next-timeboxing.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/next-timeboxing"
  },
  {
    projectName: "Birthday Website",
    technologies: ["JavaScript", "CSS"],
    description: "A creative, birthday-themed project that uses JavaScript and CSS to deliver a festive and interactive experience.",
    websiteLink: "https://birthday-nine-smoky.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/birthday"
  },
  {
    projectName: "React Next.js Portfolio",
    technologies: ["TypeScript", "Next.js", "TailwindCSS"],
    description: "A professional portfolio website built with Next.js and TailwindCSS that showcases projects and development skills in a modern design.",
    websiteLink: "https://ruslantsykaliak.com/",
    githubLink: "https://github.com/RuslanTsykaliak/React-Next-Portfolio"
  },
  {
    projectName: "Markdown Blog",
    technologies: ["Next.js", "TypeScript", "React.js", "Remark"],
    description: "A markdown–driven blog platform built with Next.js and TypeScript, providing an easy-to-use content management experience.",
    websiteLink: "https://md-blog-rt.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/md-blog/"
  },
  {
    projectName: "Fast To-Do Application",
    technologies: ["Next.js", "TypeScript", "Prisma", "Radix UI", "Lucide-react", "React.js", "TailwindCSS"],
    description: "A fast and efficient to-do application built with Next.js, utilizing Prisma and Radix UI, and deployed on Vercel.",
    websiteLink: "https://fast-todo-mauve.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/fast-todo"
  },
  {
    projectName: "MongoDB To-Do List",
    technologies: ["MongoDB", "Next.js", "TailwindCSS", "TypeScript", "React.js"],
    description: "A to-do application with MongoDB integration, built using Next.js and styled with TailwindCSS, and deployed on Vercel.",
    websiteLink: "https://ruslan-tsykaliak-todo-mongodb.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/todo-mongodb"
  },
  {
    projectName: "Advanced To-Do Application",
    technologies: ["TypeScript", "TailwindCSS", "Clerk", "Prisma", "Radix UI", "React.js"],
    description: "A to-do application built with TypeScript and Next.js 14, incorporating Clerk for authentication and Prisma for data management, and deployed on Vercel.",
    websiteLink: "https://ruslan-tsykaliak-todo.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/todo"
  },
  {
    projectName: "News Blog",
    technologies: ["TypeScript", "MongoDB", "Next.js", "Cloudinary", "Prisma", "TailwindCSS", "Next Auth", "React.js"],
    description: "A news blog platform built with Next.js, incorporating MongoDB and Prisma for data handling and NextAuth for authentication, and deployed on Vercel.",
    websiteLink: "https://next-js-14-news-blog.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/next.js-news-blog"
  },
  {
    projectName: "Personal Development Tips Platform",
    technologies: ["TypeScript", "Next.js", "Prisma", "TailwindCSS", "React.js"],
    description: "A platform for personal development tips, built with Next.js and TypeScript, and deployed on Vercel.",
    websiteLink: "https://personal-development-tips.vercel.app/",
    githubLink: "https://github.com/RuslanTsykaliak/post-feed"
  }
];