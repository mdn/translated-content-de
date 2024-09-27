---
title: "TextMetrics: alphabeticBaseline-Eigenschaft"
short-title: alphabeticBaseline
slug: Web/API/TextMetrics/alphabeticBaseline
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `alphabeticBaseline`-Eigenschaft des [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Interfaces ist ein `double`, das die Entfernung von der durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft angegebenen horizontalen Linie zur alphabetischen Basislinie der Zeilenbox in CSS-Pixeln angibt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.alphabeticBaseline; // -0;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
