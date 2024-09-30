---
title: "NavigationHistoryEntry: index-Eigenschaft"
short-title: index
slug: Web/API/NavigationHistoryEntry/index
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`index`**-Schreibgeschützte Eigenschaft des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces gibt den Index des Verlaufs-Eintrags in der Liste der Verlaufs-Einträge zurück (d.h. die Liste, die von [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) zurückgegeben wird), oder `-1`, wenn der Eintrag nicht in der Liste erscheint oder wenn das aktuelle Dokument nicht vollständig aktiv ist.

## Wert

Eine Zahl, die den `index` des Eintrags in der Liste der Verlaufs-Einträge darstellt, oder `-1`, wenn dieses Element nicht in der Liste erscheint.

## Beispiele

```js
const current = navigation.currentEntry;
console.log(current.index);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
