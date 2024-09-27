---
title: "CanvasRenderingContext2D: restore() Methode"
short-title: restore()
slug: Web/API/CanvasRenderingContext2D/restore
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.restore()`**
Methode der Canvas 2D API stellt den zuletzt gespeicherten Canvas-Zustand wieder her, indem sie den obersten Eintrag im Zeichenstatus-Stack entfernt. Wenn kein Zustand gespeichert wurde, tut diese Methode nichts.

Für weitere Informationen über den [Zeichenstatus](/de/docs/Web/API/CanvasRenderingContext2D/save#the_drawing_state), siehe [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save).

## Syntax

```js-nolint
restore()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Wiederherstellung eines gespeicherten Zustands

Dieses Beispiel verwendet die `save()` Methode, um den aktuellen Zustand zu speichern, und
`restore()` um ihn später wiederherzustellen, sodass Sie in der Lage sind, später ein Rechteck mit dem aktuellen Zustand zu zeichnen.

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
