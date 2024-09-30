---
title: "CanvasRenderingContext2D: fontVariantCaps-Eigenschaft"
short-title: fontVariantCaps
slug: Web/API/CanvasRenderingContext2D/fontVariantCaps
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fontVariantCaps`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt eine alternative Kapitalkapitalisierung des gerenderten Textes an.

Dies entspricht der CSS-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps).

## Wert

Der alternative Kapitalkapitalisierungswert der Schrift, einer der folgenden:

- `normal` (Standard)
  - : Deaktiviert die Verwendung alternativer Glyphen.
- `small-caps`
  - : Ermöglicht die Darstellung von Kapitälchen (OpenType-Funktion: `smcp`).
    Kapitälchen-Glyphen verwenden typischerweise die Form von Großbuchstaben, sind jedoch auf die Größe von Kleinbuchstaben reduziert.
- `all-small-caps`
  - : Ermöglicht die Darstellung von Kapitälchen sowohl für Groß- als auch für Kleinbuchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Ermöglicht die Darstellung von Petit-Großbuchstaben (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Ermöglicht die Darstellung von Petit-Großbuchstaben sowohl für Groß- als auch für Kleinbuchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Ermöglicht die Darstellung einer Mischung aus Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Ermöglicht die Darstellung von Titelkapitälchen (OpenType-Funktion: `titl`).
    Großbuchstabenglyphen sind oft für die Verwendung mit Kleinbuchstaben ausgelegt.
    Wenn sie in vollständig großgeschriebenen Titelzeilen verwendet werden, können sie zu stark wirken.
    Titelkapitälchen sind speziell für diese Situation konzipiert.

Die Eigenschaft kann verwendet werden, um den Kapitalkapitalisierungswert der Schrift abzurufen oder festzulegen.

Beachten Sie, dass es bei einigen dieser Varianten Barrierefreiheitsbedenken gibt, die im entsprechenden Thema [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps#accessibility) beschrieben sind.

## Beispiele

In diesem Beispiel zeigen wir den Text „Hello World“ unter Verwendung jedes der unterstützten Werte der `fontVariantCaps`-Eigenschaft an.
Der Wert wird auch in jedem Fall angezeigt, indem die Eigenschaft gelesen wird.

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
