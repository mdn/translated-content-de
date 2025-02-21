---
title: "PopStateEvent: hasUAVisualTransition Eigenschaft"
short-title: hasUAVisualTransition
slug: Web/API/PopStateEvent/hasUAVisualTransition
l10n:
  sourceCommit: 289df408e28407067ed51321862290f0ab76d646
---

{{APIRef("History API")}}

Die schreibgeschützte Eigenschaft **`hasUAVisualTransition`** des [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)-Interfaces gibt `true` zurück, wenn der User-Agent vor dem Auslösen dieses Ereignisses eine visuelle Transition für diese Navigation durchgeführt hat, oder `false`, andernfalls.

User-Agents können eine eingebaute visuelle Transition bei Site-Navigationen bereitstellen. Wenn der Seitenautor ebenfalls eine visuelle Transition hinzufügt, können User-Agent- und Autorener-Übergänge in Konflikt geraten und den Besucher verwirren. Die Eigenschaft ermöglicht es Ihnen festzustellen, ob eine UA-Transition bereitgestellt wurde, sodass Sie Autorentransitionen zur Verbesserung der Benutzererfahrung überspringen können.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- [Ansichtstransitionen für einseitige Anwendungen im selben Dokument](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
