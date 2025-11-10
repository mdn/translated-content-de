---
title: "CanvasRenderingContext2D: restore()-Methode"
short-title: restore()
slug: Web/API/CanvasRenderingContext2D/restore
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die
**`CanvasRenderingContext2D.restore()`**-Methode der Canvas 2D API stellt den zuletzt gespeicherten Canvas-Zustand wieder her, indem der oberste Eintrag im Zeichnungszustands-Stack entfernt wird. Wenn kein gespeicherter Zustand vorhanden ist, macht diese Methode nichts.

Für weitere Informationen über den [Zeichnungszustand](/de/docs/Web/API/CanvasRenderingContext2D/save#the_drawing_state) lesen Sie [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save).

## Syntax

```js-nolint
restore()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Wiederherstellen eines gespeicherten Zustandes

Dieses Beispiel verwendet die `save()`-Methode, um den aktuellen Zustand zu speichern, und `restore()`, um ihn später wiederherzustellen, so dass Sie in der Lage sind, ein Rechteck mit dem aktuellen Zustand später zu zeichnen.

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

{{ EmbedLiveSample('Restoring_a_saved_state', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
