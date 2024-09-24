---
title: "TextMetrics: Eigenschaft fontBoundingBoxDescent"
short-title: fontBoundingBoxDescent
slug: Web/API/TextMetrics/fontBoundingBoxDescent
l10n:
  sourceCommit: 58033f5e79bc5f78a339f8fa085878e1fc5ccac7
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `fontBoundingBoxDescent` der {{domxref("TextMetrics")}} Schnittstelle gibt die Entfernung von der durch das Attribut {{domxref("CanvasRenderingContext2D.textBaseline")}} angegebenen horizontalen Linie bis zur Unterseite des Begrenzungsrechtecks aller Schriften, die zur Darstellung des Textes verwendet werden, in CSS-Pixeln zurück.

## Wert

Eine Zahl, in CSS-Pixeln.

## Beispiele

Der folgende Code zeigt, wie Sie das `fontBoundingBoxDescent` für Text in einer bestimmten Schriftart ermitteln können.

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "25px serif";
const text = "Foo";

const textMetrics = ctx.measureText(text); // Gibt ein TextMetrics-Objekt zurück
const descentCssPixels = textMetrics.fontBoundingBoxDescent;
```

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.getElementById("log");
log.innerText = `fontBoundingBoxDescent: ${descentCssPixels}`;
```

Der Abstieg in CSS-Pixeln für den Text "Foo" in einer 25px Serifenschrift wird unten dargestellt.

{{EmbedLiveSample('Examples', 100, 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics.fontBoundingBoxAscent")}}
- {{domxref("TextMetrics")}}
