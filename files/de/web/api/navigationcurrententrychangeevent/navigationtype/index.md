---
title: "NavigationCurrentEntryChangeEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationCurrentEntryChangeEvent/navigationType
l10n:
  sourceCommit: df3316c2c702c57514bfd8daba389765464ea653
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`navigationType`**-Eigenschaft des [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent)-Interfaces gibt den Typ der Navigation zurück, die zu der Änderung geführt hat. Die Eigenschaft kann `null` sein, wenn die Änderung durch [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) erfolgt.

## Wert

Ein enumerierter Wert, der den Navigationstyp darstellt.

Die möglichen Werte sind:

- `push`: Es wird zu einem neuen Ort navigiert, wodurch ein neuer Eintrag in die Verlaufsliste eingefügt wird.
- `reload`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem bestehenden Verlaufseintrag zu einem anderen bestehenden Verlaufseintrag.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
