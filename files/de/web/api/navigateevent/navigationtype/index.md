---
title: "NavigateEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigateEvent/navigationType
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`navigationType`** schreibgeschützte Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.

## Wert

Ein aufgezählter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`: Eine neue Position wird angesteuert, wodurch ein neuer Eintrag in die Verlaufsliste eingefügt wird.
- `reload`: Die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufs-Eintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) erhalten.
- `traverse`: Der Browser navigiert von einem bestehenden Verlaufs-Eintrag zu einem anderen bestehenden Verlaufs-Eintrag.

## Beispiele

### Asynchrone Übergänge mit spezieller Vor-/Zurück-Navigation

Manchmal ist es wünschenswert, Vor-/Zurück-Navigationen speziell zu behandeln, z.B. indem zwischengespeicherte Ansichten wiederverwendet werden, indem sie auf dem Bildschirm dargestellt werden. Dies kann durch eine Verzweigung wie folgt erreicht werden:

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

- [Moderne clientseitige Routennavigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
