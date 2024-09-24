---
title: "LayoutShiftAttribution: toJSON() Methode"
short-title: toJSON()
slug: Web/API/LayoutShiftAttribution/toJSON
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`** Methode der {{domxref("LayoutShiftAttribution")}} Schnittstelle ist ein _Serializer_, der eine JSON-Darstellung des `LayoutShiftAttribution` Objekts zurückgibt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des {{domxref("LayoutShiftAttribution")}} Objekts darstellt.

## Beispiele

Das folgende Beispiel druckt eine JSON-Darstellung des ersten Elements in {{domxref("LayoutShift.sources")}} in die Konsole.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources) {
      console.log(sources[0].toJSON());
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
