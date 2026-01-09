import { useEffect } from "react";
import Profile from "./components/content/Profile";
import About from "./components/content/About";
import Experience from "./components/content/Experience";
import Projects from "./components/content/Projects";
import ThemeToggle from "./components/utilities/ThemeToggle.jsx";
import Cursor from "./components/utilities/Cursor.jsx";
import Signature from "./components/content/Signature.jsx";
import {
  GA_MEASUREMENT_ID,
  profile,
  about,
  projects,
  experiences,
  signature,
} from "./config.js";
import AnalyticsTracker from "./components/services/AnalyticsTracker.jsx";

export default function App() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Inject GA script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);
  // Parse all env variables with appropriate defaults

  return (
    <>
      <AnalyticsTracker />
      <div className="relative ">
        <Cursor />
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-16 lg:py-0">
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
    </>
  );
}
