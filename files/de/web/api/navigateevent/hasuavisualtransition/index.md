---
title: "NavigateEvent: hasUAVisualTransition-Eigenschaft"
short-title: hasUAVisualTransition
slug: Web/API/NavigateEvent/hasUAVisualTransition
l10n:
  sourceCommit: 875b84034211b6e83150ba33efac9b0665074f17
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`hasUAVisualTransition`** des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt `true` zurück, wenn der User-Agent eine visuelle Übergangsanimation für diese Navigation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde, oder `false` andernfalls.

User-Agents können bei der Ausführung von Webseiten-Navigationen eine integrierte visuelle Übergangsanimation bereitstellen. Wenn der Webseitenautor ebenfalls eine visuelle Übergangsanimation hinzufügt, können User-Agent- und Autoren-Übergänge in Konflikt geraten und einen Besucher verwirren. Die Eigenschaft ermöglicht es, zu erkennen, ob ein UA-Übergang bereitgestellt wurde, sodass Sie Autoren-Übergänge überspringen können, um ein besseres Benutzererlebnis zu gewährleisten.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- [Same-document-Übergänge für Single-Page-Anwendungen](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
