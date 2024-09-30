---
title: "TextMetrics: emHeightDescent-Eigenschaft"
short-title: emHeightDescent
slug: Web/API/TextMetrics/emHeightDescent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `emHeightDescent`-Eigenschaft des [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Interfaces gibt die Entfernung von der durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angezeigten horizontalen Linie bis zum unteren Rand des _em_-Quadrats im Zeilenkasten in CSS-Pixeln zurück.

## Wert

Eine Zahl, in CSS-Pixeln.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.emHeightDescent; // -2.40234375;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
