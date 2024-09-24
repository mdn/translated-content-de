---
title: "TextMetrics: Eigenschaft emHeightAscent"
short-title: emHeightAscent
slug: Web/API/TextMetrics/emHeightAscent
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `emHeightAscent` des {{domxref("TextMetrics")}}-Interfaces gibt die Entfernung von der horizontalen Linie, die durch die {{domxref("CanvasRenderingContext2D.textBaseline")}}-Eigenschaft angegeben wird, zur Oberseite des _em_-Quadrats im Linienkasten, in CSS-Pixeln, zurück.

## Wert

Eine Zahl, in CSS-Pixeln.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // gibt ein TextMetrics-Objekt zurück

text.emHeightAscent; // 7.59765625;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics")}}
