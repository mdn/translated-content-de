---
title: "TextMetrics: actualBoundingBoxLeft-Eigenschaft"
short-title: actualBoundingBoxLeft
slug: Web/API/TextMetrics/actualBoundingBoxLeft
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `actualBoundingBoxLeft`-Eigenschaft des [`TextMetrics`](/de/docs/Web/API/TextMetrics) Interfaces ist ein `double`, das den Abstand parallel zur Basislinie vom durch die [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign) Eigenschaft angegebenen Ausrichtungspunkt zur linken Seite des Begrenzungsrechtecks des angegebenen Texts in CSS-Pixeln angibt; positive Zahlen zeigen einen Abstand nach links vom angegebenen Ausrichtungspunkt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.actualBoundingBoxLeft; // 0;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
