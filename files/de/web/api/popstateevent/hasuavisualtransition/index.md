---
title: "PopStateEvent: hasUAVisualTransition-Eigenschaft"
short-title: hasUAVisualTransition
slug: Web/API/PopStateEvent/hasUAVisualTransition
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("History API")}}

Die schreibgeschützte Eigenschaft **`hasUAVisualTransition`** des [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)-Interfaces gibt `true` zurück, wenn der User Agent vor dem Auslösen dieses Ereignisses eine visuelle Transition für diese Navigation durchgeführt hat, andernfalls `false`.

User Agents können bei der Ausführung von Webseiten-Navigationen eine eingebettete visuelle Transition bereitstellen. Wenn der Webseitenautor ebenfalls eine visuelle Transition hinzufügt, können User Agent- und Autoren-Transitionen in Konflikt geraten und Besucher verwirren. Die Eigenschaft ermöglicht es Ihnen zu erkennen, ob eine UA-Transition bereitgestellt wurde, sodass Sie Autoren-Transitionen überspringen können, um eine bessere Benutzererfahrung zu gewährleisten.

## Wert

Ein boolescher Wert.

## Beispiele

```js
window.addEventListener("popstate", async (event) => {
  // Fetch the new content
  const newContent = await fetchNewContent(location.href);

  // The UA does not support View Transitions, or the UA
  // already provided a Visual Transition by itself (e.g. swipe back).
  // In either case, update the DOM directly
  if (!document.startViewTransition || event.hasUAVisualTransition) {
    doSinglePageAppNav(newContent);
    return;
  }

  // Update the content using a View Transition
  document.startViewTransition(() => {
    doSinglePageAppNav(newContent);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes Client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Same-document view transitions für Single-Page-Anwendungen](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
