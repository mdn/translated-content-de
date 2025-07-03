---
title: "NavigationDestination: getState() Methode"
short-title: getState()
slug: Web/API/NavigationDestination/getState
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`getState()`** Methode des [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) Interface gibt eine Kopie des vom Entwickler bereitgestellten Zustands zurück, der mit dem Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) oder der Navigationsoperation (z. B. [`navigate()`](/de/docs/Web/API/Navigation/navigate)) verknüpft ist, je nach Fall.

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

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Methoden, die es erlauben, den Zustand zu aktualisieren — [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry)
