---
title: "NavigationDestination: index-Eigenschaft"
short-title: index
slug: Web/API/NavigationDestination/index
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`index`**-Eigenschaft des {{domxref("NavigationDestination")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die den {{domxref("NavigationHistoryEntry.index", "index-Wert")}} des Ziel-{{domxref("NavigationHistoryEntry")}} zurückgibt, wenn der {{domxref("NavigateEvent.navigationType")}} `traverse` ist, oder anderweitig `-1`.

## Wert

Eine Zahl, die den `index` des Ziel-{{domxref("NavigationHistoryEntry")}} darstellt, oder -1.

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
- Domenic Denicola's [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
