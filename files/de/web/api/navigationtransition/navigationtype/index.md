---
title: "NavigationTransition: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationTransition/navigationType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`navigationType`**-Eigenschaft des [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Interfaces gibt den Typ der laufenden Navigation zurück.

## Wert

Ein enumerierter Wert, der den Typ der laufenden Navigation darstellt.

Die möglichen Werte sind:

- `push`: Ein neuer Ort wird navigiert, wodurch ein neuer Eintrag in die Verlaufsliste eingefügt wird.
- `reload`: Die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem bestehenden Verlaufs-Eintrag zu einem anderen bestehenden Verlaufs-Eintrag.

## Beispiele

```js
console.log(navigation.transition.navigationType);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
