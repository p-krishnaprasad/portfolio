import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "../../config";

export default function AnalyticsTracker() {
  useEffect(() => {
    if (!window.gtag || !GA_MEASUREMENT_ID) return;
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }, []);

  return null;
}
