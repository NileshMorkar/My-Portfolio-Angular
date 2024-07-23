import { Project } from "./project.type";

export const projectsData: Project[] = [
    {
        name: "Electronic Store Backend",
        description: "A backend for an electronic store that allows users to create, read, update and delete products and orders. It is built with SpringBoot, MySQL and Hibernate. It uses JWT for authentication and authorization. It also uses Bcrypt for password hashing.",
        image: "../../assets/projects_images/electronic_store.webp",
        githubLink: "https://github.com/NileshMorkar/Electronic-Store-Backend-SpringBoot",
        technology: ["Java", "SpringBoot", "MySQL",
            "JWT", "Hibernate", "Swagger"]
    },
    {
        name: "Hospital Management System Backend",
        description: "Implemented appointment management system allowing doctors to view and manage appointments. Enabled patients to schedule appointments. Patients can securely store and access their medical history, create personalized folders, and store prescriptions.",
        image: "../../assets/projects_images/hospital.jpeg",
        githubLink: "https://github.com/NileshMorkar/Hospital-Management-Backend",
        technology: ["Java", "SpringBoot", "JWT", "MySQL", "Hibernate", "Spring Security", "Swagger"],
        liveLink: "https://hospital-management-backend-n7ck.onrender.com/swagger-ui/index.html"
    },
    {
        name: "Job Portal Backend",
        description: "Designed and implemented functionalities for job seekers to browse job listings, apply for jobs, and track their application status. Created features for recruiters to post job listings, view applicant profiles, and manage job applications efficiently.",
        image: "../../assets/projects_images/job.jpeg",
        githubLink: "https://github.com/NileshMorkar/Job-Portal-Backend",
        technology: ["Java", "Spring", "SpringBoot", "MySQL", "Hibernate", "Swagger"]
    },
    {
        name: "Recipe Route Flutter App",
        description: "Implemented API integration techniques to fetch recipe data from external sources, ensuring a rich and dynamic browsing experience for users.",
        image: "../../assets/projects_images/food.jpeg",
        githubLink: "https://github.com/NileshMorkar/recipe_route_app",
        technology: ["Flutter", "Dart", "API"]
    }, {
        name: "Note Saver App",
        description: "Implemented note creation and editing features. Provided User-friendly interface.",
        image: "../../assets/projects_images/note.jpeg",
        githubLink: "https://github.com/NileshMorkar/note_saver_app",
        technology: ["Flutter", "Dart", "SQLite", "Flutter Widgets"]
    }, {
        name: "Weather App",
        description: "Created Weather Vibe, a Flutter-based application using external APIs to provide real-time weather updates and forecasts.",
        image: "../../assets/projects_images/weather.jpeg",
        githubLink: "https://github.com/NileshMorkar/weather_app",
        technology: ["Flutter", "Dart", "API", "Flutter Widgets"]
    },

];

