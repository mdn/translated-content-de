---
title: "NavigateEvent: hasUAVisualTransition-Eigenschaft"
short-title: hasUAVisualTransition
slug: Web/API/NavigateEvent/hasUAVisualTransition
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`hasUAVisualTransition`**-Eigenschaft (nur lesbar) des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Interfaces gibt `true` zurück, wenn der User-Agent vor dem Auslösen dieses Ereignisses eine visuelle Transition für diese Navigation durchgeführt hat, andernfalls `false`.

User-Agents können eine eingebaute visuelle Transition bei der Ausführung von Seitennavigationen bereitstellen. Wenn der Seitenautor ebenfalls eine visuelle Transition hinzufügt, können der User-Agent und die Autor-Transitionen in Konflikt geraten und einen Besucher verwirren. Die Eigenschaft lässt Sie erkennen, ob eine UA-Transition bereitgestellt wurde, sodass Sie Autor-Transitionen für eine bessere Benutzererfahrung überspringen können.

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
    handler() {
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

- [Moderne clientseitige Routen: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Same-document view transitions für Single-Page-Anwendungen](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
