---
title: "CanvasRenderingContext2D: fontVariantCaps-Eigenschaft"
short-title: fontVariantCaps
slug: Web/API/CanvasRenderingContext2D/fontVariantCaps
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fontVariantCaps`**-Eigenschaft der [Canvas-API](/de/docs/Web/API/Canvas_API) gibt eine alternative Großschreibung des gerenderten Textes an.

Dies entspricht der CSS-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps).

## Wert

Der alternative Großbuchstabenwert, einer von:

- `normal` (Standard)
  - : Deaktiviert die Verwendung alternativer Glyphen.
- `small-caps`
  - : Ermöglicht die Anzeige von Kapitälchen (OpenType-Funktion: `smcp`).
    Kapitälchenglyphen verwenden typischerweise die Form von Großbuchstaben, sind aber auf die Größe von Kleinbuchstaben reduziert.
- `all-small-caps`
  - : Ermöglicht die Anzeige von Kapitälchen sowohl für große als auch kleine Buchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Ermöglicht die Anzeige von kleinen Kapitälchen (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Ermöglicht die Anzeige von kleinen Kapitälchen sowohl für große als auch kleine Buchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Ermöglicht die Anzeige einer Mischung aus kleinen Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Ermöglicht die Anzeige von Titel-Großbuchstaben (OpenType-Funktion: `titl`).
    Großbuchstabenglyphen sind oft für die Verwendung mit Kleinbuchstaben entworfen.
    Wenn sie in allen Großbuchstaben-Titelsequenzen verwendet werden, können sie zu stark wirken.
    Titel-Großbuchstaben sind speziell für diese Situation konzipiert.

Die Eigenschaft kann verwendet werden, um den Großbuchstabenwert zu erhalten oder festzulegen.

Beachten Sie, dass es mit einigen dieser Werte Zugänglichkeitsbedenken gibt, die im entsprechenden Thema [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps#accessibility) beschrieben sind.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" mit jedem der unterstützten Werte der `fontVariantCaps`-Eigenschaft an.
Der Wert wird auch für jeden Fall angezeigt, indem die Eigenschaft gelesen wird.

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
