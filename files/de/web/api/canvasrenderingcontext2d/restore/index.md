---
title: "CanvasRenderingContext2D: restore() Methode"
short-title: restore()
slug: Web/API/CanvasRenderingContext2D/restore
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.restore()`** Methode der Canvas 2D API stellt den zuletzt gespeicherten Canvas-Zustand wieder her, indem der oberste Eintrag im Zeichenstatus-Stack entfernt wird. Wenn kein gespeicherter Zustand vorhanden ist, tut diese Methode nichts.

Weitere Informationen zum [Zeichenstatus](/de/docs/Web/API/CanvasRenderingContext2D/save#description) finden Sie unter [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save).

## Syntax

```js-nolint
restore()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Wiederherstellen eines gespeicherten Zustands

In diesem Beispiel wird die `save()` Methode verwendet, um den aktuellen Zustand zu speichern und `restore()`, um ihn später wiederherzustellen, sodass Sie später mit dem aktuellen Zustand ein Rechteck zeichnen können.

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

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
