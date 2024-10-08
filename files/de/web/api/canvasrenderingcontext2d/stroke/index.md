---
title: "CanvasRenderingContext2D: stroke()-Methode"
short-title: stroke()
slug: Web/API/CanvasRenderingContext2D/stroke
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

Die **`CanvasRenderingContext2D.stroke()`**-Methode der Canvas 2D API umrandet den aktuellen oder angegebenen Pfad mit dem aktuellen Zeichenstil.

Linien werden zur Mitte eines Pfades ausgerichtet; mit anderen Worten, die Hälfte der Linie wird auf der Innenseite und die andere Hälfte auf der Außenseite gezeichnet.

Die Linie wird unter Verwendung der [Nicht-Null-Umwickelregel](https://en.wikipedia.org/wiki/Nonzero-rule) gezeichnet, was bedeutet, dass sich überschneidende Pfade weiterhin gefüllt werden.

## Syntax

```js-nolint
stroke()
stroke(path)
```

### Parameter

- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad zum Umranden.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

### Ein einfaches umrandetes Rechteck

Dieses Beispiel erstellt ein Rechteck mit der `rect()`-Methode und zeichnet es dann mit `stroke()` auf die Leinwand.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.rect(10, 10, 150, 100);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('A_simple_stroked_rectangle', 700, 180) }}

### Mehrfaches Umranden von Pfaden

Typischerweise werden Sie [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) für jede neue zu umrandende Sache aufrufen wollen. Wenn Sie das nicht tun, bleiben die vorherigen Unterpfade Teil des aktuellen Pfades und werden jedes Mal umrandet, wenn Sie die `stroke()`-Methode aufrufen. In einigen Fällen kann dies jedoch der gewünschte Effekt sein.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Dieser Code umrandet den ersten Pfad dreimal, den zweiten Pfad zweimal und den dritten Pfad nur einmal.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// First sub-path
ctx.lineWidth = 26;
ctx.strokeStyle = "orange";
ctx.moveTo(20, 20);
ctx.lineTo(160, 20);
ctx.stroke();

// Second sub-path
ctx.lineWidth = 14;
ctx.strokeStyle = "green";
ctx.moveTo(20, 80);
ctx.lineTo(220, 80);
ctx.stroke();

// Third sub-path
ctx.lineWidth = 4;
ctx.strokeStyle = "pink";
ctx.moveTo(20, 140);
ctx.lineTo(280, 140);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Re-stroking_paths', 700, 180) }}

### Umranden und Füllen

Wenn Sie sowohl einen Pfad umranden als auch füllen möchten, bestimmt die Reihenfolge dieser Aktionen das Ergebnis. In diesem Beispiel wird das Quadrat auf der linken Seite mit der Umrandung über der Füllung gezeichnet. Das Quadrat auf der rechten Seite wird mit der Füllung über der Umrandung gezeichnet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 16;
ctx.strokeStyle = "red";

// Stroke on top of fill
ctx.beginPath();
ctx.rect(25, 25, 100, 100);
ctx.fill();
ctx.stroke();

// Fill on top of stroke
ctx.beginPath();
ctx.rect(175, 25, 100, 100);
ctx.stroke();
ctx.fill();
```

#### Ergebnis

{{ EmbedLiveSample('Stroking_and_filling', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
