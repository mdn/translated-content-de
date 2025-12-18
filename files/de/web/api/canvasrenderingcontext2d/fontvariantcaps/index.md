---
title: "CanvasRenderingContext2D: fontVariantCaps-Eigenschaft"
short-title: fontVariantCaps
slug: Web/API/CanvasRenderingContext2D/fontVariantCaps
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.fontVariantCaps`**-Eigenschaft der [Canvas-API](/de/docs/Web/API/Canvas_API) spezifiziert eine alternative Großschreibung des gerenderten Textes.

Dies entspricht der CSS-{{cssxref("font-variant-caps")}}-Eigenschaft.

## Wert

Der Wert der alternativen Großschreibung der Schrift, der einer der folgenden ist:

- `normal` (Standard)
  - : Deaktiviert die Verwendung alternativer Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von Kapitälchen (OpenType-Funktion: `smcp`).
    Kapitälchen-Glyphen verwenden typischerweise die Form von Großbuchstaben, sind jedoch auf die Größe von Kleinbuchstaben reduziert.
- `all-small-caps`
  - : Aktiviert die Anzeige von Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von Petiten-Kapitälchen (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von Petiten-Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titelkapitälchen (OpenType-Funktion: `titl`).
    Großbuchstabendesigns sind oft für die Verwendung mit Kleinbuchstaben konzipiert.
    Wenn sie in rein großgeschriebenen Titelzeilen verwendet werden, können sie zu dominant wirken.
    Titelkapitälchen sind speziell für diese Situation entwickelt.

Die Eigenschaft kann verwendet werden, um den Wert der Schrift-Großschreibung zu erhalten oder zu setzen.

Beachten Sie, dass es hinsichtlich Barrierefreiheit bei einigen davon Bedenken gibt, die im entsprechenden Thema [`font-variant-caps`](/de/docs/Web/CSS/Reference/Properties/font-variant-caps#accessibility) dargelegt sind.

## Beispiele

In diesem Beispiel wird der Text "Hello World" unter Verwendung jedes der unterstützten Werte der `fontVariantCaps`-Eigenschaft angezeigt.
Der Wert wird für jeden Fall auch durch das Lesen der Eigenschaft angezeigt.

### HTML

```html
<canvas id="canvas" width="700" height="220"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px serif";

// Default (normal)
ctx.fillText(`Hello world (default: ${ctx.fontVariantCaps})`, 5, 20);

// Capitalization: small-caps
ctx.fontVariantCaps = "small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 50);

// Capitalization: all-small-caps
ctx.fontVariantCaps = "all-small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 80);

// Capitalization: petite-caps
ctx.fontVariantCaps = "petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 110);

// Capitalization: all-petite-caps
ctx.fontVariantCaps = "all-petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 140);

// Capitalization: unicase
ctx.fontVariantCaps = "unicase";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 170);

// Capitalization: titling-caps
ctx.fontVariantCaps = "titling-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 200);
```

### Ergebnis

{{ EmbedLiveSample('Examples', 700, 230) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
