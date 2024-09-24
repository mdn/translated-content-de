---
title: "CanvasRenderingContext2D: rect() Methode"
short-title: rect()
slug: Web/API/CanvasRenderingContext2D/rect
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.rect()`** Methode der Canvas 2D API fügt der aktuellen Pfad ein Rechteck hinzu.

Wie andere Methoden, die den aktuellen Pfad modifizieren, rendert diese Methode nichts direkt. Um das Rechteck auf eine Leinwand zu zeichnen, können Sie die Methoden {{domxref("CanvasRenderingContext2D.fill", "fill()")}} oder {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} verwenden.

> [!NOTE]
> Um ein Rechteck sowohl zu erstellen als auch zu rendern, verwenden Sie die {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} oder {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect()")}} Methoden.

## Syntax

```js-nolint
rect(x, y, width, height)
```

Die `rect()` Methode erstellt einen rechteckigen Pfad, dessen Startpunkt bei `(x, y)` liegt und dessen Größe durch `width` und `height` angegeben ist.

### Parameter

- `x`
  - : Die x-Achsen-Koordinate des Startpunkts des Rechtecks.
- `y`
  - : Die y-Achsen-Koordinate des Startpunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte sind nach rechts, negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte sind nach unten, negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen eines Rechtecks

Dieses Beispiel erstellt einen rechteckigen Pfad mit der `rect()` Methode. Der Pfad wird dann mit der `fill()` Methode gerendert.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Ecke des Rechtecks befindet sich bei (10, 20). Es hat eine Breite von 150 und eine Höhe von 100.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath(); // Startet einen neuen Pfad
ctx.rect(10, 20, 150, 100); // Fügt ein Rechteck zum aktuellen Pfad hinzu
ctx.fill(); // Rendert den Pfad
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_a_rectangle', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
