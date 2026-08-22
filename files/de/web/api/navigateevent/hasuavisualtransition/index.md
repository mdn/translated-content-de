---
title: "NavigateEvent: hasUAVisualTransition Eigenschaft"
short-title: hasUAVisualTransition
slug: Web/API/NavigateEvent/hasUAVisualTransition
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`hasUAVisualTransition`** des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt `true` zurück, wenn der User-Agent vor dem Auslösen dieses Ereignisses eine visuelle Transition für diese Navigation durchgeführt hat, andernfalls `false`.

User-Agents können beim Ausführen von Site-Navigationen eine eingebaute visuelle Transition bereitstellen. Wenn der Site-Autor ebenfalls eine visuelle Transition hinzufügt, können sich User-Agent- und Autor-Transitionen überschneiden und Besucher verwirren. Die Eigenschaft ermöglicht es Ihnen zu erkennen, ob eine UA-Transition bereitgestellt wurde, sodass Sie Autor-Transitionen überspringen können, um eine bessere Benutzererfahrung zu bieten.

## Wert

Ein boolescher Wert.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Some navigations, e.g. cross-origin navigations, we
  // cannot intercept. Let the browser handle those normally.
  if (!event.canIntercept) {
    return;
  }

  // Don't intercept fragment navigations or downloads.
  if (event.hashChange || event.downloadRequest !== null) {
    return;
  }

  event.intercept({
    async handler() {
      // Fetch the new content
      const newContent = await fetchNewContent(event.destination.url, {
        signal: event.signal,
      });

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
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenerstellung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Transitions im selben Dokument für Single-Page-Anwendungen](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
