---
title: "NavigationDestination: getState()-Methode"
short-title: getState()
slug: Web/API/NavigationDestination/getState
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`getState()`**-Methode des [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Interfaces gibt eine Kopie des vom Entwickler bereitgestellten Zustands zurück, der mit dem Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) oder einem Navigationsvorgang (z.B. [`navigate()`](/de/docs/Web/API/Navigation/navigate)) verknüpft ist, wie es angemessen ist.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die es erlauben, den Zustand zu aktualisieren — [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry)
