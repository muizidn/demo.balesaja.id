# Widget Script Mechanism

## Overview

Each landing page loads a Customer Service AI widget script. The mechanism ensures the widget properly initializes and cleans up during client-side navigation (App Router).

## Files

| File | Role |
|---|---|
| `src/components/WidgetLoader.tsx` | Core loader — mounts script, cleans up on unmount |
| `src/components/AiWidgetCleanup.tsx` | Safety net for home page — removes any leftover widget elements |
| `src/app/phone-store/page.tsx` | Uses `WidgetLoader` |
| `src/app/travel-umroh/page.tsx` | Uses `WidgetLoader` |
| `src/app/page.tsx` | Uses `AiWidgetCleanup` |

## How It Works

### WidgetLoader (`src/components/WidgetLoader.tsx`)

A client component that:

1. **On mount**: Removes any leftover widget DOM elements (`#cs-ai-widget-container`, `#cs-ai-widget-button`) and any previous `<script>` tag with the same `data-widget-src` attribute, then creates a fresh `<script>` element and appends it to `<body>`.
2. **On unmount (cleanup)**: Removes the injected widget DOM elements and the script tag itself.

```tsx
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
      scriptRef.current?.remove();
      scriptRef.current = null;
    };
  }, [src]);

  return null;
}
```

### AiWidgetCleanup (`src/components/AiWidgetCleanup.tsx`)

Minimal safety net for the home page. Removes widget elements on mount (in case they leaked from a previous navigation).

### Why not `next/script`?

The built-in `<Script>` component does not re-execute on client-side navigation (the browser caches the script URL). `WidgetLoader` uses a raw `<script>` element with manual DOM management to force re-initialization on every page mount.

## Adding a widget to a new page

1. Import `WidgetLoader` from `@/components/WidgetLoader`
2. Place `<WidgetLoader src="..."/>` inside the page JSX
3. Use the widget script URL provided by the CS AI platform

```tsx
import WidgetLoader from "@/components/WidgetLoader";

export default function NewPage() {
  return (
    <div>
      <WidgetLoader src="https://csai.balescepat.com/widget.js?id=xxx" />
      {/* page content */}
    </div>
  );
}
```

## Updating widget src

Find all occurrences:

```
rg "csai.balescepat.com" src/
```

Update the `src` prop in each `WidgetLoader` usage.
