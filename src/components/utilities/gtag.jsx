import { GA_MEASUREMENT_ID } from "../../config";
// Track page views
export const pageview = (url) => {
  if (!window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (!window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackGAEvent = (socialName, analyticsSource) => {
  // Send event to GA
  var category = "";
  switch (analyticsSource) {
    case "profile":
      category = "Profile Links";
      break;
    case "projects":
      category = "Project Links";
      break;
    case "experiences":
      category = "Employer Links";
      break;
  }
  event({
    action: "click",
    category: category,
    label: socialName,
  });
};
