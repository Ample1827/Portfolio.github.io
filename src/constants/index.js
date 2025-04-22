const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "User Endorsements",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "images/ideas.svg" },
    { text: "Concepts", imgPath: "images/concepts.svg" },
    { text: "Designs", imgPath: "images/designs.svg" },
    { text: "Code", imgPath: "images/code.svg" },
    { text: "Proposals", imgPath: "images/ideas.svg" },
    { text: "Models", imgPath: "images/concepts.svg" },
    { text: "Mockups", imgPath: "images/designs.svg" },
    { text: "Programs", imgPath: "images/code.svg" },
  ];
  
  const counterItems = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "+", label: "Satisfied Clients" },
    { value: 32, suffix: "+", label: "Completed Projects" },
    { value: 92, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "images/logos/company-logo-1.png",
    },
    {
      imgPath: "images/logos/company-logo-2.png",
    },
    {
      imgPath: "images/logos/company-logo-3.png",
    },
    {
      imgPath: "images/logos/company-logo-4.png",
    },
    {
      imgPath: "images/logos/company-logo-5.png",
    },
    {
      imgPath: "images/logos/company-logo-6.png",
    },
    {
      imgPath: "images/logos/company-logo-7.png",
    },
    {
      imgPath: "images/logos/company-logo-8.png",
    },
    {
      imgPath: "images/logos/company-logo-9.png",
    },
    {
      imgPath: "images/logos/company-logo-10.png",
    },
    {
      imgPath: "images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "images/seo.png",
      title: "Efficient Engineering",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "images/chat.png",
      title: "Clear Communication",
      desc: "Maintaining transparency through regular updates, detailed walkthroughs, and collaborative feedback.",
    },
    {
      imgPath: "images/time.png",
      title: "Reliable Delivery",
      desc: "Ensuring projects are delivered on time with a focus on quality, testing, and long-term maintainability.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "AI Engineer",
      imgPath: "images/logos/neural.png",
    },
    {
      name: "Python Developer",
      imgPath: "images/logos/python.svg",
    },
    {
      name: "Full-Stack Developer",
      imgPath: "images/logos/react.png",
    },
    {
      name: "DevOps / Cloud Engineer",
      imgPath: "images/logos/aws.png",
    },
    {
      name: "Project Leader & Mentor",
      imgPath: "images/logos/scrum.png",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Adalberto brought creativity and technical expertise to the team, significantly improving our backend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "images/icons8-aws (1).svg",
      logoPath: "images/icons8-aws (1).svg",
      title: "Software Engineer | FullStack Engineer",
      date: "January 2020 - Present",
      responsibilities: [
        "Set up Dockerized infrastructure with AWS, deploying a small client database using EC2 and S3 to improve system performance and deployment speed.",
        "Built a modern client-facing landing page using React and TailwindCSS to enhance user experience.",
        "Scripted a Python tool to auto-sort and validate invoices, improving accuracy and boosting productivity by ~30%..",
      ],
    },
    {
      review:
        "Adalberto’s contributions to our web apps and AI tooling have been outstanding. His ability to design scalable prompt templates and fine-tune LLM workflows shows a deep understanding of problem-solving and real-world application",
      imgPath: "images/Outlier.svg",
      logoPath: "images/logos/neural.png",
      title: "AI Engineer | FullStack Engineer",
      date: "2024 September - Present",
      responsibilities: [
        "Led the development of internal AI tooling, focusing on scalable LLM prompt templates and dynamic workflows.",
        "Collaborated with backend engineers to integrate AI-driven APIs into production web apps for real-time insights.",
        "Contributed to internal frameworks powering LLM-based features, improving inference speed and prompt consistency.",
      ],
    },
    {
      review:
        "Adalberto’s work on our inventory management system brought a high level of quality and efficiency. He delivered robust, scalable solutions that streamlined operations and directly supported our business goals.",
      imgPath: "images/exp3.png",
      logoPath: "images/logo3.png",
      title: "Software Engineer",
      date: " 2021 May - Sep 2024",
      responsibilities: [
        "Containerized the full-stack application for seamless deployment, improving consistency between dev and production environments and accelerating iteration cycles.",
        "Automated data entry, validation, and categorization, reducing human error and cutting manual processing time by over 50%.",
        "Coordinated with the product team to implement features based on feedback.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adalberto. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adalberto was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "images/client3.png",
    },
    {
      name: "Omar Farouk",
      mentions: "@OmarFarouk",
      review:
        "Collaborating with Adalberto was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adalberto's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adalberto is the ideal partner.",
      imgPath: "images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adalberto was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adalberto’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adalberto was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "images/client6.png",
    },
  ];
  
  const socialImgs = [
    
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/adalberto-romero/",
      imgPath: "images/linkedin.png",
    }
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };