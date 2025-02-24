export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Je privilégie la collaboration et favorise une communication ouverte",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Je m'adapterai à vos besoins ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Ma tech stack",
    description: "J'améliore constamment ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthousiaste avec une passion pour le développement web",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Développeur Web, Ruby on Rails, ReactJs, NextJS",
    description: "The Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Contactez - moi !",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Panima",
    des: "Une plateforme de gestion pour magasin autonome en Ruby on Rails",
    img: "/p2.svg",
    iconLists: [
      "/rails.svg",
      "/sass.svg",
      "/js.svg",
      "/pgsql.svg",
      "/sidekiq.svg",
    ],
    link: "https://github.com/Alexskq/PanimaMVP",
  },
  {
    id: 2,
    title: "Dog Walks",
    des: "Vous êtes éducateur canin et vous souhaitez organiser les évenements de votre communauté",
    img: "/p1.svg",
    iconLists: ["/rails.svg", "/tail.svg", "/pgsql.svg", "js.svg"],
    link: "https://github.com/Alexskq/Dog_Walks",
  },
  {
    id: 3,
    title: "Divers site vitrine pour des clients",
    des: "N'hésitez pas à me contacter pour plus d'informations",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/rails.svg", "js.svg"],
    // link: "https://portfolio-2-0-smoky.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "HighLight Kindle App - En cours",
  //   des: "Une application qui permet de récupérer tous les passages surligner de vos livres kindle",
  //   img: "/p3.svg",
  //   iconLists: ["/rails.svg", "/bstrap.svg", "/pgsql.svg"],
  //   // link: "https://github.com/adrianhajdin/iphone",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Développeur Web RoR, ReactJs, NextJS",
    desc: "Focus sur l'expérience utilisateur et les performances",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Freelance",
    desc: "Transforme vos idées en applications web modernes",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Formateur - Le Wagon",
    desc: "Dispense des cours sur différents concepts de développement web, gestion de projets ",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "Assistant - Le Wagon",
    desc: "Aide aux étudiants sur la partie pratique des cours et des projets - 2023",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    url: "https://github.com/Alexskq",
    img: "/git.svg",
  },
  {
    id: 2,
    url: "https://lewagon-alumni.slack.com/team/U053J8Q0Z50",
    img: "/slack.svg",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/alexzoonekynd",
    img: "/link.svg",
  },
];
