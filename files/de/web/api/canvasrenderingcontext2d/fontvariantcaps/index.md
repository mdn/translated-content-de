---
title: "CanvasRenderingContext2D: fontVariantCaps-Eigenschaft"
short-title: fontVariantCaps
slug: Web/API/CanvasRenderingContext2D/fontVariantCaps
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.fontVariantCaps`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) spezifiziert eine alternative Großschreibung des gerenderten Textes.

Dies entspricht der CSS-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/Reference/Properties/font-variant-caps).

## Wert

Der alternative Großschreibungswert der Schriftart, der einer der folgenden sein kann:

- `normal` (Standard)
  - : Deaktiviert die Verwendung alternativer Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von Kapitälchen (OpenType-Funktion: `smcp`).
    Kapitälchen-Glyphen verwenden typischerweise die Form von Großbuchstaben, sind jedoch auf die Größe von Kleinbuchstaben reduziert.
- `all-small-caps`
  - : Aktiviert die Anzeige von Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titulierungs-Großbuchstaben (OpenType-Funktion: `titl`).
    Glyphen für Großbuchstaben sind oft für die Verwendung mit Kleinbuchstaben entworfen.
    Wenn sie in komplett groß geschriebenen Titulierungssequenzen verwendet werden, können sie zu stark wirken.
    Titulierungs-Großbuchstaben sind speziell für diese Situation entworfen.

Die Eigenschaft kann verwendet werden, um den Schriftkapitalisierungswert zu erhalten oder zu setzen.

Beachten Sie, dass es Barrierefreiheitsbedenken bei einigen dieser gibt, die im entsprechenden Thema [`font-variant-caps`](/de/docs/Web/CSS/Reference/Properties/font-variant-caps#accessibility) dargelegt sind.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jeder der unterstützten Werte der Eigenschaft `fontVariantCaps` an.
Der Wert wird auch für jeden Fall durch Auslesen der Eigenschaft angezeigt.

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
