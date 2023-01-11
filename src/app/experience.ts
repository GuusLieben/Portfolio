import {TimelineEntry} from "./timeline/timeline.component";

export const experience: TimelineEntry[] = [
  {
    name: "Cost Engineering",
    logo: "assets/png/costengineering.png",
    location: "Zwijndrecht, The Netherlands",
    activities: [
      {
        title: "Junior software engineer",
        period: {
          start: "June 2022",
          end: "Present"
        },
        description: "",
        keywords: []
      },
      {
        title: "Graduate student",
        period: {
          start: "February 2022",
          end: "June 2022"
        },
        description: "Developed a new integrated development environment to develop dynamic cost models, which are applied to cost estimates, knowledgebases. " +
          "The developed environment is also capable of being applied to various other scripting solutions within the related SaaS platform it was developed for.",
        keywords: []
      },
      {
        title: "Work student",
        period: {
          start: "January 2021",
          end: "June 2022"
        },
        description: "Developed an interactive 3D CAD structure viewer and the tools required to extract and filter relevant metadata from CAD models. " +
          "During this development I established and developed new technologies to integrate native web components into the SaaS solution which integrates these tools.",
        keywords: []
      },
      {
        title: "Intern software engineering",
        period: {
          start: "June 2020",
          end: "January 2021"
        },
        description: "Provided a full analysis and prototype of potential solutions to integrate architectural model metadata into existing project- and financial management software. " +
          "The provided solution follows the building information modeling (BIM) process, which defines the lifecycle of a physical structure is defined, designed, and developed.",
        keywords: []
      }
    ]
  },
  {
    name: 'Stoopman Jewelers',
    logo: 'assets/png/stoopman.png',
    location: 'Zwijndrecht / Hendrik-Ido-Ambacht, The Netherlands',
    activities: [
      {
        title: 'Sales assistant',
        period: {
          start: 'September 2019',
          end: 'September 2021'
        },
        description: '',
        keywords: []
      }
    ]
  },
  {
    name: 'Avans University of Applied Sciences',
    logo: 'assets/png/avans.png',
    location: 'Breda, The Netherlands',
    activities: [
      {
        title: 'Peer Mentor',
        period: {
          start: 'February 2019',
          end: 'June 2021'
        },
        description: 'Mentored first-, second- and third year computer science students. ' +
          'During these mentorship sessions I provided support to plan and execute both individual assignments, as well as group projects commissioned by external parties.',
        keywords: []
      }
    ]
  },
  {
    name: 'PLUS Retail',
    logo: 'assets/png/plus.png',
    location: 'Hendrik-Ido-Ambacht, The Netherlands',
    activities: [
      {
        title: 'Store executive, department manager',
        period: {
          start: 'September 2018',
          end: 'September 2019'
        },
        description: 'Coordinated work across five departments, responsible for over sixty employees. ' +
          'During this time I was responsible for duties ranging from customer services to financial management reports, as well as setting up new procedures to improve the efficiency of on-going processes.',
        keywords: []
      }
    ]
  }
]
