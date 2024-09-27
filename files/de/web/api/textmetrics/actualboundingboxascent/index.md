---
title: "TextMetrics: actualBoundingBoxAscent-Eigenschaft"
short-title: actualBoundingBoxAscent
slug: Web/API/TextMetrics/actualBoundingBoxAscent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`actualBoundingBoxAscent`**-Eigenschaft des [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Interfaces ist ein `double`, der den Abstand von der durch das [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Attribut angegebenen horizontalen Linie bis zur Oberseite des Begrenzungsrechtecks angibt, das zum Rendern des Textes verwendet wird, in CSS-Pixel.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.actualBoundingBoxAscent; // 8;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
