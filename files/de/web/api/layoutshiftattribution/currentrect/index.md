---
title: "LayoutShiftAttribution: Eigenschaft currentRect"
short-title: currentRect
slug: Web/API/LayoutShiftAttribution/currentRect
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`currentRect`** schreibgeschützte Eigenschaft des {{domxref("LayoutShiftAttribution")}}-Interfaces gibt ein {{domxref("DOMRectReadOnly")}}-Objekt zurück, das die Position des Elements nach der Verschiebung darstellt.

## Wert

Ein {{domxref("DOMRectReadOnly")}}-Objekt.

## Beispiele

Das folgende Beispiel druckt `currentRect` des ersten Elements in {{domxref("LayoutShift.sources")}} in die Konsole.

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
