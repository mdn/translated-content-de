---
title: "LayoutShift: Eigenschaft sources"
short-title: sources
slug: Web/API/LayoutShift/sources
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`sources`** schreibgeschützte Eigenschaft des {{domxref("LayoutShift")}}-Interfaces gibt ein Array von {{domxref("LayoutShiftAttribution")}}-Objekten zurück, die die DOM-Elemente anzeigen, die sich während der Layoutverschiebung bewegt haben.

## Wert

Ein {{jsxref("Array")}} von {{domxref("LayoutShiftAttribution")}}-Objekten. Dieses Array enthält nicht mehr als fünf Quellen. Wenn mehr als fünf Elemente von der Layoutverschiebung betroffen sind, werden die fünf beeinflussendsten Elemente gemeldet.

## Beispiele

### Protokollieren von Layoutverschiebungsquellen

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.sources.forEach((source) => {
      console.log(source);
    });
  });
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("LayoutShiftAttribution")}}
