---
title: "NavigationCurrentEntryChangeEvent: from-Eigenschaft"
short-title: from
slug: Web/API/NavigationCurrentEntryChangeEvent/from
l10n:
  sourceCommit: df3316c2c702c57514bfd8daba389765464ea653
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`from`** schreibgeschützte Eigenschaft des {{domxref("NavigationCurrentEntryChangeEvent")}} Schnittstelle gibt das {{domxref("NavigationHistoryEntry")}} zurück, von dem die Navigation ausging.

## Wert

Ein {{domxref("NavigationHistoryEntry")}} Objekt.

## Beispiele

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.from);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
