---
title: "NavigationHistoryEntry: index-Eigenschaft"
short-title: index
slug: Web/API/NavigationHistoryEntry/index
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`index`**-Eigenschaft des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces gibt den Index des Verlaufseintrags in der Liste der Verlaufseinträge zurück (das ist die Liste, die von [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) zurückgegeben wird), oder `-1`, wenn der Eintrag nicht in der Liste erscheint oder wenn das aktuelle Dokument nicht vollständig aktiv ist.

## Wert

Eine Zahl, die den `index` des Eintrags in der Liste der Verlaufseinträge darstellt, oder `-1`, wenn dieses Element nicht in der Liste erscheint.

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
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
