---
title: "TextMetrics: fontBoundingBoxAscent Eigenschaft"
short-title: fontBoundingBoxAscent
slug: Web/API/TextMetrics/fontBoundingBoxAscent
l10n:
  sourceCommit: 58033f5e79bc5f78a339f8fa085878e1fc5ccac7
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `fontBoundingBoxAscent` der {{domxref("TextMetrics")}} Schnittstelle gibt die Entfernung von der horizontalen Linie, die durch das {{domxref("CanvasRenderingContext2D.textBaseline")}} Attribut angezeigt wird, bis zur Oberseite des höchsten Begrenzungsrechtecks aller Schriftarten zurück, die zum Rendern des Textes verwendet werden, in CSS-Pixeln.

## Wert

Eine Zahl, in CSS-Pixeln.

## Beispiele

Der folgende Code zeigt, wie Sie das `fontBoundingBoxAscent` für einen Text in einer bestimmten Schriftart erhalten können.

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "25px serif";
const text = "Foo";

const textMetrics = ctx.measureText(text); // returns TextMetrics object
const ascentCssPixels = textMetrics.fontBoundingBoxAscent;
```

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.getElementById("log");
log.innerText = `fontBoundingBoxAscent: ${ascentCssPixels}`;
```

Der Anstieg in CSS-Pixeln für den Text "Foo" in einer 25px-Serifenschrift wird unten angezeigt.

{{EmbedLiveSample('Examples', 100, 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics.fontBoundingBoxDescent")}}
- {{domxref("TextMetrics")}}
