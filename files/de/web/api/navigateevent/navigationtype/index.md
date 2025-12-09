---
title: "NavigateEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigateEvent/navigationType
l10n:
  sourceCommit: 06ab986fc58ffb4e12b9f9962ee3c2783ce1290b
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`navigationType`**-Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.

## Wert

Ein enumerierter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`
  - : Ein neuer Standort wird angesteuert, wodurch ein neuer Eintrag in die Verlaufsliste eingefügt wird.
- `reload`
  - : Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`
  - : Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Historieneintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`
  - : Der Browser navigiert von einem bestehenden Historieneintrag zu einem anderen bestehenden Historieneintrag.

## Beispiele

### Asynchrone Übergänge mit spezieller Behandlung von Zurück-/Vorwärtsnavigation

Manchmal ist es wünschenswert, Zurück-/Vorwärtsnavigationen speziell zu behandeln, z. B. durch Wiederverwendung von zwischengespeicherten Ansichten, indem sie auf den Bildschirm verschoben werden. Dies kann durch Verzweigung wie folgt erreicht werden:

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
