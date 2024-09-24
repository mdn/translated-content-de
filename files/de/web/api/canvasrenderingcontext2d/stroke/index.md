---
title: "CanvasRenderingContext2D: stroke() Methode"
short-title: stroke()
slug: Web/API/CanvasRenderingContext2D/stroke
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

Die **`CanvasRenderingContext2D.stroke()`**-Methode der Canvas 2D API umrandet (zeichnet die Außenlinien) des aktuellen oder angegebenen Pfads mit dem aktuellen Strichstil.

Striche sind zur Mitte eines Pfads ausgerichtet; mit anderen Worten, die Hälfte des Strichs wird auf der inneren Seite und die andere Hälfte auf der äußeren Seite gezeichnet.

Der Strich wird mit der [non-zero winding rule](https://en.wikipedia.org/wiki/Nonzero-rule) gezeichnet, was bedeutet, dass Pfadüberschneidungen trotzdem gefüllt werden.

## Syntax

```js-nolint
stroke()
stroke(path)
```

### Parameter

- `path`
  - : Ein {{domxref("Path2D")}} Pfad zum Umranden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

### Erneutes Umranden von Pfaden

Normalerweise möchten Sie {{domxref("CanvasRenderingContext2D.beginPath()", "beginPath()")}} für jedes neue Element, das Sie umranden möchten, aufrufen. Wenn nicht, bleiben die vorherigen Unterpfade Teil des aktuellen Pfads und werden jedes Mal umrandet, wenn Sie die `stroke()`-Methode aufrufen. In manchen Fällen ist dies jedoch der gewünschte Effekt.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Dieser Code umrandet den ersten Pfad dreimal, den zweiten Pfad zweimal und den dritten Pfad nur einmal.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Erster Unterpfad
ctx.lineWidth = 26;
ctx.strokeStyle = "orange";
ctx.moveTo(20, 20);
ctx.lineTo(160, 20);
ctx.stroke();

// Zweiter Unterpfad
ctx.lineWidth = 14;
ctx.strokeStyle = "green";
ctx.moveTo(20, 80);
ctx.lineTo(220, 80);
ctx.stroke();

// Dritter Unterpfad
ctx.lineWidth = 4;
ctx.strokeStyle = "pink";
ctx.moveTo(20, 140);
ctx.lineTo(280, 140);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Re-stroking_paths', 700, 180) }}

### Umrandung und Füllung

Wenn Sie einen Pfad sowohl umranden als auch füllen möchten, wird das Ergebnis durch die Reihenfolge dieser Aktionen bestimmt. In diesem Beispiel wird das Quadrat links mit dem Strich über der Füllung gezeichnet. Das Quadrat rechts wird mit der Füllung über dem Strich gezeichnet.

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

// Strich über der Füllung
ctx.beginPath();
ctx.rect(25, 25, 100, 100);
ctx.fill();
ctx.stroke();

// Füllung über dem Strich
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

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
