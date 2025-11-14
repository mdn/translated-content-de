---
title: "CanvasRenderingContext2D: save() Methode"
short-title: save()
slug: Web/API/CanvasRenderingContext2D/save
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.save()`**-Methode der Canvas 2D API speichert den gesamten Zustand der Leinwand, indem sie den aktuellen Zustand auf einen Stapel schiebt.

## Syntax

```js-nolint
save()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Der Zeichenstatus, der auf einen Stapel gespeichert wird, besteht aus:

- Der aktuellen Transformationsmatrix.
- Der aktuellen Clipping-Region.
- Der aktuellen Strichliste.
- Den aktuellen Werten der folgenden Attribute:
  - [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - [`filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter)
  - [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - [`fontKerning`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning)
  - [`fontStretch`](/de/docs/Web/API/CanvasRenderingContext2D/fontStretch)
  - [`fontVariantCaps`](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
  - [`globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - [`globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - [`imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - [`letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
  - [`lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - [`lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - [`lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - [`miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - [`shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - [`shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - [`shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - [`textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - [`wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)

## Beispiele

### Speichern des Zeichenstatus

Dieses Beispiel verwendet die `save()`-Methode, um den aktuellen Zustand zu speichern und `restore()`, um ihn später wiederherzustellen, damit Sie in der Lage sind, später ein Rechteck mit dem aktuellen Zustand zu zeichnen.

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

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
