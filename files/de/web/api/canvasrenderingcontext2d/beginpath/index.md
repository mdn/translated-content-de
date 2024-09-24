---
title: "CanvasRenderingContext2D: beginPath()-Methode"
short-title: beginPath()
slug: Web/API/CanvasRenderingContext2D/beginPath
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.beginPath()`**-Methode der Canvas 2D API startet einen neuen Pfad, indem die Liste der Unterpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.

> [!NOTE]
> Um einen neuen Unterpfad zu erstellen, d.h. einen, der dem aktuellen Canvas-Zustand entspricht, können Sie {{domxref("CanvasRenderingContext2D.moveTo()")}} verwenden.

## Syntax

```js-nolint
beginPath()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Erstellen von unterschiedlichen Pfaden

Dieses Beispiel erstellt zwei Pfade, von denen jeder eine einzelne Linie enthält.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die `beginPath()`-Methode wird vor dem Beginn jeder Linie aufgerufen, damit sie mit unterschiedlichen Farben gezeichnet werden können.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Erster Pfad
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Zweiter Pfad
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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.closePath()")}}
