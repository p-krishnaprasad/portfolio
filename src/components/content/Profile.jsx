import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import Navbar from "../utilities/Navbar";
import { useTheme } from "../../context/ThemeContext.jsx";
import TypewriterText from "../utilities/TypewriterText.jsx";
import { event } from "../utilities/gtag.jsx";
import { trackGAEvent } from "../utilities/gtag.jsx";

export default function Profile({ profile, analyticsSource = "profile" }) {
  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight dark:text-slate-400 sm:text-5xl">
            <TypewriterText text={profile.first_name} />
          </h1>

          <h2 className="mt-3 text-lg font-medium tracking-tight dark:text-slate-400 sm:text-xl">
            {profile.role}
          </h2>

          <p className="mt-4 max-w-xs leading-normal">{profile.bio}</p>
          <Navbar />
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          {profile.socials.map((social, idx) => (
            <li className="mr-5 shrink-0 text-xs" key={idx}>
              <a
                className="block hover:dark:text-slate-400"
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub (opens in a new tab)"
                title={social.name}
                onClick={() => trackGAEvent(social.name, analyticsSource)}
              >
                {social.name === "Code" && <LuCodeXml className="h-6 w-6" />}
                {social.name === "GitHub" && <FaGithub className="h-6 w-6" />}
                {social.name === "LinkedIn" && (
                  <FaLinkedin className="h-6 w-6" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
