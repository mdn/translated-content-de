---
title: "TextMetrics: hangingBaseline-Eigenschaft"
short-title: hangingBaseline
slug: Web/API/TextMetrics/hangingBaseline
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `hangingBaseline`-Eigenschaft des {{domxref("TextMetrics")}}-Interfaces ist ein `double`, das den Abstand von der durch die {{domxref("CanvasRenderingContext2D.textBaseline")}}-Eigenschaft angegebenen horizontalen Linie bis zur hängenden Grundlinie des Linienkastens in CSS-Pixeln angibt.

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

- {{domxref("TextMetrics")}}
