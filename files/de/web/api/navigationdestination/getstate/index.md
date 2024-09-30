---
title: "NavigationDestination: getState()-Methode"
short-title: getState()
slug: Web/API/NavigationDestination/getState
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`getState()`**-Methode der [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Schnittstelle gibt einen Klon des vom Entwickler bereitgestellten Zustands zurück, der mit dem Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) oder dem Navigationsvorgang (z. B. [`navigate()`](/de/docs/Web/API/Navigation/navigate)) verbunden ist.

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die es ermöglichen, den Zustand zu aktualisieren — [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry)
