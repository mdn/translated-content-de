---
title: "PopStateEvent: hasUAVisualTransition-Eigenschaft"
short-title: hasUAVisualTransition
slug: Web/API/PopStateEvent/hasUAVisualTransition
l10n:
  sourceCommit: 875b84034211b6e83150ba33efac9b0665074f17
---

{{APIRef("History API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`hasUAVisualTransition`** des [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)-Interfaces gibt `true` zurück, wenn der User-Agent für diese Navigation eine visuelle Übergangsanimation vor der Auslösung dieses Ereignisses durchgeführt hat, andernfalls `false`.

User-Agents können bei der Durchführung von Seiten-Navigationen eine integrierte visuelle Übergangsanimation bereitstellen. Wenn der Seitenautor ebenfalls eine visuelle Übergangsanimation hinzufügt, könnten sich die Übergangsanimationen des User-Agents und des Autors überschneiden und einen Besucher verwirren. Die Eigenschaft ermöglicht es Ihnen zu erkennen, ob eine Übergangsanimation des User-Agents bereitgestellt wurde, sodass Sie Übergangsanimationen des Autors überspringen können, um ein besseres Benutzererlebnis zu erzielen.

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

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
- [Übergangseffekte für selbe-Dokument-Ansichten in Single-Page-Anwendungen](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
