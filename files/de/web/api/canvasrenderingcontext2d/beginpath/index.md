---
title: "CanvasRenderingContext2D: beginPath()-Methode"
short-title: beginPath()
slug: Web/API/CanvasRenderingContext2D/beginPath
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Methode
**`CanvasRenderingContext2D.beginPath()`**
der Canvas 2D API startet einen neuen Pfad, indem die Liste der Unterpfade geleert wird. Rufen Sie
diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.

> [!NOTE]
> Um einen neuen Unterpfad zu erstellen, der dem aktuellen
> Canvas-Zustand entspricht, können Sie [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) verwenden.

## Syntax

```js-nolint
beginPath()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

### Erstellen von getrennten Pfaden

Dieses Beispiel erstellt zwei Pfade, die jeweils eine einzelne Linie enthalten.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Methode `beginPath()` wird vor Beginn jeder Linie aufgerufen, damit diese
mit unterschiedlichen Farben gezeichnet werden können.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// First path
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Second path
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Creating_distinct_paths', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
