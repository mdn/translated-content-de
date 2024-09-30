---
title: "TextMetrics: actualBoundingBoxRight-Eigenschaft"
short-title: actualBoundingBoxRight
slug: Web/API/TextMetrics/actualBoundingBoxRight
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `actualBoundingBoxRight`-Eigenschaft des [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Interfaces ist ein `double`, das den Abstand parallel zur Grundlinie von dem vom [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign) angegebenen Ausrichtungspunkt zur rechten Seite des Begrenzungsrechtecks des angegebenen Textes in CSS-Pixeln angibt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.actualBoundingBoxRight; // 15.633333333333333;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
