---
title: "TextMetrics: Eigenschaft actualBoundingBoxLeft"
short-title: actualBoundingBoxLeft
slug: Web/API/TextMetrics/actualBoundingBoxLeft
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `actualBoundingBoxLeft` der {{domxref("TextMetrics")}}-Schnittstelle ist ein `double`, das den Abstand parallel zur Basislinie vom durch die {{domxref("CanvasRenderingContext2D.textAlign")}}-Eigenschaft angegebenen Ausrichtungspunkt zur linken Seite des Begrenzungsrechtecks des angegebenen Textes in CSS-Pixeln angibt. Positive Zahlen zeigen einen Abstand nach links vom gegebenen Ausrichtungspunkt an.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // gibt ein TextMetrics-Objekt zurück

text.actualBoundingBoxLeft; // 0;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics")}}
