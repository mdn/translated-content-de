---
title: "LayoutShiftAttribution: previousRect-Eigenschaft"
short-title: previousRect
slug: Web/API/LayoutShiftAttribution/previousRect
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`previousRect`**-Eigenschaft der {{domxref("LayoutShiftAttribution")}}-Schnittstelle gibt ein {{domxref("DOMRectReadOnly")}}-Objekt zurück, das die Position des Elements vor der Verschiebung darstellt.

## Wert

Ein {{domxref("DOMRectReadOnly")}}-Objekt.

## Beispiele

Das folgende Beispiel gibt das `previousRect` des ersten Elements in {{domxref("LayoutShift.sources")}} in der Konsole aus.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources) {
      console.log(sources[0].previousRect);
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
