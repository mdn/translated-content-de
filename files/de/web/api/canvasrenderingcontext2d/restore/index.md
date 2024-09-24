---
title: "CanvasRenderingContext2D: restore()-Methode"
short-title: restore()
slug: Web/API/CanvasRenderingContext2D/restore
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.restore()`**
Methode der Canvas 2D API stellt den zuletzt gespeicherten Canvas-Zustand wieder her, indem sie den obersten Eintrag im Zeichenstatus-Stack entfernt. Wenn kein gespeicherter Zustand vorhanden ist, tut diese Methode nichts.

Für weitere Informationen über den [Zeichenstatus](/de/docs/Web/API/CanvasRenderingContext2D/save#the_drawing_state), siehe {{domxref("CanvasRenderingContext2D.save()")}}.

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

Dieses Beispiel verwendet die `save()`-Methode, um den aktuellen Zustand zu speichern und `restore()` um ihn später wiederherzustellen, sodass Sie später ein Rechteck mit dem aktuellen Zustand zeichnen können.

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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.save()")}}
