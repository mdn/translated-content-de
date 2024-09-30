---
title: "TextMetrics: Eigenschaft actualBoundingBoxDescent"
short-title: actualBoundingBoxDescent
slug: Web/API/TextMetrics/actualBoundingBoxDescent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `actualBoundingBoxDescent` der [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Schnittstelle ist ein `double`, das den Abstand von der durch das Attribut [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zum unteren Rand des Begrenzungsrechtecks, das zum Rendern des Textes verwendet wird, in CSS-Pixeln angibt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.actualBoundingBoxDescent; // 0;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
