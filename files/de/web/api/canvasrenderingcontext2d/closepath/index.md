---
title: "CanvasRenderingContext2D: closePath()-Methode"
short-title: closePath()
slug: Web/API/CanvasRenderingContext2D/closePath
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.closePath()`**-Methode der Canvas 2D API versucht, eine gerade Linie vom aktuellen Punkt zum Anfang des aktuellen Unterpfads hinzuzufügen. Falls die Form bereits geschlossen ist oder nur einen Punkt hat, tut diese Funktion nichts.

Diese Methode zeichnet nichts direkt auf die Leinwand. Sie können den Pfad mit den Methoden [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) oder [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) rendern.

## Syntax

```js-nolint
closePath()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Schließen eines Dreiecks

Dieses Beispiel erstellt die ersten zwei (diagonalen) Seiten eines Dreiecks mit der `lineTo()`-Methode. Danach wird die Basis des Dreiecks mit der `closePath()`-Methode erstellt, die die ersten und letzten Punkte der Form automatisch verbindet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Ecken des Dreiecks befinden sich bei (20, 140), (120, 10) und (220, 140).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 140); // Move pen to bottom-left corner
ctx.lineTo(120, 10); // Line to top corner
ctx.lineTo(220, 140); // Line to bottom-right corner
ctx.closePath(); // Line to bottom-left corner
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Closing_a_triangle', 700, 180) }}

### Nur einen Unterpfad schließen

Dieses Beispiel zeichnet ein Smiley-Gesicht, das aus drei nicht verbundenen Unterpfaden besteht.

> [!NOTE]
> Obwohl `closePath()` aufgerufen wird, nachdem alle Bögen erstellt wurden, wird nur der letzte Bogen (Unterpfad) geschlossen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die ersten zwei Bögen erstellen die Augen des Gesichts. Der letzte Bogen erstellt den Mund.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(240, 20, 40, 0, Math.PI);
ctx.moveTo(100, 20);
ctx.arc(60, 20, 40, 0, Math.PI);
ctx.moveTo(215, 80);
ctx.arc(150, 80, 65, 0, Math.PI);
ctx.closePath();
ctx.lineWidth = 6;
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Closing_just_one_sub-path', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
