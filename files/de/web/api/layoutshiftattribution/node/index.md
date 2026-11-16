---
title: "LayoutShiftAttribution: node-Eigenschaft"
short-title: node
slug: Web/API/LayoutShiftAttribution/node
l10n:
  sourceCommit: 725499d8bb2e0903334b8ab936818042757cc852
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`node`** der Schnittstelle [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution) gibt einen [`Node`](/de/docs/Web/API/Node) zurück, der das verschobene Objekt repräsentiert.

## Wert

Ein [`Node`](/de/docs/Web/API/Node).

## Beispiele

Das folgende Beispiel gibt den `node` des ersten Eintrags in [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) in der Konsole aus.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources && sources.length > 0) {
      console.log(sources[0].node);
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
