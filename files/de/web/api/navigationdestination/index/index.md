---
title: "NavigationDestination: index-Eigenschaft"
short-title: index
slug: Web/API/NavigationDestination/index
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`index`**-Schreibgeschützte Eigenschaft der [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Schnittstelle gibt den [`index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder `-1` sonst.

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

- [Modernes Client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
