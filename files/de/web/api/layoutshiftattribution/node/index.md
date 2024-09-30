---
title: "LayoutShiftAttribution: node-Eigenschaft"
short-title: node
slug: Web/API/LayoutShiftAttribution/node
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`node`**-Eigenschaft des [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)-Interfaces gibt ein [`Node`](/de/docs/Web/API/Node)-Objekt zurück, das das verschobene Objekt darstellt.

## Wert

Ein [`Node`](/de/docs/Web/API/Node).

## Beispiele

Im folgenden Beispiel wird das `node` des ersten Elements in [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) in die Konsole ausgegeben.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources) {
      console.log(sources[0].node);
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
