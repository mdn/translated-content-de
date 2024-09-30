---
title: "LayoutShiftAttribution: currentRect-Eigenschaft"
short-title: currentRect
slug: Web/API/LayoutShiftAttribution/currentRect
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`currentRect`** der Schnittstelle [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution) gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt zurück, das die Position des Elements nach der Verschiebung darstellt.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt.

## Beispiele

Das folgende Beispiel gibt die `currentRect` des ersten Elements in [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) in der Konsole aus.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources) {
      console.log(sources[0].currentRect);
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
