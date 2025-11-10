---
title: "NavigationDestination: Index-Eigenschaft"
short-title: index
slug: Web/API/NavigationDestination/index
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`index`**-Schreibgeschützte Eigenschaft des [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Interfaces gibt den [`index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder `-1` andernfalls.

## Wert

Eine Zahl, die den `index` des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) darstellt, oder -1.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.index);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
