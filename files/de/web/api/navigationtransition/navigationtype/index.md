---
title: "NavigationTransition: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationTransition/navigationType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`navigationType`** der [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Schnittstelle gibt den Typ der laufenden Navigation zurück.

## Wert

Ein enumerierter Wert, der den Typ der laufenden Navigation darstellt.

Die möglichen Werte sind:

- `push`: Es wird zu einem neuen Ort navigiert, wodurch ein neuer Eintrag zur History-Liste hinzugefügt wird.
- `reload`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, jedoch eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem vorhandenen Verlaufs­eintrag zu einem anderen vorhandenen Verlaufs­eintrag.

## Beispiele

```js
console.log(navigation.transition.navigationType);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routennavigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
