---
title: "CanvasRenderingContext2D: closePath()-Methode"
short-title: closePath()
slug: Web/API/CanvasRenderingContext2D/closePath
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.closePath()`**-Methode der Canvas 2D API versucht, eine gerade Linie vom aktuellen Punkt zum Beginn des aktuellen Unterpfades hinzuzufügen. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, tut diese Funktion nichts.

Diese Methode zeichnet nichts direkt auf die Leinwand. Sie können den Pfad mit den Methoden {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} oder {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} rendern.

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

Dieses Beispiel erzeugt die ersten beiden (diagonalen) Seiten eines Dreiecks mit der `lineTo()`-Methode. Danach wird die Basis des Dreiecks mit der `closePath()`-Methode erstellt, die automatisch die ersten und letzten Punkte der Form verbindet.

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
ctx.moveTo(20, 140); // Stift zur unteren linken Ecke bewegen
ctx.lineTo(120, 10); // Linie zur oberen Ecke
ctx.lineTo(220, 140); // Linie zur unteren rechten Ecke
ctx.closePath(); // Linie zur unteren linken Ecke
ctx.stroke();
```

#### Ergebnis

{{ EmbedLiveSample('Closing_a_triangle', 700, 180) }}

### Schließen von nur einem Unterpfad

Dieses Beispiel zeichnet ein Smiley-Gesicht, das aus drei getrennten Unterpfaden besteht.

> [!NOTE]
> Obwohl `closePath()` aufgerufen wird, nachdem alle Bögen erstellt wurden, wird nur der letzte Bogen (Unterpfad) geschlossen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die ersten beiden Bögen erzeugen die Augen des Gesichts. Der letzte Bogen erzeugt den Mund.

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

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.beginPath()")}}
