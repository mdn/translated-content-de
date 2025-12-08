---
title: "NavigationTransition: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationTransition/navigationType
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`navigationType`**-Eigenschaft der [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Schnittstelle gibt den Typ der laufenden Navigation zurück.

## Wert

Ein aufgezählter Wert, der den Typ der laufenden Navigation darstellt.

Die möglichen Werte sind:

- `push`: Es wird zu einem neuen Ort navigiert, wodurch ein neuer Eintrag in die Historienliste hinzugefügt wird.
- `reload`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Historieneintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem vorhandenen Historieneintrag zu einem anderen vorhandenen Historieneintrag.

## Beispiele

```js
console.log(navigation.transition.navigationType);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
