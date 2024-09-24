---
title: "TextMetrics: actualBoundingBoxAscent-Eigenschaft"
short-title: actualBoundingBoxAscent
slug: Web/API/TextMetrics/actualBoundingBoxAscent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`actualBoundingBoxAscent`**-Eigenschaft des {{domxref("TextMetrics")}}-Interfaces ist ein `double`, der den Abstand von der horizontalen Linie, die durch das {{domxref("CanvasRenderingContext2D.textBaseline")}}-Attribut angegeben wird, bis zum oberen Rand des Begrenzungsrechtecks, das zur Darstellung des Textes verwendet wird, in CSS-Pixeln angibt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // gibt ein TextMetrics-Objekt zurück

text.actualBoundingBoxAscent; // 8;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics")}}
