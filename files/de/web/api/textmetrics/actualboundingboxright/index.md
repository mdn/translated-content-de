---
title: "TextMetrics: Eigenschaft actualBoundingBoxRight"
short-title: actualBoundingBoxRight
slug: Web/API/TextMetrics/actualBoundingBoxRight
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `actualBoundingBoxRight` des {{domxref("TextMetrics")}}-Interfaces ist ein `double`, der die Entfernung parallel zur Grundlinie vom durch die {{domxref("CanvasRenderingContext2D.textAlign")}}-Eigenschaft angegebenen Ausrichtungspunkt zur rechten Seite des Begrenzungsrechtecks des angegebenen Textes in CSS-Pixeln angibt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // gibt ein TextMetrics-Objekt zurück

text.actualBoundingBoxRight; // 15.633333333333333;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics")}}
