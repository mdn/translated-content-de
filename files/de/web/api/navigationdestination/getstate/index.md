---
title: "NavigationDestination: getState() Methode"
short-title: getState()
slug: Web/API/NavigationDestination/getState
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`getState()`** Methode der [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) Schnittstelle liefert eine Kopie des vom Entwickler bereitgestellten Zustands zurück, der mit dem Ziel [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) oder einem Navigationsvorgang (z. B. [`navigate()`](/de/docs/Web/API/Navigation/navigate)) verknüpft ist.

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein Wert, der den Zustand darstellt. Dies kann jeder Typ sein.

Wenn kein Zustand definiert ist, wird `undefined` zurückgegeben.

### Ausnahmen

Keine.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.getState());
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Methoden, die es ermöglichen, den Zustand zu aktualisieren — [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry)
