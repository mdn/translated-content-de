---
title: "TextMetrics: emHeightDescent-Eigenschaft"
short-title: emHeightDescent
slug: Web/API/TextMetrics/emHeightDescent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `emHeightDescent`-Eigenschaft des {{domxref("TextMetrics")}}-Interfaces gibt den Abstand von der horizontalen Linie, die durch die {{domxref("CanvasRenderingContext2D.textBaseline")}}-Eigenschaft angegeben wird, bis zum unteren Rand des _em_-Quadrats in der Zeilenbox in CSS-Pixeln zurück.

## Wert

Eine Zahl, in CSS-Pixeln.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // gibt ein TextMetrics-Objekt zurück

text.emHeightDescent; // -2.40234375;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics")}}
