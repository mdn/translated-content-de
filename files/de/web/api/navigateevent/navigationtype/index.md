---
title: "NavigateEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigateEvent/navigationType
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigationType`** schreibgeschützte Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.

## Wert

Ein aufgezählter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`: Ein neuer Ort wird navigiert, was dazu führt, dass ein neuer Eintrag in die Verlaufsliste aufgenommen wird.
- `reload`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem bestehenden Verlaufseintrag zu einem anderen bestehenden Verlaufseintrag.

## Beispiele

### Asynchrone Übergänge mit spezieller Rückwärts-/Vorwärts-Behandlung

Manchmal ist es wünschenswert, Rückwärts-/Vorwärts-Navigationen speziell zu behandeln, z.B. durch die Wiederverwendung von zwischengespeicherten Ansichten, indem sie wieder auf den Bildschirm gebracht werden. Dies kann durch folgende Verzweigung erreicht werden:

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
      if (myFramework.currentPage) {
        await myFramework.currentPage.transitionOut();
      }

      let { key } = event.destination;

      if (
        event.navigationType === "traverse" &&
        myFramework.previousPages.has(key)
      ) {
        await myFramework.previousPages.get(key).transitionIn();
      } else {
        // This will probably result in myFramework storing
        // the rendered page in myFramework.previousPages.
        await myFramework.renderPage(event.destination);
      }
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
