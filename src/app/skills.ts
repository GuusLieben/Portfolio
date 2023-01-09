import {FocusElement} from "./focus-element/focus-element.component";

export type Skill = FocusElement;

export const skills: Skill[] = [
  {
    title: 'Java Backend Development',
    description: 'Spring, Hibernate, cglib, ASM, Jetty',
    image: 'assets/svg/spring.svg'
  },
  {
    title: 'Java Frontend Development',
    description: 'JavaFX, Swing, Vaadin',
    image: 'assets/svg/vaadin.svg'
  },
  {
    title: 'C# Backend Development',
    description: '.NET Core, Entity Framework, Identity Framework',
    image: 'assets/svg/dotnet.svg'
  },
  {
    title: 'JavaScript Backend Development',
    description: 'Node.js, Express, Mongoose, Sequelize',
    image: 'assets/svg/nodejs.svg'
  },
  {
    title: 'JavaScript Frontend Development',
    description: 'Angular, Vue, Sass, TypeScript',
    image: 'assets/svg/sass.svg'
  },
  {
    title: 'Android Application Development',
    description: 'Kotlin, Java, Android SDK',
    image: 'assets/svg/android.svg'
  },
  {
    title: 'System Administration',
    description: 'Windows (Server), Debian, OpenBSD',
    image: 'assets/svg/windows.svg'
  },
  {
    title: 'Database Administration',
    description: 'SQL Server, MySQL, MariaDB, PostgreSQL, MongoDB',
    image: 'assets/svg/sqlserver.svg'
  },
  {
    title: 'Machine Learning',
    description: 'TensorFlow, Keras, (Convolutional) Neural Networks',
    image: 'assets/svg/tensorflow.svg'
  },
  {
    title: 'DevOps',
    description: 'Docker, Kubernetes, Jenkins, GitHub Actions',
    image: 'assets/svg/docker.svg'
  },
  {
    title: 'Project Management',
    description: 'Management of projects, teams and clients',
    image: 'assets/svg/project.svg'
  },
  {
    title: 'Knowledge Sharing',
    description: 'Hosting interactive workshops & knowledge sessions',
    image: 'assets/svg/knowledge.svg'
  }
]
