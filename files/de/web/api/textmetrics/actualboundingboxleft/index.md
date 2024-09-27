---
title: "TextMetrics: Eigenschaft actualBoundingBoxLeft"
short-title: actualBoundingBoxLeft
slug: Web/API/TextMetrics/actualBoundingBoxLeft
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `actualBoundingBoxLeft` des [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Interfaces ist ein `double`, das die Entfernung parallel zur Grundlinie vom Ausrichtungspunkt, der durch die [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)-Eigenschaft gegeben ist, zur linken Seite des Begrenzungsrechtecks des angegebenen Textes in CSS-Pixeln angibt; positive Zahlen geben eine Entfernung nach links vom gegebenen Ausrichtungspunkt aus an.

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
