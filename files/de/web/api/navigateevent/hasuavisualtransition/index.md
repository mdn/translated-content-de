---
title: "NavigateEvent: hasUAVisualTransition-Eigenschaft"
short-title: hasUAVisualTransition
slug: Web/API/NavigateEvent/hasUAVisualTransition
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`hasUAVisualTransition`** der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle gibt `true` zurück, wenn der Benutzer-Agent eine visuelle Transition für diese Navigation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde, andernfalls `false`.

Benutzer-Agenten können eine integrierte visuelle Transition bereitstellen, wenn sie Site-Navigationen ausführen. Wenn der Site-Autor ebenfalls eine visuelle Transition hinzufügt, können sich Benutzer-Agent und Autoren-Transitions widersprechen und den Besucher verwirren. Die Eigenschaft ermöglicht es Ihnen zu erkennen, ob eine Benutzer-Agent-Transition zur Verfügung gestellt wurde, sodass Sie Autoren-Transitions auslassen können, um eine bessere Benutzererfahrung zu bieten.

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

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Gleiche-Dokument-Ansichtstransitionen für Single-Page-Anwendungen](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
