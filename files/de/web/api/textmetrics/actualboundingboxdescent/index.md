---
title: "TextMetrics: Eigenschaft actualBoundingBoxDescent"
short-title: actualBoundingBoxDescent
slug: Web/API/TextMetrics/actualBoundingBoxDescent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `actualBoundingBoxDescent` der {{domxref("TextMetrics")}} Schnittstelle ist ein `double`, der den Abstand von der horizontalen Linie, die durch das Attribut {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zum unteren Rand des Begrenzungsrechtecks angibt, das zum Rendern des Textes verwendet wird, in CSS-Pixeln.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // gibt ein TextMetrics-Objekt zurück

text.actualBoundingBoxDescent; // 0;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics")}}
