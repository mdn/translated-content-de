---
title: "CanvasRenderingContext2D: fontVariantCaps-Eigenschaft"
short-title: fontVariantCaps
slug: Web/API/CanvasRenderingContext2D/fontVariantCaps
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fontVariantCaps`**-Eigenschaft der [Canvas-API](/de/docs/Web/API/Canvas_API) legt eine alternative Großschreibung des gerenderten Textes fest.

Dies entspricht der CSS-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps).

## Wert

Der Font-Wert für alternative Großschreibung, der einer der folgenden ist:

- `normal` (Standard)
  - : Deaktiviert die Verwendung von alternativen Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von Kapitälchen (OpenType-Feature: `smcp`).
    Kapitälchenglyphen verwenden typischerweise die Form von Großbuchstaben, sind jedoch auf die Größe von Kleinbuchstaben reduziert.
- `all-small-caps`
  - : Aktiviert die Anzeige von Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Features: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen (OpenType-Feature: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Features: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Feature: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titelschrift-Kapitälchen (OpenType-Feature: `titl`).
    Großbuchstabenglyphen sind oft für die Verwendung mit Kleinbuchstaben gestaltet.
    Wenn sie in komplett großgeschriebenen Titelabfolgen verwendet werden, können sie zu stark wirken.
    Titelschrift-Kapitälchen sind speziell für diese Situation konzipiert.

Die Eigenschaft kann verwendet werden, um den Wert der Font-Großschreibung zu erhalten oder festzulegen.

Beachten Sie, dass es bei einigen dieser Werte Zugänglichkeitsbedenken gibt, die im entsprechenden Thema [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps#accessibility) erläutert werden.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jedes der unterstützten Werte der Eigenschaft `fontVariantCaps`.
Der Wert wird auch für jeden Fall angezeigt, indem die Eigenschaft ausgelesen wird.

### HTML

```html
<canvas id="canvas" width="700" height="220"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px serif";

// Standard (normal)
ctx.fillText(`Hello world (default: ${ctx.fontVariantCaps})`, 5, 20);

// Großschreibung: small-caps
ctx.fontVariantCaps = "small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 50);

// Großschreibung: all-small-caps
ctx.fontVariantCaps = "all-small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 80);

// Großschreibung: petite-caps
ctx.fontVariantCaps = "petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 110);

// Großschreibung: all-petite-caps
ctx.fontVariantCaps = "all-petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 140);

// Großschreibung: unicase
ctx.fontVariantCaps = "unicase";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 170);

// Großschreibung: titling-caps
ctx.fontVariantCaps = "titling-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 200);
```

### Ergebnis

{{ EmbedLiveSample('Examples', 700, 230) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
