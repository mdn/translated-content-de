---
title: "LayoutShift: sources-Eigenschaft"
short-title: sources
slug: Web/API/LayoutShift/sources
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte **`sources`**-Eigenschaft des [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Interfaces gibt ein Array von [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)-Objekten zurück, die auf die DOM-Elemente hinweisen, die sich während der Layoutverschiebung bewegt haben.

## Wert

Ein {{jsxref("Array")}} von [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)-Objekten. Dieses Array wird nicht mehr als fünf Quellen enthalten. Wenn mehr als fünf Elemente von der Layoutverschiebung betroffen sind, werden die fünf am stärksten betroffenen Elemente gemeldet.

## Beispiele

### Protokollierung von Layoutverschiebungsquellen

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

- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)
