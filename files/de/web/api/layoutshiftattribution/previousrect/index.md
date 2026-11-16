---
title: "LayoutShiftAttribution: previousRect-Eigenschaft"
short-title: previousRect
slug: Web/API/LayoutShiftAttribution/previousRect
l10n:
  sourceCommit: 725499d8bb2e0903334b8ab936818042757cc852
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`previousRect`** der Schnittstelle [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution) gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt zurück, das die Position des Elements vor der Verschiebung angibt.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt.

## Beispiele

Das folgende Beispiel gibt `previousRect` des ersten Eintrags in [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) auf der Konsole aus.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources && sources.length > 0) {
      console.log(sources[0].previousRect);
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
