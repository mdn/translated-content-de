---
title: "TextMetrics: fontBoundingBoxAscent-Eigenschaft"
short-title: fontBoundingBoxAscent
slug: Web/API/TextMetrics/fontBoundingBoxAscent
l10n:
  sourceCommit: 58033f5e79bc5f78a339f8fa085878e1fc5ccac7
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `fontBoundingBoxAscent` des [`TextMetrics`](/de/docs/Web/API/TextMetrics) Schnittstelle gibt die Entfernung von der horizontalen Linie an, die durch das Attribut [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angezeigt wird, bis zur Oberseite des höchsten Begrenzungsrechtecks aller Schriften, die zum Rendern des Textes verwendet werden, in CSS-Pixeln zurück.

## Wert

Eine Zahl, in CSS-Pixeln.

## Beispiele

Der untenstehende Code zeigt, wie Sie die `fontBoundingBoxAscent` für einen Text in einer bestimmten Schriftart erhalten können.

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

Der Anstieg in CSS-Pixeln für den Text "Foo" in einer 25px-Serifenschrift wird unten gezeigt.

{{EmbedLiveSample('Examples', 100, 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent)
- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
