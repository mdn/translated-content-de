---
title: "NavigationCurrentEntryChangeEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationCurrentEntryChangeEvent/navigationType
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die lese-only Eigenschaft **`navigationType`** des [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) Interfaces gibt den Typ der Navigation zurück, die zu der Änderung geführt hat. Die Eigenschaft kann `null` sein, wenn die Änderung durch [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) verursacht wird.

## Wert

Ein enumerierter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`: Eine neue Position wird navigiert, was dazu führt, dass ein neuer Eintrag in die Verlaufsliste eingefügt wird.
- `reload`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufs-Eintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem bestehenden Verlaufs-Eintrag zu einem anderen bestehenden Verlaufs-Eintrag.

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

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
