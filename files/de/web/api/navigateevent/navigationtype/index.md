---
title: "NavigateEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigateEvent/navigationType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigationType`** schreibgeschützte Eigenschaft der
{{domxref("NavigateEvent")}}-Schnittstelle gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.

## Wert

Ein aufgezählter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`: Ein neuer Ort wird navigiert, wodurch ein neuer Eintrag zur Verlaufsliste hinzugefügt wird.
- `reload`: Der {{domxref("Navigation.currentEntry")}} wird neu geladen.
- `replace`: Der {{domxref("Navigation.currentEntry")}} wird durch einen neuen Verlaufs-Eintrag ersetzt. Dieser neue Eintrag wird denselben {{domxref("NavigationHistoryEntry.key", "key")}} wiederverwenden, aber eine andere {{domxref("NavigationHistoryEntry.id", "id")}} zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem vorhandenen Verlaufs-Eintrag zu einem anderen vorhandenen Verlaufs-Eintrag.

## Beispiele

### Asynchrone Übergänge mit spezieller Vor-/Zurück-Navigation

Manchmal ist es wünschenswert, Vor-/Zurück-Navigationen speziell zu behandeln, z.B. durch das Wiederverwenden von zwischengespeicherten Ansichten, indem sie auf den Bildschirm überführt werden. Dies kann folgendermaßen verzweigt werden:

```js
navigation.addEventListener("navigate", (event) => {
  // Einige Navigationen, z.B. Cross-Origin-Navigationen,
  // können wir nicht abfangen. Lassen Sie den Browser diese normal handhaben.
  if (!event.canIntercept) {
    return;
  }

  // Keine Fragment-Navigationen oder Downloads abfangen.
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
        // Dies wird wahrscheinlich dazu führen, dass myFramework
        // die gerenderte Seite in myFramework.previousPages speichert.
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

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erklärer der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
