---
title: "NavigationTransition: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationTransition/navigationType
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`navigationType`** der [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Schnittstelle gibt den Typ der laufenden Navigation zurück.

## Wert

Ein enumerierter Wert, der den Typ der laufenden Navigation darstellt.

Die möglichen Werte sind:

- `push`: Es wird zu einem neuen Standort navigiert, was dazu führt, dass ein neuer Eintrag in die Verlaufs-Liste gepusht wird.
- `reload`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, ihm wird jedoch eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen.
- `traverse`: Der Browser navigiert von einem bestehenden Verlaufseintrag zu einem anderen bestehenden Verlaufseintrag.

## Beispiele

```js
console.log(navigation.transition.navigationType);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
