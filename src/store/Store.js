import Image1 from '../pages/images/projects/image-1.jpg'
import Image2 from '../pages/images/projects/image-2.jpg'
import Image3 from '../pages/images/projects/image-3.jpg'
import Image4 from '../pages/images/projects/image-4.jpg'
import Image5 from '../pages/images/projects/image-5.jpg'
import Image6 from '../pages/images/projects/image-6.jpg'

export const projects = [
    {
        image: Image1,
        title: "My Portfolio",
        status: "ongoing",
        details: {
            description: "This Portfolio is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into my personality and work ethic.",
            techs: ["React.js", "JSX", "TailwindCSS", "CSS", "CSS Media Queries", "CSS Animation"],
            url: "https://github.com/estrabillojm/latest-portfolio.git",
            urlBack: "",
            domain: ""
        }
    },
    {
        image: Image2,
        title: "The Whitsundays",
        status: "done",
        details: {
            description: "The Whitsundays web page is converted from Prototype (PSD File) to an interactive static web page.",
            techs: ["HTML", "CSS", "CSS Media Queries", "CSS Animation", "Javascript","jQuery"],
            url: "https://github.com/estrabillojm/the-whitsundays.git",
            urlBack: "",
            domain: "github"
        }
    },
    {
        image: Image3,
        title: "CRUD w/Sanctum",
        status: "done",
        details: {
            description: "This app allows the user to login, register, generate token, create, read, update and delete",
            techs: ["HTML","Vue 3 (Client Side)", "Composition API", "Vuex 4 (Central Store)", "TailwindCSS", "CSS", "Laravel 7 REST API (Server Side)","SQL", "Laravel Sanctum"],
            url: "https://github.com/estrabillojm/todo-with-auth-front-end.git",
            urlBack: "https://github.com/estrabillojm/todo-with-auth-backend.git",
            domain: "github"
        }
    },
    {
        image: Image4,
        title: "Crystales (Front End)",
        status: "pending",
        details: {
            description: "Crystales is a Finance Management System that can monitor and track all transactions and generate financial reports",
            techs: ["HTML","Vue 3 (Client Side)", "Options and Composition API", "Vuex 4 (Central Store)", "Tailwind CSS", "CSS", "CSS Animation", "GSAP"],
            url: "https://github.com/estrabillojm/crystales-front-end-vue-3.git",
            urlBack: "",
            domain: "github"
        }
    },
    {
        image: Image5,
        title: "Dayago",
        status: "done",
        details: {
            description: "Dayago is a generic system to manage blood bank based on information of donor, patient and blood type. It process the transaction between the patient/donor, blood bank and hospitals through online.",
            techs: ["HTML", "Laravel 7", "Laravel 7 Blade Template","jQuery", "SQL", "Bootstrap", "Minimal CSS"],
            url: "",
            urlBack: "",
            domain: "github"
        }
    },
    {
        image: Image6,
        title: "Enrollment System",
        status: "done",
        details: {
            description: "OES is our capstone project wayback 2019. This system allow the interaction between the school Admin and Students. Student can also make an appointment and Admin can generate reports through this system",
            techs: ["HTML", "Node.js", "Express.js", "Mongo DB","Blade Template", "Bootstrap", "Minimal CSS"],
            url: "https://github.com/estrabillojm/Enrollment-System.git",
            urlBack: "",
            domain: "github"
        }
    }
]

export default Image1 