---
title: "NavigationTransition: from-Eigenschaft"
short-title: from
slug: Web/API/NavigationTransition/from
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`from`** schreibgeschützte Eigenschaft des {{domxref("NavigationTransition")}}-Interfaces gibt den {{domxref("NavigationHistoryEntry")}} zurück, von dem der Übergang kommt.

## Wert

Ein {{domxref("NavigationHistoryEntry")}}-Objekt.

## Beispiele

```js
console.log(navigation.transition.from);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
