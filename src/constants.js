export const TECH_STACK = [
  {
    name: "AWS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "C++",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "cPanel",
    icon: "https://cdn.worldvectorlogo.com/logos/cpanel.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.worldvectorlogo.com/logos/django.svg",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "GCP",
    icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  },
  {
    name: "Git",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "GraphQl",
    icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  },
  {
    name: "HTML5",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "Illustrator",
    icon: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "JQuery",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-plain-wordmark.svg",
  },
  {
    name: "Laravel",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original-wordmark.svg",
  },
  {
    name: "Linux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Nginx",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Photoshop",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg",
  },
  {
    name: "PHP",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "Puppeteer",
    icon: "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg",
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "RabbitMQ",
    icon: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
  },
  {
    name: "React.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
  },
  {
    name: "Redis",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
  },
  {
    name: "Redux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "Sass",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  },
  {
    name: "Selenium",
    icon: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
  },
  {
    name: "Shopify",
    icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  },
  {
    name: "SQLite",
    icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Ubuntu",
    icon: "https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg",
  },
  {
    name: "Wordpress",
    icon: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg",
  },
];

export const STACK_MAP = TECH_STACK.reduce((acc, tech) => {
  const modifiedName = tech.name.toUpperCase().replace(/ /g, "_");
  acc[modifiedName] = { name: tech.name, icon: tech.icon };
  return acc;
}, {});

// JQUERY
// Wordpress
// Shopify
