---
title: "TextMetrics: Eigenschaft fontBoundingBoxDescent"
short-title: fontBoundingBoxDescent
slug: Web/API/TextMetrics/fontBoundingBoxDescent
l10n:
  sourceCommit: 58033f5e79bc5f78a339f8fa085878e1fc5ccac7
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `fontBoundingBoxDescent` der Schnittstelle [`TextMetrics`](/de/docs/Web/API/TextMetrics) gibt die Entfernung von der durch das Attribut [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zum unteren Rand des Begrenzungsrechtecks aller zum Rendern des Textes verwendeten Schriften zurück, in CSS-Pixeln.

## Wert

Eine Zahl in CSS-Pixeln.

## Beispiele

Der folgende Code zeigt, wie Sie das `fontBoundingBoxDescent` für Text in einer bestimmten Schriftart erhalten können.

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "25px serif";
const text = "Foo";

const textMetrics = ctx.measureText(text); // returns TextMetrics object
const descentCssPixels = textMetrics.fontBoundingBoxDescent;
```

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.getElementById("log");
log.innerText = `fontBoundingBoxDescent: ${descentCssPixels}`;
```

Der Abstieg in CSS-Pixeln für den Text "Foo" in einer 25px Serif-Schriftart wird unten gezeigt.

{{EmbedLiveSample('Examples', 100, 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent)
- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
