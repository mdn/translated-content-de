---
title: "TextMetrics: Eigenschaft ideographicBaseline"
short-title: ideographicBaseline
slug: Web/API/TextMetrics/ideographicBaseline
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `ideographicBaseline` des [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Interfaces ist ein `double`, das den Abstand von der durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft angegebenen horizontalen Linie zur ideographischen Grundlinie der Linienbox in CSS-Pixeln angibt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.ideographicBaseline; // -1.201171875;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
