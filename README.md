# Krishna Prasad Portfolio

A modern, responsive personal portfolio website built with **React**, **Tailwind CSS**, and **Vite**, and deployed on **Netlify**. Designed in Figma and coded in VS Code, this portfolio showcases my experience, projects, and skills with a smooth user interface and interactive features.

---

## 🔗 Demo

**[View Live Site](https://krishnap.is-a.dev/)**

---

## ✨ Features

- **Fully Responsive Layout:** Optimized for seamless viewing on desktop, tablet, and mobile devices.
- **Smooth Navigation:** Features smooth scrolling and section highlighting for an intuitive user experience.
- **Interactive Design:** Includes a custom cursor effect for an engaging and interactive feel.
- **Key Sections:**
  - **About Me**
  - **Experience**
  - **Projects**
  - **Signature** (Closing/Contact)
- **Maintainable Codebase:** Built with reusable components.
- **Performance Optimized:** Utilizes lazy-loaded images for faster loading times.

---

## 🚀 Technologies Used

| Category               | Technology       | Purpose                                        |
| :--------------------- | :--------------- | :--------------------------------------------- |
| **Frontend Framework** | **React**        | Building the user interface.                   |
| **Build Tool**         | **Vite**         | Fast development server and production build.  |
| **Styling**            | **Tailwind CSS** | Utility-first CSS framework for rapid styling. |
| **Icons**              | **React Icons**  | Vector icons for UI elements.                  |
| **Deployment**         | **Netlify**      | Continuous deployment and hosting.             |
| **Design**             | **Figma**        | Initial UI/UX design.                          |
| **Font**               | **Inter**        | Modern and legible typeface.                   |

---

## 🛠️ Setup Instructions

Follow these steps to get a local copy of the project up and running.

### Prerequisites

You need **Node.js** and **npm** installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/yourusername/portfolio.git](https://github.com/yourusername/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a file named **`.env`** in the root directory and add your content configuration. The site uses environment variables to manage content.

    **`.env` file sample configuration:**

    ```env
    # Google Analytics
    VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

    # About section content
    VITE_PORTFOLIO_ABOUT_DATA={
    "about": [
        {
        "parts": [
            { "text": "I am an experienced ", "bold": false },
            { "text": "Software Engineer", "bold": true },
            {
            "text": ", with a strong interest in building scalable applications and intuitive digital products. I enjoy turning complex ideas into reliable, user-friendly solutions.",
            "bold": false
            }
        ]
        }
    ]
    }

    # Experience section content
    VITE_PORTFOLIO_EXPERIENCES_DATA={
    "experiences": [
        {
        "role": "Software Engineer",
        "company": "Example Technologies",
        "companyLink": "https://example.com/",
        "period": "Jan 2021 — Present",
        "description": "Worked on designing, developing, and maintaining web applications while collaborating closely with cross-functional teams.",
        "technologies": [
            "JavaScript",
            "React",
            "Node.js",
            "HTML & CSS",
            "SQL",
            "REST APIs",
            "Git"
        ]
        }
    ]
    }

    # Profile section content
    VITE_PORTFOLIO_PROFILE_DATA={
    "profile": {
        "first_name": "John",
        "last_name": "Doe",
        "role": "Full Stack Developer",
        "bio": "I enjoy building clean, performant, and accessible web applications with modern technologies.",
        "socials": [
        { "name": "GitHub", "link": "https://github.com/johndoe" },
        { "name": "LinkedIn", "link": "https://linkedin.com/in/johndoe" }
        ]
    }
    }

    # Projects section content
    VITE_PORTFOLIO_PROJECTS_DATA={
    "projects": [
        {
        "title": "Personal Portfolio",
        "description": "A responsive personal portfolio showcasing projects, skills, and experience.",
        "technologies": ["React", "Vite", "Tailwind CSS"],
        "link": "https://example-portfolio.com",
        "image": "portfolio.png"
        }
    ]
    }

    # Footer / signature content
    VITE_PORTFOLIO_SIGNATURE_DATA={
    "signature": [
        {
        "parts": [
            { "text": "Designed in ", "bold": false },
            { "text": "Figma", "bold": true },
            { "text": ", developed in ", "bold": false },
            { "text": "VS Code", "bold": true },
            { "text": ", and built using ", "bold": false },
            { "text": "React", "bold": true },
            { "text": ", ", "bold": false },
            { "text": "Tailwind CSS", "bold": true },
            { "text": ", and ", "bold": false },
            { "text": "Vite", "bold": true },
            { "text": ". Deployed via ", "bold": false },
            { "text": "Netlify", "bold": true },
            {
            "text": ", focusing on simplicity, performance, and clean design.",
            "bold": false
            }
        ]
        }
    ]
    }

    ```

    > ⚠️ When using these values in a real `.env` file, the JSON objects must be **stringified into a single line**.

    > **Note:** All environment variables prefixed with `VITE_` are automatically exposed to Vite. You must restart the development server after updating the `.env` file for changes to take effect.

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  **Build for production (Optional):**
    ```bash
    npm run build
    ```

### Deployment

The project is configured for easy deployment. You can deploy the contents of the `dist` folder (generated by `npm run build`) to Netlify or your preferred hosting service.

---

## 🤝 Contribution

This is a personal portfolio project. While I'm not accepting external feature contributions, you are welcome to **fork** this repository and customize it for your own personal use!

---

## 📝 License

This project is licensed under the **MIT License**. You are free to use and modify the code for personal projects.

---

## 👤 Author

**Krishna Prasad**

- [GitHub](https://github.com/p-krishnaprasad)
- [LinkedIn](https://www.linkedin.com/in/krishna-prasad-p/)
