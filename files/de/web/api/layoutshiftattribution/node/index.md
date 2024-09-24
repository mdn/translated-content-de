---
title: "LayoutShiftAttribution: node-Eigenschaft"
short-title: node
slug: Web/API/LayoutShiftAttribution/node
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`node`**-Eigenschaft der {{domxref("LayoutShiftAttribution")}}-Schnittstelle gibt einen {{domxref("Node")}} zurück, der das Objekt darstellt, das sich verschoben hat.

## Wert

Ein {{domxref("Node")}}.

## Beispiele

Das folgende Beispiel druckt das `node` des ersten Elements in {{domxref("LayoutShift.sources")}} in die Konsole.

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

## Kompatibilität mit Browsern

{{Compat}}
