---
title: "CanvasRenderingContext2D: save() Methode"
short-title: save()
slug: Web/API/CanvasRenderingContext2D/save
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

Die **`CanvasRenderingContext2D.save()`**-Methode der Canvas 2D API speichert den gesamten Zustand des Canvas, indem sie den aktuellen Zustand auf einen Stapel legt.

### Der Zeichenstatus

Der Zeichenstatus, der auf einen Stapel gespeichert wird, besteht aus:

- Der aktuellen Transformationsmatrix.
- Der aktuellen Clipping-Region.
- Der aktuellen Strichliste.
- Den aktuellen Werten der folgenden Attribute:
  [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle),
  [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle),
  [`globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha),
  [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth),
  [`lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap),
  [`lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin),
  [`miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit),
  [`lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset),
  [`shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX),
  [`shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY),
  [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur),
  [`shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor),
  [`globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation),
  [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font),
  [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign),
  [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline),
  [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction),
  [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled).

## Syntax

```js-nolint
save()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Speichern des Zeichenstatus

Dieses Beispiel verwendet die `save()`-Methode, um den aktuellen Zustand zu speichern, und `restore()`, um ihn später wiederherzustellen, sodass Sie später ein Rechteck mit dem aktuellen Zustand zeichnen können.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Save the current state
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// Restore to the state saved by the most recent call to save()
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Saving_the_drawing_state', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
