---
title: "NavigateEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigateEvent/navigationType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigationType`**-Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.

## Wert

Ein enumerierter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`: Eine neue Position wird angesteuert, wodurch ein neuer Eintrag in der Verlaufs-Liste hinzugefügt wird.
- `reload`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufs-Eintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem bestehenden Verlaufs-Eintrag zu einem anderen bestehenden Verlaufs-Eintrag.

## Beispiele

### Asynchrone Übergänge mit spezieller Vor-/Zurück-Navigation

Manchmal ist es wünschenswert, Vor-/Zurück-Navigationen speziell zu behandeln, z.B. durch die Wiederverwendung von zwischengespeicherten Ansichten, indem sie auf dem Bildschirm angezeigt werden. Dies kann durch folgende Verzweigung erreicht werden:

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

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
