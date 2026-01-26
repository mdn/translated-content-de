---
title: "NavigationDestination: index-Eigenschaft"
short-title: index
slug: Web/API/NavigationDestination/index
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`index`**-Eigenschaft des [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Interfaces, welches schreibgeschützt ist, gibt den [`index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn das [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder `-1` andernfalls.

## Wert

Eine Zahl, die den `index` des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) darstellt oder -1.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erklärung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
