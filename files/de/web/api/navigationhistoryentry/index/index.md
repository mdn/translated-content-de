---
title: "NavigationHistoryEntry: index-Eigenschaft"
short-title: index
slug: Web/API/NavigationHistoryEntry/index
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`index`**-Eigenschaft der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle gibt den Index des Verlaufseintrags in der Verlaufseintragsliste zurück (also die Liste, die von [`Navigation.entries()`](/de/docs/Web/API/Navigation/entries) zurückgegeben wird), oder `-1`, wenn der Eintrag nicht in der Liste erscheint oder das aktuelle Dokument nicht vollständig aktiv ist.

## Wert

Eine Zahl, die den `index` des Eintrags in der Verlaufseintragsliste darstellt, oder `-1`, wenn dieses Element nicht in der Liste erscheint.

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

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
