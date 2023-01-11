import {TimelineEntry} from "./timeline/timeline.component";

export const education: TimelineEntry[] = [
  {
    name: "Avans University of Applied Sciences",
    logo: "assets/png/avans.png",
    location: "Breda, The Netherlands",
    activities: [
      {
        title: "Bachelor of Applied Science in Software Engineering",
        period: {
          start: "September 2018",
          end: "June 2022"
        },
      },
      {
        title: "Specialization Artificial Intelligence",
        period: {
          start: "August 2021",
          end: "January 2022"
        },
        keywords: [
          "Machine Learning",
          "Deep Learning",
          "Natural Language Processing",
          "(Convolutional) Neural Networks",
          "Predictive Modeling"
        ]
      },
      {
        title: "Propaedeutic Diploma Information Technology",
        period: {
          start: "August 2020"
        },
      }
    ]
  },
  {
    name: "Cambridge University Press & Assessment English",
    logo: "assets/png/cambridge.png",
    location: "Cambridge, England",
    activities: [
      {
        title: "Cambridge First Certificate in English (FCE) Level B2",
        period: {
          start: "August 2015"
        },
      }
    ]
  },
  {
    name: "International Baccalaureate",
    logo: "assets/png/ib.png",
    location: "Zwijndrecht, The Netherlands",
    activities: [
      {
        title: "Language A (English): Language and Literature - Higher Level",
        period: {
          start: "June 2015"
        },
      }
    ]
  },
  {
    name: "DGS Arbo & Veiligheid",
    logo: "assets/png/emergency.png",
    location: "Sliedrecht, The Netherlands",
    activities: [
      {
        title: "Emergency response officer (BHV)",
        period: {
          start: "October 2022"
        },
        keywords: [
          "First aid",
          "Fire safety",
        ]
      }
    ]
  }
]
