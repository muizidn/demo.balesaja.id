"use client";

import { useEffect, useRef } from "react";

export default function WidgetLoader({ src }: { src: string }) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    document.getElementById("cs-ai-widget-container")?.remove();
    document.getElementById("cs-ai-widget-button")?.remove();

    document.querySelector(`script[data-widget-src="${src}"]`)?.remove();

    const script = document.createElement("script");
    script.src = src;
    script.setAttribute("data-widget-src", src);
    script.async = true;
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      document.getElementById("cs-ai-widget-container")?.remove();
      document.getElementById("cs-ai-widget-button")?.remove();
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
  }, [src]);

  return null;
}
