---
title: "NavigationCurrentEntryChangeEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationCurrentEntryChangeEvent/navigationType
l10n:
  sourceCommit: df3316c2c702c57514bfd8daba389765464ea653
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigationType`** schreibgeschützte Eigenschaft der [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent)-Schnittstelle gibt den Typ der Navigation zurück, der zu der Änderung führte. Die Eigenschaft kann `null` sein, wenn die Änderung aufgrund von [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) erfolgt.

## Wert

Ein enumerierter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`: Es wird zu einem neuen Ort navigiert, wodurch ein neuer Eintrag zur Verlaufsliste hinzugefügt wird.
- `reload`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufs-Eintrag ersetzt. Dieser neue Eintrag wird den gleichen [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) erhalten.
- `traverse`: Der Browser navigiert von einem vorhandenen Verlaufs-Eintrag zu einem anderen vorhandenen Verlaufs-Eintrag.

## Beispiele

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.navigationType);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
