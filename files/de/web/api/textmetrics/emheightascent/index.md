---
title: "TextMetrics: emHeightAscent-Eigenschaft"
short-title: emHeightAscent
slug: Web/API/TextMetrics/emHeightAscent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `emHeightAscent`-Eigenschaft der [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Schnittstelle gibt die Entfernung von der horizontalen Linie, die durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft angegeben wird, bis zur Oberseite des _em_-Quadrats im Zeilenfeld in CSS-Pixel an.

## Wert

Eine Zahl, in CSS-Pixeln.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.emHeightAscent; // 7.59765625;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
