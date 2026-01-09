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

export const profile = parseEnvJSON(
  import.meta.env.VITE_PORTFOLIO_PROFILE_DATA,
  "profile",
  {}
);
export const about = parseEnvJSON(
  import.meta.env.VITE_PORTFOLIO_ABOUT_DATA,
  "about",
  []
);
export const projects = parseEnvJSON(
  import.meta.env.VITE_PORTFOLIO_PROJECTS_DATA,
  "projects",
  []
);
export const experiences = parseEnvJSON(
  import.meta.env.VITE_PORTFOLIO_EXPERIENCES_DATA,
  "experiences",
  []
);
export const signature = parseEnvJSON(
  import.meta.env.VITE_PORTFOLIO_SIGNATURE_DATA,
  "signature",
  []
);
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
