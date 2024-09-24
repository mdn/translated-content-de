---
title: "NavigationDestination: getState()-Methode"
short-title: getState()
slug: Web/API/NavigationDestination/getState
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`getState()`**-Methode der {{domxref("NavigationDestination")}}-Schnittstelle gibt eine Kopie des vom Entwickler bereitgestellten Zustands zurück, der mit dem Ziel-{{domxref("NavigationHistoryEntry")}} oder dem Navigationsvorgang (z.B. {{domxref("Navigation.navigate()", "navigate()")}}) verknüpft ist.

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein Wert, der den Zustand darstellt. Dieser kann jeden Typ haben.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Moderne client-seitige Routenplanung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung zur Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die es erlauben, den Zustand zu aktualisieren — {{domxref("Navigation.navigate()")}}, {{domxref("Navigation.reload()")}} und {{domxref("Navigation.updateCurrentEntry()")}}
