---
title: "TextMetrics: hangingBaseline-Eigenschaft"
short-title: hangingBaseline
slug: Web/API/TextMetrics/hangingBaseline
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `hangingBaseline`-Eigenschaft der [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Schnittstelle ist ein `double`, das den Abstand von der horizontalen Linie, die durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft angegeben wird, zur hängenden Grundlinie des Linienkastens in CSS-Pixeln angibt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.hangingBaseline; // 6.078125;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
