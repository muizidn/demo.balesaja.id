"use client";

import { useEffect } from "react";

export default function AiWidgetCleanup() {
  useEffect(() => {
    const c = document.getElementById("cs-ai-widget-container");
    const b = document.getElementById("cs-ai-widget-button");
    c?.remove();
    b?.remove();
  }, []);

  return null;
}
