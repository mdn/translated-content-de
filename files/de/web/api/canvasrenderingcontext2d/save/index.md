---
title: "CanvasRenderingContext2D: save()-Methode"
short-title: save()
slug: Web/API/CanvasRenderingContext2D/save
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.save()`**
Methode der Canvas 2D API speichert den gesamten Zustand des Canvas, indem der aktuelle Zustand auf einen Stapel geschoben wird.

### Der Zeichenstatus

Der Zeichenstatus, der auf einen Stapel gespeichert wird, besteht aus:

- Der aktuellen Transformationsmatrix.
- Der aktuellen Schnittregion.
- Der aktuellen Strichliste.
- Den aktuellen Werten der folgenden Attribute:
  {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}},
  {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}},
  {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}},
  {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}},
  {{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}},
  {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}},
  {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}},
  {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}},
  {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}},
  {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}},
  {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}},
  {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}},
  {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}},
  {{domxref("CanvasRenderingContext2D.font", "font")}},
  {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}},
  {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}},
  {{domxref("CanvasRenderingContext2D.direction", "direction")}},
  {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}.

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

Dieses Beispiel verwendet die `save()`-Methode, um den aktuellen Zustand zu speichern und `restore()`, um ihn später wiederherzustellen, sodass Sie in der Lage sind, später ein Rechteck mit dem aktuellen Zustand zu zeichnen.

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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.restore()")}}
