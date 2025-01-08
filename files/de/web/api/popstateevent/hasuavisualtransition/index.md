---
title: "PopStateEvent: hasUAVisualTransition-Eigenschaft"
short-title: hasUAVisualTransition
slug: Web/API/PopStateEvent/hasUAVisualTransition
l10n:
  sourceCommit: 082221e2a29b7bea7a3029cd71442c8f294a8422
---

{{APIRef("History API")}}

Die schreibgeschützte **`hasUAVisualTransition`**-Eigenschaft des [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)-Interfaces gibt `true` zurück, wenn der User Agent eine visuelle Transition für diese Navigation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde, oder andernfalls `false`.

User Agents können beim Ausführen von Site-Navigationen eine eingebaute visuelle Transition bereitstellen. Wenn der Webseitenautor ebenfalls eine visuelle Transition hinzufügt, können sich User-Agent- und Author-Transitionen überschneiden und den Benutzer verwirren. Die Eigenschaft ermöglicht es Ihnen zu erkennen, ob eine UA-Transition bereitgestellt wurde, sodass Sie Author-Transitionen für eine bessere Benutzererfahrung überspringen können.

## Wert

Ein boolescher Wert.

## Beispiele

```js
window.addEventListener("popstate", (event) => {
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

- [Moderne client-seitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- [Gleiche-Dokument-Ansichtstransitionen für Single-Page-Applications](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
