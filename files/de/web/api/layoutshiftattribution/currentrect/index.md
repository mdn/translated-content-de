---
title: "LayoutShiftAttribution: currentRect-Eigenschaft"
short-title: currentRect
slug: Web/API/LayoutShiftAttribution/currentRect
l10n:
  sourceCommit: 725499d8bb2e0903334b8ab936818042757cc852
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`currentRect`** der Schnittstelle [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution) gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt zurück, das die Position des Elements nach der Verschiebung beschreibt.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt.

## Beispiele

Das folgende Beispiel gibt den `currentRect`-Wert des ersten Eintrags in [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) auf der Konsole aus.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources && sources.length > 0) {
      console.log(sources[0].currentRect);
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
