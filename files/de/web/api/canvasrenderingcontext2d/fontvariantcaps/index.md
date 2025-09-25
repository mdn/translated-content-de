---
title: "CanvasRenderingContext2D: fontVariantCaps-Eigenschaft"
short-title: fontVariantCaps
slug: Web/API/CanvasRenderingContext2D/fontVariantCaps
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.fontVariantCaps`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt eine alternative Großschreibung des gerenderten Textes an.

Dies entspricht der CSS-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps).

## Wert

Der alternative Großschreibungswert der Schriftart, der einer der folgenden sein kann:

- `normal` (Standard)
  - : Deaktiviert die Verwendung von alternativen Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von Kapitälchen (OpenType-Feature: `smcp`).
    Kapitälchen-Glyphen verwenden typischerweise die Form von Großbuchstaben, sind jedoch auf die Größe von Kleinbuchstaben reduziert.
- `all-small-caps`
  - : Aktiviert die Anzeige von Kapitälchen sowohl für Groß- als auch für Kleinbuchstaben (OpenType-Features: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen (OpenType-Feature: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen sowohl für Groß- als auch Kleinbuchstaben (OpenType-Features: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung von kleinen Großbuchstaben für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Feature: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titelgroßbuchstaben (OpenType-Feature: `titl`).
    Großbuchstabenglyphen werden häufig für die Verwendung mit Kleinbuchstaben entworfen.
    Wenn sie in komplett großgeschriebenen Titelsequenzen verwendet werden, können sie zu stark erscheinen.
    Titelgroßbuchstaben sind speziell für diese Situation gestaltet.

Die Eigenschaft kann verwendet werden, um den Großschreibungswert der Schriftart abzurufen oder festzulegen.

Beachten Sie, dass es Zugänglichkeitsbedenken bei einigen dieser Optionen gibt, die im entsprechenden Thema [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps#accessibility) erläutert werden.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jedes der unterstützten Werte der `fontVariantCaps`-Eigenschaft an.
Der Wert wird auch bei jedem Fall durch das Auslesen der Eigenschaft angezeigt.

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
