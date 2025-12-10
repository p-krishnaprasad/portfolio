import Profile from "./components/content/Profile";
import About from "./components/content/About";
import Experience from "./components/content/Experience";
import Projects from "./components/content/Projects";
import ThemeToggle from "./components/utilities/ThemeToggle.jsx";
import Cursor from "./components/utilities/Cursor.jsx";
import Signature from "./components/content/Signature.jsx";

// Helper to parse env JSON with default fallback
const parseEnvJSON = (envVar, key, defaultValue) => {
  try {
    const parsed = envVar ? JSON.parse(envVar) : {};
    return key ? parsed[key] || defaultValue : parsed || defaultValue;
  } catch (err) {
    console.warn("Failed to parse env JSON:", err);
    return defaultValue;
  }
};

export default function App() {
  // Parse all env variables with appropriate defaults
  const profile = parseEnvJSON(
    import.meta.env.VITE_PORTFOLIO_PROFILE_DATA,
    "profile",
    {}
  );
  const about = parseEnvJSON(
    import.meta.env.VITE_PORTFOLIO_ABOUT_DATA,
    "about",
    []
  );
  const projects = parseEnvJSON(
    import.meta.env.VITE_PORTFOLIO_PROJECTS_DATA,
    "projects",
    []
  );
  const experiences = parseEnvJSON(
    import.meta.env.VITE_PORTFOLIO_EXPERIENCES_DATA,
    "experiences",
    []
  );
  const signature = parseEnvJSON(
    import.meta.env.VITE_PORTFOLIO_SIGNATURE_DATA,
    "signature",
    []
  );

  return (
    <div className="relative ">
      <Cursor />
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <ThemeToggle />
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Sidebar */}
          <Profile profile={profile} />
          {/* Right Content */}
          <div className="lg:w-[52%]">
            <About about={about} />
            <Experience experiences={experiences} />
            <Projects projects={projects} />
            <Signature signature={signature} />
          </div>
        </div>
      </div>
    </div>
  );
}
